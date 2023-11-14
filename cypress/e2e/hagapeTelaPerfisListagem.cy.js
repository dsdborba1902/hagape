const login = require('../fixtures/login.json')
const baseurl = require('../fixtures/baseurl.json')


describe('Teste Tela de Perfis - Listagem', () => {
  it('Validar tela de perfis - menu Listagem', () => {
    cy.visit(baseurl.baseUrl);
    cy.contains('E-mail').type(login.username);
    cy.get('#password').type(login.senha);
    cy.get('.MuiButton-root').click();
    cy.contains('Login realizado com sucesso!');
    cy.get('.actions-left > .MuiButtonBase-root').click();
    cy.get('.css-1t0b3pu > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').should('have.text', "Início");
    cy.get(':nth-child(4) > .css-11coqyv > .css-164kvcj > .MuiTypography-root').click();
    cy.get(':nth-child(4) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(1) > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root').click();

    //Validar título da página
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should('be.visible');
    
    //Validar campo Perfil de Acesso
    cy.get('[style="height: 56px; width: 681.6px; min-width: 681.6px; max-width: 681.6px;"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should('be.visible');

    //Validar campo Status
    cy.get('[style="height: 56px; width: 170.4px; min-width: 170.4px; max-width: 170.4px;"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should('be.visible');

    //Validar campo Ações
    cy.get('[style="height: 56px; width: 100px; min-width: 100px; max-width: 100px;"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should('be.visible');

    //Validar botão Adicionar Perfil
    cy.get('.css-t5y380 > .MuiBox-root > .MuiButtonBase-root').should('be.visible');


    //logout
    cy.get('.MuiAvatar-img').click();
    cy.get('.css-ipchd0').click();
    cy.get('.MuiTypography-h6').should('be.visible');  

  })
  
})