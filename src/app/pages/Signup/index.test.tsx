import { rest } from "msw"
import { server } from "../../../lib/mocks/server"
import { baseURL } from "../../../lib/api"
import { render, screen, waitFor } from "../../../lib/utils/test/redux"
import AuthTemplate from "../../components/AuthTemplate"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Dropdown from "../../components/Dropdown"
import userEvent from "@testing-library/user-event"
import Signup from "."

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
jest.mock("../../components/Dropdown", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Dropdown"></div>
    ))
}))
jest.mock("../../components/AuthTemplate", () => ({
    __esModule: true,
    default: jest.fn(({children, button}) => (
        <div data-testid="AuthTemplate">{ children }{ button }</div>
    ))
}))

describe("Signup component", () => {

	it("All components are in the document", () => {

		render(<Signup />)

		expect(screen.queryByTestId("AuthTemplate")).toBeInTheDocument()
		expect(screen.queryByTestId("Button")).toBeInTheDocument()
		expect(screen.queryByTestId("Dropdown")).toBeInTheDocument()
		expect(screen.queryAllByTestId("Input")).toHaveLength(5)

	})
	it("Correct props passed to AuthTemplate component", () => {

		render(<Signup />)

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

		render(<Signup />)

		expect(Button).toHaveBeenCalledWith(
			expect.objectContaining({
				disabled: true,
				loading: false
			}),
			expect.anything()
		)

	})
	it("Signup is happening without error", async () => {

		render(<Signup />)

		userEvent.click(screen.getByTestId("Button"))

		expect(await Button).toHaveBeenCalledWith(
			expect.objectContaining({
				loading: true
			}),
			expect.anything()
		)
		await waitFor(() => expect(AuthTemplate).not.toHaveBeenCalledWith(
			expect.objectContaining({
				error: expect.any(String),
			}),
			expect.anything())
		)

	})

	it("Signin is happening with error", async () => {

		server.use(
			rest.post(`${baseURL}/user/register/`, (req, res, ctx) => {
    		return res.once(
    			ctx.status(402),
    			ctx.json({ detail: "Signup error" }),
    			ctx.delay(150)
    		)
  		})
		)

		render(<Signup />)

		userEvent.click(screen.getByTestId("Button"))

		expect(await Button).toHaveBeenCalledWith(
			expect.objectContaining({
				loading: true
			}),
			expect.anything()
		)
		await waitFor(() => expect(AuthTemplate).toHaveBeenCalledWith(
			expect.objectContaining({
				error: "Signup error",
			}),
			expect.anything())
		)

	})
})