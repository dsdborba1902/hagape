const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')


describe('Teste de login e logout', () => {
  it('Validar login e logout', () => {
    cy.visit(baseurl.baseUrl);
    cy.contains('E-mail').type(login.username);
    cy.get('#password').type(login.senha);
    cy.get('.MuiButton-root').click();
    cy.contains('Login realizado com sucesso!');
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
    cy.get(':nth-child(3) > .css-11coqyv > .css-164kvcj > .MuiTypography-root').click();
    cy.contains('Listagem').should('be.visible');
    cy.get(':nth-child(3) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(1) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').click();

    //Validar título da página
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should('be.visible');

    //Validar campo E-mail
    cy.get('[tabindex="0"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should('be.visible');

    //Validar campo Nome
    cy.get('[style="height: 56px; width: 473.333px; min-width: 473.333px; max-width: 473.333px;"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should('be.visible');

    //Validar campo Status
    cy.get('[aria-colindex="3"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should('be.visible');

    //Validar campo Ações
    cy.get('[style="height: 56px; width: 100px; min-width: 100px; max-width: 100px;"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should('be.visible');

    //Validar botão Adicionar Usuário
    cy.get('.css-t5y380 > .MuiBox-root > .MuiButtonBase-root').click();


    //logout
    //cy.get('.nav-header > .MuiButtonBase-root').click(); 
    cy.get('.MuiAvatar-img').click();
    cy.get('.css-ipchd0').click();
    cy.get('.MuiTypography-h6').should('be.visible');  

  })
  
})