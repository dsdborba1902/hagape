const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Tela de Usuário - Adicionar', () => {
  it('Validar tela de usuário - menu Adicionar', () => {
    cy.realizarLogin(baseurl,login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
    cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').click();

    //Validar título da página
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should('be.visible');

    //Validar ação do botão +Usuario
    cy.get('.css-t5y380 > .MuiBox-root > .MuiButtonBase-root').click();
    
    //Validar campo Nome
    cy.contains('Nome').should('be.visible');

    //Validar campo E-mail
    cy.contains('E-mail').should('be.visible');

    //Validar campo Setor
    cy.contains('Setor').should('be.visible');

    //Validar campo Perfil
    cy.contains('Perfil').should('be.visible');

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