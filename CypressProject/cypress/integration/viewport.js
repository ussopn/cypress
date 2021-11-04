/// <reference types="cypress"  />

describe('Test Viewport Capability', () => {
    it('Test Viewport', () => {
        cy.viewport('iphone-6')
    })
})
