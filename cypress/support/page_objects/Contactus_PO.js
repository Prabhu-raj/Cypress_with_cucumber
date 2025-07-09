/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Contactus_PO extends Base_PO{
    elements = {
        comment_TextField : () => cy.get('textarea[name="message"]'),
        submit_Button : () => cy.get('[type="submit"]'),
        submission_Header_Text: () =>   cy.get("input[value='SUBMIT']"),
        successful_Submission_Header_Txt: () => cy.get("div[id='contact_reply'] h1")
    }

    navigateTo_ContactUs_Page() {
        super.navigate("/Contact-Us/contactus.html");
    }

    type_FirstName(firstName) {
        cy.get('[name="first_name"]').type(firstName);
    }

    type_LastName(lastName) {
        cy.get('[name="last_name"]').type(lastName);
    }

    type_EmailAddress(email) {
        cy.get('[name="email"]').type(email);
    }

    type_Comment(comment) {
        this.elements.comment_TextField().type(comment);
    }

    clickOn_Submit_Button() {
        this.elements.submit_Button().click();
    }

    successful_Submission_Header_Txt() {
        this.elements.successful_Submission_Header_Txt()
    }

    validate_Submission_Header(expectedText) {
        this.elements.submission_Header_Text().contains(expectedText);
        this.elements.submission_Header_Text().invoke('text').should('include', expectedText);
        this.elements.successful_Submission_Header_Txt().contains(expectedText)
    }
}
export default Contactus_PO;