/// <reference types="cypress" />
/// <reference types="@badeball/cypress-cucumber-preprocessor" />

import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.webdriveruniversity.com"

Before(() => {
    cy.log("Executes before each Scenario/Test.");
    cy.clearLocalStorage();
})

Given("I navigate to the webdriveruniversity homepage", () => {
    cy.visit(url);
})

When(`I click on the contact us button`, () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
})

