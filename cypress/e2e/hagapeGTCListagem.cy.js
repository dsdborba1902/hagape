const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
import 'cypress-mochawesome-reporter/register'
import '../support/commands'

describe('Teste Listagem GTC', () => {
  it('Validar Listagem GTC', () => {
    cy.realizarLogin(baseurl, login);
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
    cy.get(':nth-child(8) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('be.visible');

    //Validar acesso a funcionalidade
    cy.get(':nth-child(8) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').click();

    //Validar nome da página
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should('be.visible');

    //Validar Filtros
    cy.get('.css-10ixgkq').should('be.visible');

    //Validar botão Nova GTC
    cy.get('.css-natppm').should('be.visible');

    //Validar campos da listagem
    cy.get('[data-id="123"] > [data-field="numero_guia"] > .MuiTypography-root').should('be.visible');
    cy.get('[data-id="123"] > [data-field="deceased.nome"] > .MuiTypography-root').should('be.visible');
    cy.get('[data-id="123"] > [data-field="declaracao_obito"] > .MuiTypography-root').should('be.visible');
    cy.get('[data-id="123"] > [data-field="numero_nota_fiscal"] > .MuiTypography-root').should('be.visible');
    cy.get('[data-id="123"] > [data-field="destinationGuides"] > .MuiBox-root > .MuiTypography-root').should('be.visible');
    cy.get('[data-id="123"] > [data-field="status"] > :nth-child(1) > .MuiChip-root > .MuiChip-label').should('be.visible');
    cy.get('[data-id="123"] > [data-field="created_at"] > .MuiBox-root > .MuiTypography-body2').should('be.visible');

    //Validar menu Ações
    cy.get('[data-id="123"] > [data-field="actions"] > .MuiButtonBase-root').should('be.extensible');

    //Logoff
    cy.get('.MuiAvatar-img').click();
    cy.get('.css-ipchd0').click();
    cy.get('.MuiTypography-h6').should('be.visible');


  })

})