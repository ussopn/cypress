/// <reference types="cypress"  />

beforeEach(() => {
    cy.visit('http://localhost:3000')
})

it('Signing In without an account', () => {
    let username = 'john';
    let password = '1';

    // sign in without input
    cy.get('.makeStyles-form-4').click()
    cy.get('#username-helper-text').should('be.visible')
    cy.contains('Username').should('be.visible')

    // username without password doesn't work but no error message
    cy.get('#username').type(username)
    cy.get('.makeStyles-form-4').type(`{enter}`)

    // password but no username
    cy.get('#username').clear()
    cy.get('#password').type(password).type(`{enter}`)
    cy.get('#username-helper-text').should('be.visible')
    cy.contains('Username').should('be.visible')

    // username under 4 required, displays error
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#password-helper-text').should('be.visible')

    // username that doesn't have an account
    password = '1234'
    cy.get('#password').type(password).type(`{enter}`)
    cy.get('#username-helper-text').should('not.exist')
    cy.get('#password-helper-text').should('not.exist')
    cy.get('.MuiAlert-message').should('be.visible')
    cy.get('.MuiButton-label').click()
    cy.get('.MuiAlert-message').should('be.visible')

});
