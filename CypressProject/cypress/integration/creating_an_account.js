/// <reference types="cypress"  />

const firstName = 'victor';
const lastName = 'schneider';
const username = 'ussopn';
let password = 'password1234';
let confirmPassword = 'password1234';

beforeEach(() =>
{
    cy.visit('http://localhost:3000')
    cy.get('[data-test=signup]').click()

    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#username').type(username)

})


it('Error should be visible with a password under 4 letters', () => {
    password = '123';
    cy.get('#password').type(password)
    cy.get('#password-helper-text').should('be.visible')
})

it('Error should be visible if confirm password doesn\'t match password', () => {
    password = 'password123'
    cy.get('#password').type(password)
    cy.get('#confirmPassword').type(confirmPassword)
    cy.get('#confirmPassword-helper-text').should('be.visible')
})

it('First name, last name and username empty but right confirm password', () => {
    cy.get('#firstName').clear()
    cy.get('#lastName').clear()
    cy.get('#username').clear()
    cy.get('#password').type(password)
    cy.get('#confirmPassword').type(confirmPassword)
    cy.get('#firstName-helper-text').should('be.visible')
    cy.get('#lastName-helper-text').should('be.visible')
    cy.get('#username-helper-text').should('be.visible')
})

it('Last name and username empty, first name filled but correct confirm password', () => {
    cy.get('#lastName').clear()
    cy.get('#username').clear()
    cy.get('#password').type(password)
    cy.get('#confirmPassword').type(confirmPassword)
    cy.get('#lastName-helper-text').should('be.visible')
    cy.get('#username-helper-text').should('be.visible')
})

it('First name and username empty, last name filled', () => {
    cy.get('#firstName').clear()
    cy.get('#username').clear()
    cy.get('#firstName-helper-text').should('be.visible')
    cy.get('#username-helper-text').should('be.visible')
})

it('First name and last name empty, username filled', () => {
    cy.get('#firstName').clear()
    cy.get('#lastName').clear()
    cy.get('#firstName-helper-text').should('be.visible')
    cy.get('#lastName-helper-text').should('be.visible')
})

it('First name empty, last name and username filled ', () => {
    cy.get('#firstName').clear()
    cy.get('#firstName-helper-text').should('be.visible')
})

it('Last name empty, first name and username filled', () => {
    cy.get('#lastName').clear()
    cy.get('#lastName-helper-text').should('be.visible')
})

it('Username empty, first name and last name filled but correct confirm password', () => {
    cy.get('#password').type(password)
    cy.get('#confirmPassword').type(confirmPassword)
    cy.get('#username').clear()
    cy.get('#username-helper-text').should('be.visible')
})

it('Successful sign up', () => {
    confirmPassword = password
    cy.get('#password').type(password)
    cy.get('#confirmPassword').type(confirmPassword)
    cy.get('[data-test=signup-submit]').click()

})
