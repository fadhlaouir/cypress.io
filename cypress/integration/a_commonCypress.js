//Common Cypress Assertions

//Common Assertions
.should('equal','some value');


//check the number of items
cy.get('.list-item')
.should('have.length',4) // Checking length

//Checking Existence
.should('exist')
.should('not.exist')

//Checking Visibility
.should('be.visible')
.should('not.be.visible')
....................................

//Checking CSS Classes
.should('have.class','list-item-selected')

//And Specific Styles
.should('have.css','background-color','blue')



//Checking Text Content
.invoke('text')
.should('contain')
.should('not.contain')
