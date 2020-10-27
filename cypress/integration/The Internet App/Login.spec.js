/// <reference types="cypress" />

describe("Login page", () => {
  beforeEach(() => {
    cy.visit("login");
  });

  const invalidUsername = 'Wrong';
  const invalidPassword = 'invalid';
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';

  it("Verifies Login greeting", () => {
    cy.findByRole('heading', { name: /Login Page/ });
  });

  it("Verifies invalid username", () => {
    //Custom command for working with the login form
    cy.typeLogin(invalidUsername, validPassword)
    cy.findByRole('button', { name: /Login/ })
      .click();
    cy.findByText('Your username is invalid!');
  });

  it("Verifies invalid password", () => {
    cy.typeLogin(validUsername, invalidPassword)
    cy.findByRole('button', { name: /Login/ })
      .click();
    cy.findByText('Your password is invalid!');
  });

  it("Verifies successful login", () => {
    cy.typeLogin(validUsername, validPassword)
    cy.findByRole('button', { name: /Login/ })
      .click();
    cy.findByText('You logged into a secure area!');
  });

  it("Verifies successful logout", () => {
    //  If dealing with real auth I would login through API after validating UI login separately
    cy.typeLogin(validUsername, validPassword)
    cy.findByRole('button', { name: /Login/ })
      .click();

    cy.findByRole('link', { name: /Logout/ })
      .click();
    cy.findByText('You logged out of the secure area!');
  });
});
