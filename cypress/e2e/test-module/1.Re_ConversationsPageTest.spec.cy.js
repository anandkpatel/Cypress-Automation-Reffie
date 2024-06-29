import LoginPage from '../page-module/user/login/Re_LoginPage';
import ConversationsPage from '../page-module/user/conversations/Re_ConversationsPage';

describe('TS_Login --> Login Page Test', () => {
  const loginPage = new LoginPage();
  const convPage = new ConversationsPage();

  // To capture the data from data file
  before(() => {
    cy.fixture('Re_LoginData').then((data) => {
      globalThis.data = data;
    });
  });

  // Testcase to validate drawer is opening when lead is selected
  it('TC_Login_01 - should successfully open drawer when we select any active leads', () => {
    loginPage.loginToApp(data.username, data.password);
    cy.url().should('include', '/landlord/inner/messages');
    const drawerBtn = convPage.selectActiveLeads();
    drawerBtn.should('be.visible');
  });
});
