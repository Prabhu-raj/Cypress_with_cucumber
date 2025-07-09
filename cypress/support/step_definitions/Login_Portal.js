/// <reference types="cypress" />
/// <reference types="@badeball/cypress-cucumber-preprocessor" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

// import Homepage_PO from "../page-objects/Homepage_PO";

import Login_PO from "../page_objects/Login_PO";

// const homePage = new Homepage_PO();

const loginPage = new Login_PO();

let stub;

Given("I navigate to the webdriveruniversity login page", () => {
    loginPage.navigateTO_Login_Page();
})


When("I click on the Login Portal", () => {
    // cy.get("#login-portal").invoke("removeAttr", "target").click();
      loginPage.clickOn_Login_Button();
}) 

When("I enter a valid username {}", (userName) => {
    // cy.get("#text").type(userName);
    loginPage.type_Username(userName);
})

When("I enter a valid password {}", (password) => {
    // cy.get("#password").type(password);
    loginPage.type_Password(password);
})

When("I click on the Login button", () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    // cy.get("#login-button").click();
    loginPage.clickOn_Login_Button();
})

Then('I should be presened with an alert box which contains text {string}', (expectedAlertText) => {
    expect(stub).to.have.been.calledWith(expectedAlertText);
})
