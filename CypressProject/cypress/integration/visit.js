/// <reference types="cypress"  />

it('Visit Facebook', () => {
    const email =  'victor.schneider@epitech.eu';
    const password = 'password1234';

    cy.visit('https://www.facebook.com/')
    cy.get('[data-testid=cookie-policy-dialog-accept-button]').click()
    cy.get('[data-testid=royal_email]').type(`${email}`)
    cy.get('[data-testid=royal_pass]').type(`${password}{enter}`)
});
