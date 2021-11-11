/// <reference types="cypress"  />

beforeEach(() =>
{
    cy.visit('http://localhost:3000')

    const username = 'ussopn';
    const password = 'password123';

    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('[data-test=signin-submit]').click()
    cy.get('[data-test=user-onboarding-next] > .MuiButton-label').click()
})

it('Create bank account with numbers', () => {
    let bankName = '1234';
    let routingNumber = '12345678';
    let accountNumber = '12345678';

    // incorrect bank name
    cy.get('#bankaccount-bankName-input').type(bankName)
    cy.get('#bankaccount-bankName-input-helper-text').should('be.visible')

    // incorrect routing
    cy.get('#bankaccount-routingNumber-input').type(routingNumber)
    cy.get('#bankaccount-routingNumber-input-helper-text').should('be.visible')

    cy.get('#bankaccount-routingNumber-input').clear()
    routingNumber = '1234567890';
    cy.get('#bankaccount-routingNumber-input').type(routingNumber)
    cy.get('#bankaccount-routingNumber-input-helper-text').should('be.visible')

    // incorrect account number
    cy.get('#bankaccount-accountNumber-input').type(accountNumber)
    cy.get('#bankaccount-accountNumber-input-helper-text').should('be.visible')

    cy.get('#bankaccount-accountNumber-input').clear()
    accountNumber = '1234567890123';
    cy.get('#bankaccount-accountNumber-input').type(accountNumber)
    cy.get('#bankaccount-accountNumber-input-helper-text').should('be.visible')

    // successful creation
    bankName = '12345'
    routingNumber = '123456789'
    accountNumber = '1234567890'

    cy.get('#bankaccount-bankName-input').clear()
    cy.get('#bankaccount-routingNumber-input').clear()
    cy.get('#bankaccount-accountNumber-input').clear()
    cy.get('#bankaccount-bankName-input').type(bankName)
    cy.get('#bankaccount-routingNumber-input').type(routingNumber)
    cy.get('#bankaccount-accountNumber-input').type(accountNumber)
    cy.get('[data-test=bankaccount-submit] > .MuiButton-label').click()
});
