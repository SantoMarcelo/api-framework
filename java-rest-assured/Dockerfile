# Java runner for the test suite: JDK 21 + Maven 3.9 (same versions the README requires).
FROM maven:3.9-eclipse-temurin-21

WORKDIR /app

# Dependencies first, so the layer is cached until pom.xml changes
COPY pom.xml .
RUN mvn -B -q dependency:go-offline

COPY src ./src

# Arguments are passed straight to Maven: `docker compose run --rm tests test -Dgroups=contract`
ENTRYPOINT ["mvn", "-B"]
CMD ["test"]
