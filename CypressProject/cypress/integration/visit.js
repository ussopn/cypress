/// <reference types="cypress"  />

it('Visit Real World App', () => {
    let email =  '';
    let password = '';

    cy.visit('https://www.facebook.com/')
    cy.get('[data-testid=cookie-policy-dialog-accept-button]').click()
    cy.get('[data-testid=royal_email]').type(`${email}`)
    cy.get('[data-testid=royal_pass]').type(`${password}{enter}`)
});
