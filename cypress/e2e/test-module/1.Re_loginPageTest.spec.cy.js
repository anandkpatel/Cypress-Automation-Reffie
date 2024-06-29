import LoginPage from '../page-module/user/login/Re_LoginPage';

describe('TS_Login --> Login Page Test', () => {
  const loginPage = new LoginPage();

  // To capture the data from data file
  before(() => {
    cy.fixture('Re_LoginData').then((data) => {
      globalThis.data = data;
    });
  });

  // Testcase to validate valid login
  it('TC_Login_01 - should successfully login with valid credentials', () => {
    loginPage.loginToApp(data.username, data.password);
    cy.url().should('include', '/landlord/inner/messages');
  });

  // Testcase to validate Invalid login
  it('TC_Login_02 - should validate that login with incorrect password gives error message', () => {
    loginPage.loginToApp(data.username, data.invalidPassword);
    loginPage.getLoginAlertMessage().should('be.visible');
    loginPage
      .getLoginAlertMessage()
      .should(
        'have.text',
        'Either the user does not exist or the password is incorrect',
      );
  });
});
