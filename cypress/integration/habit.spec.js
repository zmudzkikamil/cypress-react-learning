/// <reference types="cypress" />

describe('habit dashboard', () => {
	beforeEach(() => {
		cy.visit('/habits');
	});
	it('should display modal when add btn is clicked', () => {
		cy.get('#habit-add-btn').click();
		cy.get('.modal-dialog').should('be.visible');
	});
	it('should display habit card when new habit is added', () => {
		cy.addHabit();
		cy.get('.HabitCard').contains('first habit').should('be.visible').and('have.class', 'HabitCard__habit-container');
	});
	it('should toggle the icon when habit card is clicked', () => {
		cy.addHabit();
		cy.get('.HabitCard')
			.find('.HabitCard__completion-icon')
			.should('have.attr', 'src', '/static/media/close.fa7e5ead.svg');
		cy.get('.HabitCard').click();
		cy.get('.HabitCard__completion-icon').should('have.attr', 'src', '/static/media/check.9e8832df.svg');
	});
});
