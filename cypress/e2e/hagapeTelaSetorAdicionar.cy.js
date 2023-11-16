const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Tela de Perfis - Listagem', () => {
  it('Validar tela de perfis - menu Listagem', () => {
    cy.realizarLogin(baseurl,login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
    cy.get(':nth-child(5) > .css-11coqyv > .css-164kvcj > .MuiTypography-root').click();
    cy.get(':nth-child(5) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(2) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').click();
    
    //Validar título da página
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should('be.visible');
    
    //Validar campo Nome
    cy.contains('Nome').should('be.visible');

    //Validar campo Descrição
    cy.contains('Descrição').should('be.visible');

    //Validar botão Ativo
    cy.get('.MuiSwitch-root').should('be.visible');

    //Validar botão Salvar
    cy.get('.MuiButton-contained').should('be.visible');

    //Validar botão Cancelar
    cy.get('.MuiButton-outlined').should('be.visible');

    //logout
    cy.get('.MuiAvatar-img').click();
    cy.get('.css-ipchd0').click();
    cy.get('.MuiTypography-h6').should('be.visible');
    
      

  })
  
})