/// <reference types="cypress" />

describe('Add/Remove elements page', () => {
    beforeEach(() => {
      cy.visit('add_remove_elements/');
    });
  
    it('Verifies section header', () => {
      
    });

    it('Verifies add/remove for two items', () => {
      cy.findByRole('button', {name: /Add/})
  });
});