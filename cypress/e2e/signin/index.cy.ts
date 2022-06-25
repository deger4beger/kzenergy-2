/// <reference types="cypress" />

describe("Signin page", () => {

	beforeEach(() => {
		cy.visit("/signin")
	})

	it("Signin page rendered", () => {

		cy.findByText(/signin form/i).should("be.visible")

	})

	it("Link is working", () => {

		cy.findByText(/signup/i).click()
		cy.findByText(/signup form/i).should("be.visible")

	})

	it("Signin and redirect right after is working", () => {

		cy.findByPlaceholderText(/email/i).type("email")
		cy.findByPlaceholderText(/password/i).type("password")

		cy.findAllByText(/signin/i).spread((_, secondBtn) => {
			secondBtn.click()
		})
		cy.findByText(/signin form/i).should("not.exist")

	})

})