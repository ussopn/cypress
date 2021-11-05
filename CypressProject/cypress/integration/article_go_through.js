/// <reference types="cypress"  />

describe('Article Go Through', () => {
    context('Context', () => {
        it('Should Expect To Contain Blog', () => {
            cy.visit('https://firstsiteguide.com/')
            cy.get('.pr-md-5 > .row > :nth-child(1) > .emoji-block > .emoji-block__title')
                .should(($p) => {
                    expect($p).to.contain('blog')
                })
            cy.get('.pr-md-5 > .row > :nth-child(1) > .emoji-block').click(
                cy.get('.pr-md-5 > .row > :nth-child(1) > .emoji-block')
                    .should(($image) => {
                        if ($image.length !== 1) {
                            throw new Error('Did not find 1 element')
                        }
                        const className= $image[0].className

                        if (!className.match(/emoji-block/)) {
                            throw new Error(`No class "emoji-block" in ${className}`)
                        }
                    })
            )
        })
    })
})
