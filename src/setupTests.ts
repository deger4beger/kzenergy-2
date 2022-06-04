// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom"
import { server } from "./lib/mocks/server"

beforeAll(() => {

	jest.spyOn(window.localStorage.__proto__, "setItem")
	jest.spyOn(window.localStorage.__proto__, "getItem")
	jest.spyOn(window.localStorage.__proto__, "removeItem")

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