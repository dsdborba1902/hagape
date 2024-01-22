const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Listagem GTC', () => {
  it('Validar Listagem GTC', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
   
    //Validar acesso a funcionalidade
    cy.contains('Guia de Transporte').click();

    //Validar nome da página
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should('be.visible');

    //Validar Filtros
    cy.get('.css-10ixgkq').should('be.visible');

    //Validar botão Nova GTC
    cy.contains('Nova GTC').should('be.visible');
   
    //Validar menu Ações
    cy.get('[data-id="123"] > [data-field="actions"] > .MuiButtonBase-root').should('be.extensible');

    //Logoff
    cy.get('.MuiAvatar-img').click();
    cy.contains('Sair').click();
    cy.contains('Bem-vindo!');

  })

})