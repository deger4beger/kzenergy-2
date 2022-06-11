import { rest } from "msw"
import Signin from "."
import userEvent from "@testing-library/user-event"
import AuthTemplate from "../../components/AuthTemplate"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { render, screen, waitFor } from "../../../lib/utils/test/redux"
import { server } from "../../../lib/mocks/server"
import { baseURL } from "../../../lib/api"
import { url } from "../../../lib/mocks/server/handlers"

jest.mock("../../components/Input", () => ({
    __esModule: true,
    default: jest.fn(({onChange}) => (
        <input data-testid="Input" onChange={onChange} />
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

		screen.getAllByTestId("Input").forEach(el => {
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
	it("Signin is happening without error", async () => {

		render(<Signin />)

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
			rest.post(url("/user/login/"), (req, res, ctx) => {
    		return res.once(
    			ctx.status(402),
    			ctx.json({ detail: "Signin error" }),
    			ctx.delay(150)
    		)
  		})
		)

		render(<Signin />)

		userEvent.click(screen.getByTestId("Button"))

		expect(await Button).toHaveBeenCalledWith(
			expect.objectContaining({
				loading: true
			}),
			expect.anything()
		)
		await waitFor(() => expect(AuthTemplate).toHaveBeenCalledWith(
			expect.objectContaining({
				error: "Signin error",
			}),
			expect.anything())
		)

	})

	it("Signin is happening with non-custom server error", async () => {

		server.use(
			rest.post(url("/user/login/"), (req, res, ctx) => {
    		return res.once(
    			ctx.status(502),
    			ctx.delay(150)
    		)
  		})
		)

		render(<Signin />)

		userEvent.click(screen.getByTestId("Button"))

		await waitFor(() => expect(AuthTemplate).toHaveBeenCalledWith(
			expect.objectContaining({
				error: "Authorization failed",
			}),
			expect.anything())
		)

	})

	it("onChange handlers works well", () => {

		render(<Signin />)

		const inputs = screen.getAllByTestId("Input")
		userEvent.type(inputs[0], "mail")
		userEvent.type(inputs[1], "pass")

		expect(Input).toHaveBeenCalledWith(
			expect.objectContaining({
				value: "mail"
			}),
			expect.anything()
		)
		expect(Input).toHaveBeenCalledWith(
			expect.objectContaining({
				value: "pass"
			}),
			expect.anything()
		)

	})

})