const login = require('./Re_login-page-objects');

export default class LoginPage {
  // Method to navigate to url
  navigateToUrl() {
    cy.visit('https://platform-staging.reffie.me/');
  }

  // Method to login to Application
  loginToApp(username, password) {
    this.navigateToUrl();
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get(login.username).type(username);
    cy.get(login.password).should('be.visible').type(password);
    cy.get(login.signInBtn).click();
    cy.wait(2000);
  }

  // Method to capture error message for invalid login attempt
  getLoginAlertMessage() {
    cy.wait(2000);
    return cy.get(login.alertMessage);
  }
}
