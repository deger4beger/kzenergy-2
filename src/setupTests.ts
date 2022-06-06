// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom"
import { server } from "./lib/mocks/server"

beforeAll(() => {

	jest.spyOn(Storage.prototype, "setItem")
	jest.spyOn(Storage.prototype, "getItem")
	jest.spyOn(Storage.prototype, "removeItem")

  // Enable the mocking in tests.
  server.listen()
})

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers()
})

afterAll(() => {
  // Clean up once the tests are done.
  server.close()
})