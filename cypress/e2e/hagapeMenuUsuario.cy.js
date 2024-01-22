const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Menu usuario', () => {
  it('Validar Menu usuário', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.contains('Usuários');

    //logout
    cy.realizarLogout();
    
  })

})