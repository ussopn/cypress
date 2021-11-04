/// <reference types="cypress" >/

beforeEach(() => {
    cy.visit('https://www.google.com/')
})
it('check length', () => {
    cy.get('#L2AGLb > .jyfHyd').click()
    cy.get('.gLFyf')
        .type('google')
        .type(`{enter}`)
    cy.get('#result-stats')
        .should('be.visible')
})
