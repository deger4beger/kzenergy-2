/// <reference types="cypress" />

describe("Signup page", () => {

	beforeEach(() => {
		cy.visit("/signup")
	})

	it("Signup page rendered", () => {

		cy.findByText(/signup form/i).should("be.visible")

	})

	it("Link is working", () => {

		cy.findByText(/back/i).click()
		cy.findByText(/signin form/i).should("be.visible")

	})

	it("Signup and redirect right after is working", () => {

		cy.findByPlaceholderText(/name/i).type("name")
		cy.findByPlaceholderText(/email/i).type("email")
		cy.findByPlaceholderText(/phone/i).type("phone")
		cy.findByText(/select/i).click()
		cy.findByText(/ecologist/i).click()
		cy.findByPlaceholderText("Password").type("password")
		cy.findByPlaceholderText("Repeat password").type("password")

		cy.findAllByText(/signup/i).spread((_, secondBtn) => {
			secondBtn.click()
		})
		cy.findByText(/signup form/i).should("not.exist")

	})

})