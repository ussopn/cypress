/// <reference types="cypress"  />

describe('Test ScrollView Capability', () => {
    it('Test ScrollView', () => {
        cy.visit('https://firstsiteguide.com/what-is-blog/')
        cy.viewport('iphone-6')
        cy.get('.content-text > :nth-child(5)')
            .scrollIntoView()
    })
})
