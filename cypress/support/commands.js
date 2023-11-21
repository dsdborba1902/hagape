// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('realizarLogin', (baseurl, login) => {
    cy.visit(baseurl.baseUrl);
    cy.contains('E-mail').type(login.username);
    cy.get('#password').type(login.senha);
    cy.get('.MuiButton-root').click();
    cy.contains('Login realizado com sucesso!');
  });
  
  Cypress.Commands.add('realizarLogoff', () => {
    cy.get('.nav-header > .MuiButtonBase-root').click();
    cy.get('.MuiAvatar-img').click();
    cy.get('.css-ipchd0').click();
    cy.get('.MuiTypography-h6').should('be.visible');
  });

  Cypress.Commands.add('gerarUsuario', () => {
    const nome = 'Usuario' + Math.floor(Math.random() * 1000);
    const email = nome.toLowerCase().replace(' ', '') + '@example.com';
  
    return {
      nome,
      email
    };
  });

















//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })