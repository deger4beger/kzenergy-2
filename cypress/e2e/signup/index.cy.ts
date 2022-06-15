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

		cy.findAllByText(/signup/i).spread((_, secondBtn) => {
			secondBtn.click()
		})
		cy.findByText(/signup form/i).should("not.be.visible")

	})

})