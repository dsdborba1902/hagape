const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'
import { faker } from "@faker-js/faker"

describe('Teste Cadastro Transportador GTC', () => {
  it('Validar Cadastro Transportador GTC', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    
    //Validar acesso a funcionalidade
    cy.contains('Guia de Transporte').click();

    //Validar ação do botão Nova GTC
    cy.get('.css-5vj4i6').click();

    //Validar cadastro de novo transportador
    //Acesso ao modal 
    cy.get(':nth-child(1) > .css-tzsjye > .MuiTypography-root').click();
    //Campos do modal
    cy.get('.MuiDialogContent-root').should('be.visible');

    //Validar botão Salvar
    cy.get('.MuiDialogActions-root > .MuiButton-contained').should('be.visible');

    //Validar botão Cancelar
    cy.get('.MuiDialogActions-root > .MuiButton-outlined').click();

    //Logoff
    cy.get('.MuiAvatar-img').click();
    cy.contains('Sair').click();
    cy.contains('Bem-vindo!');


  })

})