/// <reference types="cypress"  />

describe('Manage Cookies', () => {
    it('Cookies', () => {
        cy.visit('https://www.google.com/')
        cy.get('#L2AGLb > .jyfHyd').click()
        cy.getCookies().should('have.length', 2)
        cy.setCookie('session_id', '189jd09sufh33aaiidhf99d09')
        cy.getCookie('session_id').should(
            'have.property',
            'value',
            '189jd09sufh33aaiidhf99d09'
        )
    })
})
