module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/tests'],
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Relatório de Testes API",
      "outputPath": "./reports/test-report.html",
      "includeFailureMsg": true
    }]
  ]
};