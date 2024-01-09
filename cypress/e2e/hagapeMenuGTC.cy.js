const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Menu GTC', () => {
  it('Validar Menu GTC', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
    cy.get(':nth-child(8) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('be.visible');


    //Validar acesso a funcionalidade
    cy.get(':nth-child(8) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').click();


    //Logoff
    cy.get('.MuiAvatar-img').click();
    cy.get('.css-ipchd0').click();
    cy.get('.MuiTypography-h6').should('be.visible');


  })

})