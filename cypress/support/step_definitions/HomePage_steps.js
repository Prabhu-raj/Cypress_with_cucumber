/// <reference types="cypress" />
/// <reference types="@badeball/cypress-cucumber-preprocessor" />

import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
// import Base_PO from "../page-objects/Base_PO";   
import Homepage_PO from "../page-objects/Homepage_PO";

// const url = "https://www.webdriveruniversity.com"

// const basePage = new Base_PO();
const homePage = new Homepage_PO();

Before(() => {
  cy.log("Executes before each Scenario/Test.");
  cy.clearLocalStorage();
});

Given("I navigate to the webdriveruniversity homepage", () => {
  // cy.visit(url);
  // basePage.navigate("");
  homePage.navigate("");
});

When("I click on the contact us button", () => {
//   cy.get("#contact-us").invoke("removeAttr", "target").click();
  // cy.clickAndOpenLink_InSameTab("#contact-us");
  homePage.clickOn_ContactUs_Button();
});

