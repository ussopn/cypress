
/// <reference types="cypress"  />

it('test is written', () => {
    cy.visit('http://localhost:8081/')
    cy.get('input').clear().type('Hello').invoke('val')
        .then(val=>{
            const myVal = val;
            expect(myVal).to.equal('Hello');
        })
});
