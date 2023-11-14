const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')


describe('Teste de login e logout', () => {
  it('Validar login e logout', () => {
    cy.visit(baseurl.baseUrl);
    cy.contains('E-mail').type(login.username);
    cy.get('#password').type(login.senha);
    cy.get('.MuiButton-root').click();
    cy.contains('Login realizado com sucesso!');
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");

  //logout
  cy.get('.nav-header > .MuiButtonBase-root').click(); 
  cy.get('.MuiAvatar-img').click();
  cy.get('.css-ipchd0').click();
  cy.get('.MuiTypography-h6').should('be.visible');  

  })
  
})