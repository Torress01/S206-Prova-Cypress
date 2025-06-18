# Projeto de Testes de UI com Cypress

Este projeto contém testes de UI automatizados com Cypress, usando o site [The Internet Herokuapp](https://the-internet.herokuapp.com/) para validação de funcionalidades web.

## Estrutura do Projeto

```plaintext
├── cypress/
│   ├── e2e/                                    # Testes E2E por cenário
│   │   ├── cenario1_login.cy.js                # Teste de login
│   │   ├── cenario2_checkboxes.cy.js           # Teste de checkboxes
│   │   ├── cenario3_add_remove_elements.cy.js  # Teste de adicionar/remover elementos
│   │   └── cenario4_javascript_alerts.cy.js    # Teste de alerts JavaScript
│   └── support/
│       └── e2e.js                               # Configurações globais dos testes
├── cypress.config.js                           # Arquivo de configuração do Cypress
├── package.json                                 # Dependências e scripts do projeto
└── README.md 
```

## Pré-requisitos

* Node.js
* npm 

## Instalação

1.  Clone o repositório:
   
2.  Instale as dependências:
    
## Mochawesome

O projeto está configurado para usar o Mochawesome para relatórios. Disponível na pasta results

Cenários de Teste
O projeto inclui os seguintes cenários de teste, com casos positivos e negativos:

Cenário 1: Testes de Login

Caso 1.1: Login com credenciais válidas.

Caso 1.2 (Negativo): Usuário inválido.

Caso 1.3 (Negativo): Senha inválida.


Cenário 2: Interação com Checkboxes

Caso 2.1: Selecionar e deselecionar checkbox.

Caso 2.2: Verificar estado inicial.

Caso 2.3 (Negativo): Interação com checkbox inexistente.


Cenário 3: Adicionar/Remover Elementos Dinâmicos

Caso 3.1: Adicionar um elemento.

Caso 3.2: Adicionar múltiplos e remover um.

Caso 3.3 (Negativo): Tentativa de remover elemento inexistente.


Cenário 4: Interação com Alerts JavaScript

Caso 4.1: Aceitar alerta.

Caso 4.2: Confirmar e cancelar confirmação.

Caso 4.3: Inserir texto no prompt.

Caso 4.4 (Negativo): Ações comuns não geram alerts inesperados.
