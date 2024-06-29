const conversations = require('./Re_conversations-page-objects');

export default class ConversationsPage {
  // Method to Select any active leads
  selectActiveLeads() {
    cy.get(conversations.activeRows).last().click({ force: true });
    return cy.get(conversations.drawerButton);
  }
}
