const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Tela de Perfis - Adicionar', () => {
  it('Validar tela de perfis - menu Adicionar', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
   
    //Validar ação do botão Adicionar Perfil
    cy.contains('Perfis').click();
    cy.get('.css-t5y380 > .MuiBox-root > .MuiButtonBase-root').click();

    //Validar Título da Página
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should('be.visible');

    //Validar campo Nome
    cy.contains('Nome').should('be.visible');

    //Validar permissões
    cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)').should('be.visible');
    cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(2)').should('be.visible');
    cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(3)').should('be.visible');
    cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('be.visible');
    cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('be.visible');
    cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('be.visible');

    //Validar botão Salvar
    cy.get('.MuiButton-contained').should('be.visible');

    //Validar botão Cancelar
    cy.get('.MuiButton-outlined').should('be.visible');

    //logout
    cy.get('.MuiAvatar-img').click();
    cy.contains('Sair').click();
    cy.contains('Bem-vindo!');

  })

})