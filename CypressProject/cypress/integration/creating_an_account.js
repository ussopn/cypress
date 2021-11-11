/// <reference types="cypress"  />

beforeEach(() =>
{
    cy.visit('http://localhost:3000')
    cy.get('[data-test=signup]').click()
})

it('Empty fields feedback errors', () => {
    const firstname = 'victor';
    const lastname = 'schneider';
    const password = 'password1234';
    let confirmPassword = 'password1234';

    // sign up without any fields
    cy.get('.MuiButton-label').click()
    cy.get('#firstName-helper-text').should('be.visible')

    // error should be visible when clearing first name
    cy.get('#firstName').type(firstname)
    cy.get('#firstName').clear()
    cy.get('.makeStyles-form-18').click()
    cy.get('#firstName-helper-text').should('be.visible')

    // error should be visible when clearing last name
    cy.get('#lastName').type(lastname)
    cy.get('#lastName').clear()
    cy.get('.makeStyles-form-18').click()
    cy.get('#lastName-helper-text').should('be.visible')

    // error should be visible when clearing password
    cy.get('#password').type(password)
    cy.get('#password').clear()
    cy.get('.makeStyles-form-18').click()
    cy.get('#password-helper-text').should('be.visible')

    // error should be visible when clearing password confirmation
    cy.get('#confirmPassword').type(confirmPassword)
    cy.get('#confirmPassword').clear()
    cy.get('.makeStyles-form-18').click()
    cy.get('#confirmPassword-helper-text').should('be.visible')

});

it('Signing up for an account with first name, last name and username filled' +
    'but error with passwords', () => {
    const firstName = 'victor';
    const lastName = 'schneider';
    const username = 'ussopn';
    let password = '123';
    let confirmPassword = '123';

    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#username').type(username)

    // error should be visible with a password under 4 letters
    cy.get('#password').type(password)
    cy.get('#password-helper-text').should('be.visible')

    // error should be visible if confirm password doesn't match password
    password = 'password123'
    cy.get('#password').type(password)
    cy.get('#confirmPassword').type(confirmPassword)
    cy.get('#confirmPassword-helper-text').should('be.visible')

    // first name, last name and username empty but right confirm password
    confirmPassword = password
    cy.get('#firstName').clear()
    cy.get('#lastName').clear()
    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.get('#confirmPassword').clear()
    cy.get('#password').type(password)
    cy.get('#confirmPassword').type(confirmPassword)
    cy.get('#firstName-helper-text').should('be.visible')

    // last name and username empty, first name filled but correct confirm password
    cy.get('#firstName').type(firstName)
    cy.get('#lastName-helper-text').should('be.visible')

    // first name and username empty, last name filled but correct confirm password
    cy.get('#firstName').clear()
    cy.get('#lastName').type(lastName)
    cy.get('#firstName-helper-text').should('be.visible')

    // first name and last name empty, username filled but correct confirm password
    cy.get('#lastName').clear()
    cy.get('#username').type(username)
    cy.get('#firstName-helper-text').should('be.visible')

    // username empty, first name and last name filled but correct confirm password
    cy.get('#username').clear()
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#username-helper-text').should('be.visible')

    // first name empty, last name and username filled but correct confirm password
    cy.get('#firstName').clear()
    cy.get('#username').type(username)
    cy.get('#firstName-helper-text').should('be.visible')

    // last name empty, first name and username filled but correct confirm password
    cy.get('#lastName').clear()
    cy.get('#firstName').type(firstName)
    cy.get('#lastName-helper-text').should('be.visible')

    // Successful sign up
    cy.get('#lastName').type(lastName)
    cy.get('[data-test=signup-submit]').click()

    // bad username but correct password
    cy.get('#username').type(username + 'bad')
    cy.get('#password').type(password)
    cy.get('[data-test=signin-submit]').click()
    cy.get('.MuiAlert-message')

    // correct username but bad password
    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.get('#username').type(username)
    cy.get('#password').type(password + 'bad')
    cy.get('[data-test=signin-submit]').click()
    cy.get('.MuiAlert-message')

    // successful signing in
    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('[data-test=signin-submit]').click()
});
