const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Menu Pesquisa Gratuidade', () => {
  it('Validar menu Pesquisa Gratuidade', () => {
    cy.realizarLogin(baseurl,login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
    cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', 'Pesquisa Gratuidade');

  //Acesso a funcionalidade
    cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').click();  
  //Campo Validação Código Gratuidade
  cy.get('.MuiGrid-grid-xs-4 > h3').should('be.visible');
  cy.get('.MuiGrid-grid-xs-3 > .demo-space-x > .MuiButtonBase-root').should('be.visible');
  
  //Campo Pesquisar Gratuidade







    //cy.realizarLogoff();   
  
  })
  
})