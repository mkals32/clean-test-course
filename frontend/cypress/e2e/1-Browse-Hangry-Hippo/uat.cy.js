describe('Shows Appeteasers', () => {
  it('Connect to Dev Server', () => {
    cy.visit('https://hangryhippo.quantic.host/');
  });
  it('selects Handhelds', () => {
    //TODO: Add a test to check Handhelds
    cy.contains('Handhelds').click();
    //Check if Cheese Burger is there.
    cy.contains('Cheese Burger');
    //Check if Fajita Tacos is there
    cy.contains('Fajita Tacos');
  });
  it('selects Appeteasers', () => {
    //TODO: Add a test to check Appeteasers
    cy.contains('Appeteasers').click();
    //Check if Tater Tots is there.
    cy.contains('Tater Tots');
    //Check if Buffalo Wings is there.
    cy.contains('Buffalo Wings');
    //Make sure that the Handhelds DO NOT EXIST
    cy.contains('Cheese Burger').should('not.exist');
    cy.contains('Fajita Tacos').should('not.exist');
  });
});
