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
    
    //Validar etapa 02 Dados do falecido
    cy.contains('Dados do Falecido');

    //Validar etapa 03 Itinerario
    cy.contains('Itinerário');



    //Logoff
    cy.get('.MuiAvatar-img').click();  
    cy.contains('Sair').click();
    cy.contains('Bem-vindo!');


  })

})