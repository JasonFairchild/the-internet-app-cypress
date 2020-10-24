/// <reference types="cypress" />

describe('Add elements', () => {
    beforeEach(() => {
      cy.visit('add_remove_elements/');
    });
  
    it('finds element', () => {
        cy.findByRole('button', {name: /Add/})
          .click();
    });
});