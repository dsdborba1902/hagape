const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'

describe('Teste Menu Perfis', () => {
  it('Validar menu Perfis', () => {
    cy.visit(baseurl.baseUrl);
    cy.contains('E-mail').type(login.username);
    cy.get('#password').type(login.senha);
    cy.get('.MuiButton-root').click();
    cy.contains('Login realizado com sucesso!');
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
    cy.get(':nth-child(4) > .css-11coqyv > .css-164kvcj > .MuiTypography-root').click();
    cy.get(':nth-child(4) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(1) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('be.visible');
    cy.get(':nth-child(4) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(2) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('be.visible');
    
  //logout
   cy.get('.nav-header > .MuiButtonBase-root').click(); 
   cy.get('.MuiAvatar-img').click();
   cy.get('.css-ipchd0').click();
   cy.get('.MuiTypography-h6').should('be.visible');  

  })
  
})