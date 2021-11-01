
/// <reference types="cypress"  />

it('test is not written', () => {
    cy.visit('http://localhost:8081/')
    cy.get('input').clear().type('hello').invoke('val')
        .then(val=>{
            const myVal = val;
            expect(myVal).to.equal('hello');
        })
});
