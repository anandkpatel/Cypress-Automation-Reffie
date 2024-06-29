// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('waitAndClickCSS', (selector, options = {}) => {
  cy.get(selector).click({ force: true });
});

Cypress.Commands.add('waitAndClickXpath', (selector) => {
  cy.xpath(selector, { timeout: 3000 }).should('be.visible').click();
});

Cypress.Commands.add('getText', (selector) => {
  cy.get(selector).scrollIntoView().invoke('text');
});

Cypress.Commands.add('waitAndType', (selector, value, options = {}) => {
  cy.get(selector)
    .should('be.visible', options).wait(1500)
    .type(value, { delay: 60 });
});

Cypress.Commands.add('elementExists', (selector) => {
  return cy.window().then(($window) => $window.document.querySelector(selector));
});
