const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')
const usuario = require('../fixtures/usuario.json')

import 'cypress-mochawesome-reporter/register'

describe('Teste Tela de Usuário - Incluir/Excluir Usuário', () => {
  it('Validar Incluir/Excluir Usuário', () => {
    cy.visit(baseurl.baseUrl);
    cy.contains('E-mail').type(login.username);
    cy.get('#password').type(login.senha);
    cy.get('.MuiButton-root').click();
    cy.contains('Login realizado com sucesso!');
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
    cy.get(':nth-child(3) > .css-11coqyv > .css-164kvcj > .MuiTypography-root').click();
    cy.contains('Adicionar').should('be.visible');
    cy.get(':nth-child(3) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(2) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').click();
    //Inserir nome de usuário
    cy.get('.css-jbs21z > :nth-child(1)').type(usuario.nome);
    //Inserir e-mail
    cy.get('.css-jbs21z > :nth-child(2)').type(usuario.email);
    //Selecionar setor
    cy.get('.css-jbs21z > :nth-child(3)').click();
    //cy.contains('.css-jbs21z > :nth-child(3)', 'Maya').click();
    //cy.get('#\:r3\:-option-3').click();
    


    //Selecionar Perfil
    //cy.get('.css-jbs21z > :nth-child(4)').click();
    //

    //Salvar
   // cy.get('.MuiButton-contained').click();






    //logout
   // cy.get('.MuiAvatar-img').click();
   // cy.get('.css-ipchd0').click();
   // cy.get('.MuiTypography-h6').should('be.visible');  

  })
  
})