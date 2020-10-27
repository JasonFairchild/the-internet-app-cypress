/// <reference types="cypress" />

describe("Login page", () => {
  beforeEach(() => {
    cy.visit("login");
  });

  it("Verifies Login greeting", () => {
    cy.findByRole('heading', { name: /Login Page/ });
  });

  it("Verifies invalid username", () => {
    cy.findByRole('textbox', { name: /Username/ })
      .type('Wrong {enter}');
    cy.findByText('Your username is invalid!');
  });

  it.only("Verifies invalid password", () => {
    cy.findByRole('textbox', { name: /Username/ })
      .type('tomsmith');
    cy.findByLabelText('Password')
      .type('invalid {enter}');
    cy.findByText('Your password is invalid!');
  });

  it("Verifies successful login", () => {
    
  });

  it("Verifies successful logout", () => {
    
  });
});
