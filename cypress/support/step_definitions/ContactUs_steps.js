/// <reference types="cypress" />
/// <reference types="@badeball/cypress-cucumber-preprocessor" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I type a first name", () => {
    cy.get("input[placeholder='First Name']").type("Prabhu");
})

When("I type a last name", () => {
    cy.get("input[placeholder='Last Name']").type("Raj");
})

When("I enter an email address", () => {
    cy.get("input[placeholder='Email Address']").type("prabhurajpudi@gmail.com");
})

When("I type a comment", () => {
    cy.get("textarea[placeholder='Comments']").type("Test comment");
})

When("I click on the submit button", () => {
    cy.get("input[value='SUBMIT']").click();
})

Then("I should be presented with a successful contact us submission message", () => {
    cy.get("div[id='contact_reply'] h1").should('have.text', 'Thank You for your Message!')
})