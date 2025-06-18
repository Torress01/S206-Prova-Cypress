describe("Cenário 1: Testes de Login", () => {
  function gerarStringAleatoria(length = 8) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("Caso 1.1: Deve realizar o login com sucesso utilizando credenciais válidas", () => {
    const username = "tomsmith";
    const password = "SuperSecretPassword!";

    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get(".fa.fa-2x.fa-sign-in").click();

    cy.url().should("include", "/secure");
    cy.get("#flash.success")
      .should("be.visible")
      .and("contain", "You logged into a secure area!");
    cy.get(".button.secondary.radius")
      .should("be.visible")
      .and("contain", "Logout");
  });

  it("Caso 1.2: Negativo - Não deve permitir login com usuário inválido e exibir mensagem de erro", () => {
    const invalidUsername = `user_${gerarStringAleatoria(5)}`;
    const validPassword = "SuperSecretPassword!";

    cy.get("#username").type(invalidUsername);
    cy.get("#password").type(validPassword);
    cy.get(".fa.fa-2x.fa-sign-in").click();

    cy.url().should("not.include", "/secure");
    cy.get("#flash.error")
      .should("be.visible")
      .and("contain", "Your username is invalid!");
  });

  it("Caso 1.3: Negativo - Não deve permitir login com senha inválida e exibir mensagem de erro", () => {
    const validUsername = "tomsmith";
    const invalidPassword = `pass_${gerarStringAleatoria(5)}`;

    cy.get("#username").type(validUsername);
    cy.get("#password").type(invalidPassword);
    cy.get(".fa.fa-2x.fa-sign-in").click();

    cy.url().should("not.include", "/secure");
    cy.get("#flash.error")
      .should("be.visible")
      .and("contain", "Your password is invalid!");
  });
});
