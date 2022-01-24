Este readme tem como premissa ajudar a instalar o projeto incial.
Deve-se baixar o Vscode. e o Node.js

npm install --save-dev cypress cypress-cucumber-preprocessor


Caso de este erro -- This may be due to a missing library or dependency. https://on.cypress.io/required-dependencies
    npm install --save-dev cypress
    .\node_modules\.bin\cypress.cmd install --force

Para Abrir o Cypress
    npx cypress open


Após isso, abrir o index no Vscode, e incluir o comando abaixo.

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}


Estrutura do Projeto
    A pasta ‘fixtures’ e os arquivos ‘commands.js’, ‘index,js’ e package-lock.json’ oferecem configurações avançadas que não serão abordadas neste tutorial.
    integration: nesta pasta colocamos os nossos arquivos com os cenários de teste escritos no formato BDD.
    plugin/index.js: este arquivo é destinado para configuração de plugins. Utilizamos ele ao configurar o Cucumber.
    support: dentro desta pasta colocamos os steps, os scripts e o mapeamento de elementos de nossos testes.
    node_modules: aqui ficam os arquivos de funcionamento do Cypress e do Cucumber. Normalmente não precisamos mexer nesta pasta.
    cypress.json: neste arquivo podemos realizar configurações globais do nosso projeto. Ex.: criar variáveis globais, definir resolução do navegador, setar uma URL padrão, entre outros.

    Pastas
        steps: nesta pasta colocamos os passos que farão a conexão entre o que escrevemos em BDD e os scripts que fazemos em Cypress.

        pageobjects: aqui deixamos os scripts feitos em Cypress.
        A ideia do page objects é a de criarmos um arquivo.js para cada página ou fluxo do site. Dessa forma, mantemos a organização e facilitamos a manutenção do código, pois colocamos no arquivo os comandos que são executados na página/fluxo correspondentes ao nome do arquivo.
        Ex.: HomePage.js, PdpPage.js, Checkout.js.

        elements: possui o mesmo conceito do page objects, mas aqui colocamos os elementos da página. Tal organização permite que elementos sejam reutilizados e tenham fácil manutenção.
        Ex.: HomeElements.js, PdpElements.js, CheckoutElements.js.

    Adicionar ao Package.json
    {
    "scripts": {
        "test:chrome": "cypress run --browser chrome --no-exit"
    },
    "cypress-cucumber-preprocessor": {
        "step_definitions": "cypress/support/steps"
    }
    }
    
    Ajustar o Arquivo Cypress.json com o comando
    {
    "viewportWidth": 1366,
    "viewportHeight": 768,
    "defaultCommandTimeout": 10000,
    "baseUrl": "XXXXXXX"
    }