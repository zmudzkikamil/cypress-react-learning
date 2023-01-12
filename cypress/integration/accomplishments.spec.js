/// <reference types="cypress" />

describe('accomplishment dashboard', () => {
	beforeEach(() => {
		cy.visit('/accomplishments');
	});
	it('should show error if any information is missing', () => {
		//title is missing
		cy.get('.Accomplishment-input').should('have.value', '');
		cy.get('.Accomplishment-btn').click();
		cy.get('.Accomplishment-error-container').contains('Complete the items above to continue');
		//description is missing
		cy.get('.Accomplishment-textarea').should('have.value', '');
		cy.get('.Accomplishment-btn').click();
		cy.get('.Accomplishment-error-container').contains('Complete the items above to continue');
		//checkbox is unchecked
		cy.get('[data-cy="accomplishment-checkbox"]').uncheck().should('not.be.checked');
		cy.get('.Accomplishment-btn').click();
		cy.get('.Accomplishment-error-container').contains('Complete the items above to continue');
	});

	it('should display validation component if all info is filled', () => {
		cy.fillForm('Title of accomplishment', 'some text...', true);
		cy.get('.Accomplishment-btn').click();
		cy.contains('This Accomplisment was Successfully Submitted').should('be.visible');
	});
	it('should clear all inputs after "go back" click', () => {
		cy.fillForm('Title of accomplishment', 'some text...', true);
		cy.get('.Accomplishment-btn').click();
		cy.contains('Go Back').click();
		cy.get('.Accomplishment-input').should('have.value', '');
		cy.get('.Accomplishment-textarea').should('have.value', '');
		cy.get('[data-cy="accomplishment-checkbox"]').should('not.be.checked');
	});
});
