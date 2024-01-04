const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'
import { faker } from "@faker-js/faker"

describe('Teste Menu GTC', () => {
  it('Validar menu GTC', () => {
    cy.realizarLogin(baseurl,login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
    cy.get(':nth-child(8) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('be.visible');

  //Validar acesso a funcionalidade
  cy.get(':nth-child(8) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').click(); 

  //Validar ação do botão Nova GTC
  cy.get('.css-natppm').click();

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
 cy.get('.css-ipchd0').click();
 cy.get('.MuiTypography-h6').should('be.visible');


      })
  
})