// cypress/support/commands.js

// Importa os comandos padrão do Cypress (se necessário, mas geralmente não precisa importar aqui)
// import './commands'

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Comando customizado obrigatório para interagir com campos de texto e botões
// Isso demonstra a criação e uso de uma função.

/**
 * Preenche um campo de texto dado um seletor e um valor.
 * @param {string} selector - O seletor CSS do campo de texto (ex: '#userName').
 * @param {string} value - O valor a ser digitado no campo.
 */
Cypress.Commands.add("preencherCampo", (selector, value) => {
  cy.get(selector).should("be.visible").clear().type(value);
});

/**
 * Clica em um elemento dado um seletor.
 * @param {string} selector - O seletor CSS do elemento a ser clicado (ex: '#submit').
 */
Cypress.Commands.add("clicarElemento", (selector) => {
  cy.get(selector).should("be.visible").click();
});
