import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Input from "."

describe("Input component", () => {

	it("input rendered and has correct attributes", () => {

		render(
			<Input
				name="input"
				placeholder="placeholder"
				type="text"
				value="hello"
				onChange={jest.fn()}
			/>
		)

		const input = screen.queryByRole("textbox")

		expect(input).toBeInTheDocument()
		expect(screen.queryByText(/👁/i)).not.toBeInTheDocument()

		expect(input).toHaveAttribute("name", "input")
		expect(input).toHaveAttribute("placeholder", "placeholder")
		expect(input).toHaveAttribute("type", "text")

	})

	it("showPass btn works well", () => {

		render(
			<Input
				name="input"
				placeholder="placeholder"
				type="password"
				value="hello"
				onChange={jest.fn()}
			/>
		)

		const input = screen.getByPlaceholderText("placeholder")
		const showPassBtn = screen.queryByText(/👁/i)

		expect(showPassBtn).toBeInTheDocument()
		expect(input).toHaveAttribute("type", "password")

		userEvent.click(showPassBtn!)
		expect(input).toHaveAttribute("type", "text")

		userEvent.click(showPassBtn!)
		expect(input).toHaveAttribute("type", "password")

	})

	it("onChange correctly triggers" ,() => {

		const onChange = jest.fn((e: React.ChangeEvent<HTMLInputElement>) => e.currentTarget.value)
		render(
			<Input
				name="input"
				placeholder="placeholder"
				type="text"
				value="hell"
				onChange={onChange}
			/>
		)

		const input: any = screen.getByRole("textbox")
		expect(input.value).toBe("hell")

		userEvent.type(input, "o")
		expect(onChange).toHaveBeenCalledTimes(1)
		expect(onChange).toHaveReturnedWith("hello")

		userEvent.type(input, "braza")
		expect(onChange).toHaveBeenCalledTimes(6)
		expect(onChange).toHaveReturnedWith("hella")

	})
})