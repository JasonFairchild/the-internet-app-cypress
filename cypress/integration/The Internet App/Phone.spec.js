/// <reference types="cypress" />

describe("Phone number page without country select", () => {
  // These tests do an odd reload because the site is different than the baseUrl set in config
  beforeEach(() => {
    cy.visit("https://catamphetamine.gitlab.io/react-phone-number-input/");
  });

  // Generally I would test phone validation at a lower level, not with E2E tests so much
  // I used cypress's playground selector to get generic selectors since good ones are sparse on this page
  it("Summary - Valid country code", () => {
    // Find the country-included phone field and type into it
    cy.get(':nth-child(2) > form > input')
      .type('18013731448');
    // Verify the value display field contains the correct value
    cy.contains('+18013731448');
  });

  it("Summary - Invalid country code", () => {
    cy.get(':nth-child(2) > form > input')
      .type('8013731448');
    // Find value display and verify it doesn't display the invalid input
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(5) > code')
      .should('not.have.value', '8013731448');
  });

  it("Country code select menu", () => {
    cy.get('form > select')
      .select('Afghanistan +93')
      .should('have.value', 'AF');
  });
});
