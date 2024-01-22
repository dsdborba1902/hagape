const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Menu Perfis', () => {
  it('Validar menu Perfis', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.contains('Perfis');
   
    //logoff
    cy.realizarLogout();


  })

})