const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Tela de Setor - Adicionar', () => {
  it('Validar tela de setor - menu Adicionar', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.contains('Setores').click();

    //Validar título da página
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should('be.visible');

    //Validar botão +Setor
    cy.get('.css-t5y380 > .MuiBox-root > .MuiButtonBase-root').click();

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
    cy.contains('Sair').click();
    cy.contains('Bem-vindo!');



  })

})