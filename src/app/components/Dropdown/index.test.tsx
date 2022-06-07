import Dropdown from "."
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Dropdown component", () => {

	it("Correct props are shown", () => {

		const selected = "", setSelected = jest.fn()
		render(
			<Dropdown
				options={["option1", "option2"]}
				title="title"
				selected={selected}
				setSelected={setSelected}
			/>
		)

		expect(screen.queryByText(/title/i)).toBeInTheDocument()
		expect(screen.queryByText(/click to select/i)).toBeInTheDocument()
		expect(screen.queryByText(/option1/i)).not.toBeInTheDocument()

	})

	it("Correct props are shown #2", () => {

		const selected = "option2", setSelected = jest.fn()
		render(
			<Dropdown
				options={["option1", "option2"]}
				title="title"
				selected={selected}
				setSelected={setSelected}
			/>
		)

		expect(screen.queryByText(/option2/i)).toBeInTheDocument()
		expect(screen.queryByText(/click to select/i)).not.toBeInTheDocument()
		expect(screen.queryByText(/option1/i)).not.toBeInTheDocument()

	})

	it("Dropdown is working", () => {

		const selected = "", setSelected = jest.fn()
		render(
			<Dropdown
				options={["option1", "option2"]}
				title="title"
				selected={selected}
				setSelected={setSelected}
			/>
		)

		userEvent.click(screen.getByText(/click to select/i))
		expect(screen.queryByText(/option1/i)).toBeInTheDocument()

		userEvent.click(screen.getByText(/option1/i))
		expect(setSelected).toHaveBeenCalledWith("option1")
		expect(screen.queryByText(/option2/i)).not.toBeInTheDocument()

	})

})