/// <reference types="cypress" />

describe('Add/Remove elements page', () => {
  beforeEach(() => {
    cy.visit('add_remove_elements/');
  });

  it('Verifies section header', () => {
    cy.findByRole('heading', { name: /Add\/Remove Elements/});
  });

  it('Verifies add/remove for two items', () => {
    cy.findByRole('button', { name: /Add Element/ })
      .click();
    cy.findAllByRole('button', { name: /Delete/ })
      .should('have.lengthOf', 1);

    cy.findByRole('button', { name: /Add Element/ })
      .click();
    cy.findAllByRole('button', { name: /Delete/ })
      .should('have.lengthOf', 2);

    cy.findAllByRole('button', { name: /Delete/ })
      .eq(1)
      .click();
    cy.findAllByRole('button', { name: /Delete/ })
      .should('have.lengthOf', 1);

    cy.findAllByRole('button', { name: /Delete/ })
      .click();
    cy.findAllByRole('button', { name: /Delete/ })
      .should('not.exist');
  });
});
