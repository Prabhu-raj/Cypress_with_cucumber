/// <reference types="cypress" />
/// <reference types="@badeball/cypress-cucumber-preprocessor" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

let stub;

When("I click on the Login Portal", () => {
    cy.get("#login-portal").invoke("removeAttr", "target").click();
})

When("I enter a valid username {}", (userName) => {
    cy.get("#text").type(userName);
})

When("I enter a valid password {}", (password) => {
    cy.get("#password").type(password);
})

When("I click on the Login button", () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get("#login-button").click();
})

Then('I should be presened with an alert box which contains text {string}', (expectedAlertText) => {
    expect(stub).to.have.been.calledWith(expectedAlertText);
})
