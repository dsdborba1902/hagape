const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Menu GTC', () => {
  it('Validar Menu GTC', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    
    //Validar acesso a funcionalidade
    cy.contains('Guia de Transporte').click();

    //Logoff
    cy.realizarLogout();

  })

})