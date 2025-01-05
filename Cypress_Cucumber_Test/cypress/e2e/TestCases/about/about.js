import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am logged in as a standard user for visit about page", () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user'); 
    cy.get('#password').type('secret_sauce');  
    cy.get('#login-button').click();           
    cy.url().should('include', '/inventory.html'); 
});

When("I click the menu icon for display the side bar", () => {
    cy.get(".bm-burger-button").click(); 
});

Then("The sidebar should be display", () => {
    cy.get(".bm-menu").should("be.visible"); 
});

When("I click the about button", () => {
    cy.get("#about_sidebar_link").click(); 
});

Then("I should be navigated to the about page", () => {
    cy.origin("https://saucelabs.com", () => {
        cy.on('uncaught:exception', (err) => {
            // Suppress uncaught exceptions related to 'TenantFeatures'
            if (err.message.includes('TenantFeatures')) {
                return false; // Prevent test failure
            }
        });
    });

    cy.url().should("include", "https://saucelabs.com");
});
