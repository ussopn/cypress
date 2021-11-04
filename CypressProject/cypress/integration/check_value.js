/// <reference types="cypress"  />

beforeEach(() => {
    cy.visit('https://www.wikipedia.org/')
})

it('Check String', () => {
    const check = 'check'


    cy.get('#searchInput')
        .type(check)
        .should(($input) => {
            const val = $input.val()

            expect(val).to.equal('check')
            expect(val).not.to.include('not check')
        })

});
