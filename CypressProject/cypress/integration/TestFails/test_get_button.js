/// <reference types="cypress"  />

it('test get button', () => {
    cy.visit('http://localhost:8081/')
    cy.get('button').should('not.exist')
    cy.get('[data-testid=todo-list]').should('exist')

});
