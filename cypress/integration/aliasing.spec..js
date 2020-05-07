/* eslint-disable no-undef */


describe('Text box with max characters', () => {
    it('displays the appropriate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
        .as('charsLeftSpan');

        cy.get('[data-cy="input-last-name"]')
        .as('charInput')

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '15');

        cy.get('@charInput')
            .type('hello');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@charInput')
            .type(' my firend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');
    });

    it('prevent the user from typing more characters once max is exceeded', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]')
        .as('charInput')

        cy.get('@charInput').type('qwertyuiopasdfghjkl;xcvbn');
        cy.get('@charInput').should('have.attr', 'value', 'qwertyuiopasdfg');
    })
})