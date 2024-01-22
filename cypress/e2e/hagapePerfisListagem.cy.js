const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Tela de Perfis - Listagem', () => {
  it('Validar tela de perfis - menu Listagem', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.contains('Perfis').click();

    //Validar Botão Adicionar Perfil
    cy.get('.css-t5y380 > .MuiBox-root > .MuiButtonBase-root').should('be.visible');

    //Validar listagem
    cy.get('[data-id="1"] > [data-field="name"]').should('be.visible');
    cy.get('[data-id="1"] > [data-field="status"] > :nth-child(1) > .MuiChip-root > .MuiChip-label').should('be.visible');

    //Validar botão Ações
    cy.get('[data-id="1"] > [data-field="actions"]').should('be.visible');

    //logoff
    cy.get('.MuiAvatar-img').click();
    cy.contains('Sair').click();
    cy.contains('Bem-vindo!');


  })

})