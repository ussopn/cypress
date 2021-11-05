/// <reference types="cypress"  />

describe('Post a Comment', () => {
    it('Write a Comment', () => {
        cy.visit('https://firstsiteguide.com/what-is-blog/')
        cy.get('#comment').type('this comment')
        cy.get('#author').type('vschneider98@gmail.com')
        cy.get('#email').type('victor')
        cy.get('#submit').click()
    })
})
