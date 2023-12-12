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
  cy.get('h4').should('be.visible');
  cy.get('.css-9kcp2 > h3').should('be.visible');
  cy.get('.MuiGrid2-container > :nth-child(2)').should('be.visible');
  cy.get(':nth-child(3) > .MuiFormControl-fullWidth').should('be.visible');
  cy.get('.MuiGrid2-grid-md-7').should('be.visible');
  cy.get('.MuiGrid2-grid-md-5').should('be.visible');

  //Botões de ação
  cy.get('.MuiGrid-grid-md-12 > .demo-space-x > .MuiButton-contained').should('be.visible');
  cy.get('.MuiButton-outlined').should('be.visible');

  //Logoff
  cy.get('.MuiAvatar-img').click();  
  cy.get('.css-ipchd0').click();
    cy.get('.MuiTypography-h6').should('be.visible');

      })
  
})