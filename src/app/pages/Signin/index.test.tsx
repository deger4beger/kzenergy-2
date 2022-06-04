import { setupServer } from "msw/node"
import userEvent from "@testing-library/user-event"
import AuthTemplate from "../../components/AuthTemplate"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { render, screen } from "../../../lib/utils/test/redux"
import Signin from "."
import axios from "axios"

jest.mock("../../components/Input", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Input" />
    ))
}))
jest.mock("../../components/Button", () => ({
    __esModule: true,
    default: jest.fn(({onClick}) => (
        <div data-testid="Button" onClick={ onClick }></div>
    ))
}))
jest.mock("../../components/AuthTemplate", () => ({
    __esModule: true,
    default: jest.fn(({children, button}) => (
        <div data-testid="AuthTemplate">{ children }{ button }</div>
    ))
}))

describe("Signin component", () => {

	it("All components are in the document", () => {

		render(<Signin />)

		expect(screen.queryByTestId("AuthTemplate")).toBeInTheDocument()
		expect(screen.queryByTestId("Button")).toBeInTheDocument()
		expect(screen.queryAllByTestId("Input")).toHaveLength(2)

	})
	it("Correct props passed to AuthTemplate component", () => {

		render(<Signin />)

		screen.queryAllByTestId("Input").forEach(el => {
			expect(screen.queryByTestId("AuthTemplate")).toContainElement(el)
		})

		expect(AuthTemplate).toHaveBeenCalledWith(
			expect.objectContaining({
				error: null,
			}),
			expect.anything()

		)
	})
	it("Correct props passed to  Button", () => {

		render(<Signin />)

		expect(Button).toHaveBeenCalledWith(
			expect.objectContaining({
				disabled: true,
				loading: false
			}),
			expect.anything()
		)

	})
	it("Signin is happening", async () => {

		render(<Signin />)

		userEvent.click(screen.getByTestId("Button"))

		expect(await Button).toHaveBeenCalledWith(
			expect.objectContaining({
				loading: true
			}),
			expect.anything()
		)
		// expect(screen.queryByText(/Bruce/i)).not.toBeInTheDocument()
		// expect(await screen.findByText(/error/i)).toBeInTheDocument()
		// expect(await screen.findByText(/Bruce/i)).toBeInTheDocument()
		// expect(await screen.findByTestId("AuthTemplate")).not.toBeInTheDocument()

	})
})