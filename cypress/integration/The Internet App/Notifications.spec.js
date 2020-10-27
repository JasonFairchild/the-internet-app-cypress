/// <reference types="cypress" />

describe('Notification Message', () => {
    beforeEach(() => {
      cy.visit('notification_message_rendered');
    });

    it('Verifies section header', () => {
      
    });

    /*
    In general I do not like to do conditional testing. I like to find a way to control the determinism
    Here I intercept and force the response so that it is not random
    Often there are better ways of dealing with A/B testing, but this works for an app I don't control
    */
    it('Verifies successful message match', () => {
      cy.route2('notification_message_rendered', (req) => {
        req.reply((res) => {
          console.log(res.body);
          res.send({ fixture: 'static-message-response.html'});
        })
      });

      cy.findByRole('link', {name: /Click here/i})
        .click();
    });
});