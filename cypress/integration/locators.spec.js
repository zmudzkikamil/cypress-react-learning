/// <reference types="cypress" />

describe('Locators', () => {
	beforeEach(() => {
		cy.visit('/elements');
	});
	it('locating elements with get', () => {
		cy.get('#btn-with-id');
		cy.get("[type='submit']");
	});
	it('locating elements with contains', () => {
		cy.contains('Unique Text');
		cy.get('form').contains('Not Unique Text');
		cy.get('form').find('.Elements-btn');
	});
});
