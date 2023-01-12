// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('addHabit', () => {
	cy.get('#habit-add-btn').click();
	cy.get('.modal-dialog').find('input.form-control').type('first habit');
	cy.get('.btn-primary').click();
});
Cypress.Commands.add('fillForm', (title, description, isChecked) => {
	cy.get('.Accomplishment-input').type(title).should('have.value', title);
	cy.get('.Accomplishment-textarea').type(description).should('have.value', description);
	if (isChecked) {
		cy.get('[data-cy="accomplishment-checkbox"]').check().should('be.checked');
	} else {
		cy.get('[data-cy="accomplishment-checkbox"]').uncheck().should('not.be.checked');
	}
});
