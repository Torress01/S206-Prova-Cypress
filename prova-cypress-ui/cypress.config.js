const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Onde seus arquivos de teste estão
  },
  // Configuração do Mochawesome Reporter
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results", // Diretório onde o relatório será salvo
    overwrite: false, // 'true' sobrescreve relatórios antigos, 'false' cria novos
    html: true, // Gera o relatório em formato HTML
    json: true, // Gera um arquivo JSON com os resultados (útil para combinar relatórios)
  },
});
