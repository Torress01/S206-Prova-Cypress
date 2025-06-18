// cenario3_add_remove_elements.cy.js

describe("Cenário 3: Adicionar/Remover Elementos Dinâmicos", () => {
  function contarElementosVisiveis(selector) {
    return cy.get(selector).should("exist").its("length");
  }

  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
  });

  it('Caso 3.1: Deve adicionar um novo elemento "Delete"', () => {
    cy.get('button[onclick="addElement()"]').click();
    cy.get(".added-manually").should("have.length", 1);
    cy.get(".added-manually")
      .should("be.visible")
      .and("contain.text", "Delete");
  });

  it("Caso 3.2: Deve adicionar múltiplos elementos e remover um específico", () => {
    cy.get('button[onclick="addElement()"]').click();
    cy.get('button[onclick="addElement()"]').click();
    cy.get('button[onclick="addElement()"]').click();

    contarElementosVisiveis(".added-manually").should("eq", 3);

    cy.get(".added-manually").eq(1).click();

    contarElementosVisiveis(".added-manually").should("eq", 2);
  });

  it("Caso 3.3: Negativo - Não deve conseguir remover um elemento inexistente ou já removido", () => {
    cy.get('button[onclick="addElement()"]').click();
    contarElementosVisiveis(".added-manually").should("eq", 1);

    cy.get(".added-manually").eq(1).should("not.exist");

    contarElementosVisiveis(".added-manually").should("eq", 1);
    cy.get(".added-manually").eq(0).should("be.visible");
  });
});
