// cenario2_checkboxes.cy.js

describe("Cenário 2: Interação com Checkboxes", () => {
  function verificarEstadoCheckbox(selector, isChecked) {
    if (isChecked) {
      cy.get(selector).should("be.checked");
    } else {
      cy.get(selector).should("not.be.checked");
    }
  }

  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
  });

  it("Caso 2.1: Deve selecionar e deselecionar o primeiro checkbox", () => {
    cy.get('input[type="checkbox"]').eq(0).as("checkbox1");

    verificarEstadoCheckbox("@checkbox1", false);
    cy.get("@checkbox1").click();
    verificarEstadoCheckbox("@checkbox1", true);

    cy.get("@checkbox1").click();
    verificarEstadoCheckbox("@checkbox1", false);
  });

  it("Caso 2.2: Deve verificar que o segundo checkbox está inicialmente selecionado", () => {
    cy.get('input[type="checkbox"]').eq(1).as("checkbox2");

    verificarEstadoCheckbox("@checkbox2", true);
  });

  it("Caso 2.3: Negativo - Não deve conseguir interagir com um checkbox inexistente", () => {
    cy.get('input[type="checkbox"]').eq(99).should("not.exist");
  });
});
