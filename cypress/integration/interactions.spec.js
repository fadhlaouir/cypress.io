// SET CYPRESS_MY_ENV_VARIABLE="hello"    
alert(Cypress.env('MY_ENV_VARIABLE'));

describe('Basic page interactions', () => {
    beforeEach(() => {
        cy.visit('/example-4');
    });

    it('sets the header text to the item\'s name when double clicked', () => {
        cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
            .dblclick(); //for double click

        cy.get('[data-cy=box-1-selected-name')
            .invoke('text')
            .should('equal', 'Option Two');
    });

    it('displays the correct count for the number of selected check box', () => {
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
            .check(); //check box

        cy.get('[data-cy=box-2-selected-count')
            .invoke('text')
            .should('equal', '1');
    });
    it('displays the name of the currently selected item', () => {
        cy.get('[data-cy=box-3-dropdown')
            .select('Option Three'); //for select

        cy.get('[data-cy=box-3-selected-name]')
            .invoke('text')
            .should('equal', 'Option Three');
    })
    it('should display the name of the most recently hovered item', () => {
        cy.get('[data-cy=box-4-items-list] > :nth-child(2)')
            .trigger('mouseover') //for hover
            // .then(() => {
            //     debugger;
            // }) it's the same .debug()
            .debug();

        cy.get('[data-cy=box-4-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two')
    })

})