package com.apiframework.http;

import com.apiframework.config.Config;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.GeneralSecurityException;
import java.security.KeyFactory;
import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.cert.Certificate;
import java.security.cert.CertificateFactory;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

/**
 * Optional mTLS: builds in-memory key/trust stores from PEM files so the same {@code Certs/} files
 * used by the TypeScript version work here. Only the files that are configured are loaded.
 *
 * <p>The private key must be an unencrypted PKCS#8 PEM ({@code -----BEGIN PRIVATE KEY-----}). Convert
 * a traditional key with {@code openssl pkcs8 -topk8 -nocrypt -in key.pem -out key.pk8.pem}.
 */
final class TlsSupport {
  static final String STORE_PASSWORD = "changeit";

  private TlsSupport() {}

  static boolean isConfigured() {
    Config.Certs certs = Config.certs();
    return certs.hasClientCertificate() || !certs.ca().isEmpty();
  }

  static KeyStore keyStore() {
    Config.Certs certs = Config.certs();
    try {
      KeyStore store = KeyStore.getInstance(KeyStore.getDefaultType());
      store.load(null, null);
      if (certs.hasClientCertificate()) {
        List<Certificate> chain = readCertificates(certs.cert());
        store.setKeyEntry(
            "client",
            readPrivateKey(certs.key()),
            STORE_PASSWORD.toCharArray(),
            chain.toArray(new Certificate[0]));
      }
      return store;
    } catch (GeneralSecurityException | IOException e) {
      throw new IllegalStateException("Could not load the client TLS key/certificate", e);
    }
  }

  /** Trust store holding only the configured CA. {@code null} means "use the JVM default". */
  static KeyStore trustStore() {
    Config.Certs certs = Config.certs();
    if (certs.ca().isEmpty()) {
      return null;
    }
    try {
      KeyStore store = KeyStore.getInstance(KeyStore.getDefaultType());
      store.load(null, null);
      int index = 0;
      for (Certificate ca : readCertificates(certs.ca())) {
        store.setCertificateEntry("ca-" + index++, ca);
      }
      return store;
    } catch (GeneralSecurityException | IOException e) {
      throw new IllegalStateException("Could not load the TLS CA certificate", e);
    }
  }

  private static List<Certificate> readCertificates(String pemPath)
      throws IOException, GeneralSecurityException {
    CertificateFactory factory = CertificateFactory.getInstance("X.509");
    byte[] bytes = Files.readAllBytes(Path.of(pemPath));
    return new ArrayList<>(factory.generateCertificates(new ByteArrayInputStream(bytes)));
  }

  private static PrivateKey readPrivateKey(String pemPath)
      throws IOException, GeneralSecurityException {
    String pem = Files.readString(Path.of(pemPath));
    if (!pem.contains("BEGIN PRIVATE KEY")) {
      throw new IllegalStateException(
          pemPath + " must be an unencrypted PKCS#8 PEM (BEGIN PRIVATE KEY). See TlsSupport javadoc.");
    }
    String base64 =
        pem.replace("-----BEGIN PRIVATE KEY-----", "")
            .replace("-----END PRIVATE KEY-----", "")
            .replaceAll("\\s", "");
    byte[] der = Base64.getDecoder().decode(base64);
    PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(der);

    GeneralSecurityException last = null;
    for (String algorithm : new String[] {"RSA", "EC"}) {
      try {
        return KeyFactory.getInstance(algorithm).generatePrivate(spec);
      } catch (GeneralSecurityException e) {
        last = e;
      }
    }
    throw last;
  }
}
