/// <reference types="cypress" />

describe("Phone number page", () => {
  beforeEach(() => {
    cy.visit("react-phone-number-input/");
  });

  //Generally I would test phone validation at a lower level, not with E2E tests
  it("Summary - Valid country code", () => {
    
  });

  it("Summary - Invalid country code", () => {
    
  });

  it("Country code select menu", () => {
    
  });
});
