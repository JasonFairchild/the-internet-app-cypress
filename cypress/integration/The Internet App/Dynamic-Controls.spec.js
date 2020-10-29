/// <reference types="cypress" />

describe('Dynamic Controls', () => {
  beforeEach(() => {
    cy.visit('dynamic_controls');
  });

  it('Verifies section headers', () => {
    cy.findByRole('heading', { name: /Dynamic Controls/ });
    cy.findByRole('heading', { name: /Remove\/add/ });
    cy.findByRole('heading', { name: /Enable\/disable/ });
  });
  
  it('Verifies checkbox', () => {
    cy.findByRole('checkbox')
      .check()
      .should('be.checked');

    cy.findByRole('checkbox')
      .uncheck()
      .should('not.be.checked');
  });

  //If any of the waiting behavior was longer, a longer timeout option could be used on assertions
  it('Verifies the remove/add behavior', () => {
    cy.findByRole('button', { name: /Remove/ })
      .click();      
    cy.findByRole('checkbox')
      .should('not.exist');
    cy.findByText("It's gone!");

    cy.findByRole('button', { name: /Add/ })
      .click();
    cy.findByText("It's back!");
    cy.findByRole('checkbox');
  });

  it('Verifies enable/disable behavior', () => {
    cy.findByRole('textbox').should('be.disabled');

    cy.findByRole('button', { name: /Enable/ })
      .click();
    cy.findByText("It's enabled!");
    cy.findByRole('textbox')
      .type('test');

    cy.findByRole('button', { name: /Disable/ })
      .click();
    cy.findByRole('textbox').should('be.disabled');
    cy.findByText("It's disabled!");
  });
});
