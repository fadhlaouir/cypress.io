describe('Text box with max characters', () => {
    it('displays the appropriate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-last-name"]')
            .type('hello');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy="input-last-name"]')
            .type(' my firend');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');
    });

    it('prevent the user from typing more characters once max is exceeded', () => {
        cy.visit('http://localhost:3000/example-3');



        cy.get('[data-cy="input-last-name"]').type('qwertyuiopasdfghjkl;xcvbn');
        cy.get('[data-cy="input-last-name"]').should('have.attr', 'value', 'qwertyuiopasdfg');
    })
})