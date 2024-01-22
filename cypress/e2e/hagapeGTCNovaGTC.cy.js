const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'
import { faker } from "@faker-js/faker"

describe('Teste Nova GTC', () => {
  it('Validar Nova GTC', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    
    //Validar acesso a funcionalidade
    cy.contains('Guia de Transporte').click();

    //Validar ação do botão Nova GTC
    cy.get('.css-5vj4i6').click();

    //Validar etapa 01 Transportador
    cy.contains('Transportador').click();
    cy.get(':nth-child(1) > .css-tzsjye > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('CONSOLARE').click();
    cy.contains('CONSOLARE').click();
    cy.get(':nth-child(2) > .css-tzsjye > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Consolação').click();
    cy.contains('Agência Consolação (CONSOLARE)').click();
    cy.get(':nth-child(3) > .MuiBox-root > :nth-child(2) > .MuiButtonBase-root').click();
   
    //Validar etapa 02 Dados do Falecido - Não Identificado
    cy.contains('Não identificado').should('be.visible');
    
    //Validar campos para preenchimento
    cy.get(':nth-child(3) > .MuiStepContent-root').should('be.visible');
    



    //Validar etapa 03 Itinerario
    cy.contains('Itinerário');










    //Logoff
    cy.get('.MuiAvatar-img').click();  
    cy.contains('Sair').click();
    cy.contains('Bem-vindo!');


  })

})