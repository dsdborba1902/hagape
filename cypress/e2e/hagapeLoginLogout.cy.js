const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'


describe('Teste de login e logout', () => {
  it('Validar login e logout', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.contains('Hagape');
  
    //logoff
    cy.realizarLogout();
       
    
  })

})