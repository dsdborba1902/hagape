const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'
import { faker } from "@faker-js/faker"

describe('Teste Nova GTC', () => {
  it('Validar Nova GTC', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
    cy.get(':nth-child(8) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('be.visible');

    //Validar acesso a funcionalidade
    cy.get(':nth-child(8) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').click();

    //Validar ação do botão Nova GTC
    cy.get('.css-natppm').click();

    //Validar etapa 01 Transportador
    cy.get(':nth-child(1) > .css-tzsjye > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('QA Transportes');
    cy.contains('QA Transportes').click();
    cy.get(':nth-child(2) > .css-tzsjye > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Agencia Central');
    cy.contains('Agencia Central').click();
    cy.get(':nth-child(3) > .MuiBox-root > :nth-child(2) > .MuiButtonBase-root').click();

    //Validar etapa 02 Dados do falecido











    //Validar etapa 03 Itinerario
































    //Logoff
    //cy.get('.MuiAvatar-img').click();  
    //cy.get('.css-ipchd0').click();
    //cy.get('.MuiTypography-h6').should('be.visible');


  })

})