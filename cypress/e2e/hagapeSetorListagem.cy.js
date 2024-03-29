const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Tela de Setor - Listagem', () => {
  it('Validar tela de setor - menu Listagem', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.contains('Setores').click();

    //Validar Nome da tela
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should('be.visible');

    //Validar Botão adicionar Setor
    cy.get('.css-t5y380 > .MuiBox-root > .MuiButtonBase-root').should('be.visible');

    //Validar listagem
    cy.get('[data-id="1"] > [data-field="nome"] > .MuiTypography-root').should('be.visible');
    cy.get('[data-id="1"] > [data-field="status"] > :nth-child(1) > .MuiChip-root > .MuiChip-label').should('be.visible');

    //Validar botão Ações
    cy.get('[data-id="1"] > [data-field="actions"] > .MuiButtonBase-root > .iconify').should('be.extensible');

    //logout
    cy.get('.MuiAvatar-img').click();
    cy.contains('Sair').click();
    cy.contains('Bem-vindo!');


  })

})