const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste de login e logout', () => {
  it('Validar login e logout', () => {
    cy.realizarLogin(baseurl,login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
  //logoff
    cy.realizarLogoff();  
  //logout
  //cy.get('.nav-header > .MuiButtonBase-root').click(); 
  //cy.get('.MuiAvatar-img').click();
  //cy.get('.css-ipchd0').click();
  //cy.get('.MuiTypography-h6').should('be.visible');  

  })
  
})