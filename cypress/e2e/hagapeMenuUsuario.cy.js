const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Menu usuario', () => {
  it('Validar menu usuário', () => {
    cy.realizarLogin(baseurl,login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
    cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').click();
       
    //logout
    cy.get('.MuiAvatar-img').click();
    cy.contains('Sair').click();
    
  })
  
})