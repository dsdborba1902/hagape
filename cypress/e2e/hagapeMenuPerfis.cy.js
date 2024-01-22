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
    cy.get('.nav-header > .MuiButtonBase-root').click();
    cy.get('.MuiAvatar-img').click();
    cy.contains('Sair').click();
    cy.contains('Bem-vindo!');


  })

})