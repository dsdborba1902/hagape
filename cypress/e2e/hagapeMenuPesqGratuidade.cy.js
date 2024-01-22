const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Menu Pesquisa Gratuidade', () => {
  it('Validar Menu Pesquisa Gratuidade', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    
    //Validar acesso a funcionalidade
    cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').click();

    //Campo Validação Código Gratuidade
    cy.get('.MuiGrid-grid-xs-4 > h3').should('be.visible');
    cy.get('.MuiGrid-grid-xs-3 > .demo-space-x > .MuiButtonBase-root').should('be.visible');

    //Validar campos Pesquisar Gratuidade
    cy.get('h4').should('be.visible');
    cy.get('.css-9kcp2 > h3').should('be.visible');
    cy.get('.MuiGrid2-container > :nth-child(2)').should('be.visible');
    cy.get('.MuiGrid2-container > :nth-child(2) > .MuiFormControl-fullWidth > .MuiFormControl-root > .MuiInputBase-root').should('be.visible');
    cy.get('.MuiGrid2-container > :nth-child(4)').should('be.visible');
    cy.get('.MuiGrid2-container > :nth-child(6)').should('be.visible');
    cy.get('.MuiGrid2-container > :nth-child(7)').should('be.visible');

    //Validar botão Verificar Gratuidade
    cy.get('.MuiGrid-grid-md-12 > .demo-space-x > .MuiButton-contained').should('be.visible');

    //Validar botão Limpar  
    cy.get('.MuiButton-outlined').should('be.visible');

    //Logoff
    cy.get('.MuiAvatar-img').click();
    cy.contains('Sair').click();
    cy.contains('Bem-vindo!');

  })

})