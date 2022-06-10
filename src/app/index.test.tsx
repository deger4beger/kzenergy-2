import { render, screen } from "../lib/utils/test/redux"
import * as ReduxHooks from "./hooks/redux"
import App from "."

jest.mock("./parts/Header", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Header" />
    ))
}))
jest.mock("./parts/Footer", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Footer" />
    ))
}))
jest.mock("./components/AppRouter", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="AppRouter" />
    ))
}))
jest.mock("./components/Preloader", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Preloader" />
    ))
}))

describe("App component", () => {
	it("Preloader is shown before other components", () => {

		jest.spyOn(ReduxHooks, "useAppSelector").mockReturnValueOnce(false)

		render(<App />)

		expect(screen.queryByTestId("Preloader")).toBeInTheDocument()
		expect(screen.queryByTestId("AppRouter")).not.toBeInTheDocument()

	})
	it("All components are shown after initialization", async () => {

		render(<App />)

		expect(await screen.findByTestId("Header")).toBeInTheDocument()
		expect(await screen.findByTestId("Footer")).toBeInTheDocument()
		expect(await screen.findByTestId("AppRouter")).toBeInTheDocument()

		expect(screen.queryByTestId("Preloader")).not.toBeInTheDocument()

	})
})