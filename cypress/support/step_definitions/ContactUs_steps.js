/// <reference types="cypress" />
/// <reference types="@badeball/cypress-cucumber-preprocessor" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Contactus_PO from "../page_objects/Contactus_PO";

const contactus_Page = new Contactus_PO();

When("I type a first name", () => {
  cy.wait(3000);
  // cy.get("input[placeholder='First Name']").type("Prabhu");
  contactus_Page.type_FirstName("Prabhu");
});

When("I type a last name", () => {
  // cy.get("input[placeholder='Last Name']").type("Raj");
  contactus_Page.type_LastName("Raj");
});

When("I enter an email address", () => {
  // cy.get("input[placeholder='Email Address']").type("prabhurajpudi@gmail.com");
  contactus_Page.type_EmailAddress("prabhurajpudi@gmail.com");
});

When("I type a comment", () => {
  // cy.get("textarea[placeholder='Comments']").type("Test comment");
  contactus_Page.type_Comment("Test comment");
});

When("I click on the submit button", () => {
  cy.get("input[value='SUBMIT']").click();
  // contactus_Page.clickOn_Submit_Button.click();
});

Then(
  "I should be presented with a successful contact us submission message",
  () => {
    cy.get("div[id='contact_reply'] h1").should(
      "have.text",
      "Thank You for your Message!"
    );
    // cy.wait(5000);
    // contactus_Page.successful_Submission_Header_Txt.should(
    //   "have.text",
    //   "Thank You for your Message!"
    // );
  }
);

Then("I should see an error message", () => {
  cy.get("body").contains("Error: all fields are required");
});

When("I type a specific first name {string}", (firstName) => {
  cy.get("input[placeholder='First Name']").type(firstName);
});

When("I type a specific last name {string}", (lastName) => {
  cy.get("input[placeholder='Last Name']").type(lastName);
});

When("I type a specific email address {string}", (email) => {
  cy.get("input[placeholder='Email Address']").type(email);
});

When(
  "I type a specific word {string} and number {int} within the comment input field",
  (name, number) => {
    cy.get("textarea[placeholder='Comments']").type(name + " " + number);
    1;
  }
);

When(
  "I type a first name {word} and a last name {string}",
  (firstName, lastName) => {
    cy.get("input[placeholder='First Name']").type(firstName);
    cy.get("input[placeholder='Last Name']").type(lastName);
  }
);

When("I type a {string} and a comment {string}", (email, word) => {
  cy.get("input[placeholder='Email Address']").type(email);
  cy.get("textarea[placeholder='Comments']").type(word);
});

Then("I should be presented with header text {string}", (text) => {
  cy.get("body").contains(text);
});
