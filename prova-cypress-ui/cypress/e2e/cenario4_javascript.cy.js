// cenario4_javascript_alerts.cy.js

describe("Cenário 4: Interação com Alerts JavaScript", () => {
  function simularPromptInput(text) {
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns(text);
    });
  }

  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
  });

  it("Caso 4.1: Deve aceitar um alerta JavaScript", () => {
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am a JS Alert");
    });

    cy.get('button[onclick="jsAlert()"]').click();
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("Caso 4.2: Deve confirmar e cancelar um alerta de confirmação JavaScript", () => {
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("I am a JS Confirm");
      return true;
    });
    cy.get('button[onclick="jsConfirm()"]').click();
    cy.get("#result").should("have.text", "You clicked: Cancel");

    cy.on("window:confirm", (str) => {
      expect(str).to.equal("I am a JS Confirm");
      return false;
    });
    cy.get('button[onclick="jsConfirm()"]').click();
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("Caso 4.3: Deve inserir texto em um prompt JavaScript e aceitar", () => {
    const inputText = "Meu Texto de Teste";

    simularPromptInput(inputText);
    cy.get('button[onclick="jsPrompt()"]').click();
    cy.get("#result").should("have.text", `You entered: ${inputText}`);
  });

  it("Caso 4.4: Negativo - Não deve exibir nenhum tipo de alert/confirm/prompt ao clicar em um link normal", () => {
    const alertStub = cy.stub().as("alertStub");
    const confirmStub = cy.stub().as("confirmStub");
    const promptStub = cy.stub().as("promptStub");

    cy.on("window:alert", alertStub);
    cy.on("window:confirm", confirmStub);
    cy.on("window:prompt", promptStub);

    cy.get('a[href="http://elementalselenium.com/"]').click();

    cy.get("@alertStub").should("not.have.been.called");
    cy.get("@confirmStub").should("not.have.been.called");
    cy.get("@promptStub").should("not.have.been.called");
  });
});
