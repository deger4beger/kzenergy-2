/// <reference types="cypress" />

describe("Signup page", () => {

	beforeEach(() => {
		cy.visit("/signup")
	})

	it("Signup page rendered", () => {

		cy.findByText(/signup/i).should("be.visible")

	})

})