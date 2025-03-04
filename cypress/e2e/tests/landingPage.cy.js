import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given("I am on the landing page", () => {
    cy.visit('/')
    
})