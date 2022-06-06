import { isTokenValid } from "./index"

describe("isTokenValid function", () => {

	it("Invalid if no user", () => {

		Storage.prototype.getItem = jest.fn(() => "")

		expect(isTokenValid()).toBeFalsy()

	})

	it("Invalid if token has expired", () => {

		const userData = {
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\
				eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjoxNTE2MjM5MDIyfQ.\
				uABcDgaLYZTcO8PbD317GCngfBBYmxwg1DKDZU3YBZ4",
			fullname: "John Doe"
		}
		Storage.prototype.getItem = jest.fn(() => JSON.stringify(userData))

		expect(isTokenValid()).toBeFalsy()
		expect(localStorage.removeItem).toHaveBeenCalled()

	})

	it("Invalid if token has invalid format (error in decode)", () => {

		const userData = {
			token: false,
			fullname: "John Doe"
		}
		Storage.prototype.getItem = jest.fn(() => JSON.stringify(userData))

		expect(isTokenValid()).toBeFalsy()
		expect(localStorage.removeItem).toHaveBeenCalled()

	})

	it("Valid if token has not expired", () => {

		const userData = {
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\
				eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjo5NTE2MjM5MDIyfQ.\
				uABcDgaLYZTcO8PbD317GCngfBBYmxwg1DKDZU3YBZ4",
			fullname: "John Doe"
		}
		Storage.prototype.getItem = jest.fn(() => JSON.stringify(userData))

		expect(isTokenValid()).toEqual(userData)

	})

})