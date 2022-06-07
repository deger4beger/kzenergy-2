import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Button from "."

describe("Button component", () => {

	it("onClick triggers and props shown well", () => {

		const content = "btn", onClick = jest.fn()
		render(
			<Button
				content={content}
				onClick={onClick}
				disabled={false}
				loading={false}
			/>
		)

		userEvent.click(screen.getByRole("button"))

		expect(onClick).toHaveBeenCalledTimes(1)

		userEvent.dblClick(screen.getByRole("button"))

		expect(onClick).toHaveBeenCalledTimes(3)
		expect(screen.queryByText(/-/)).not.toBeInTheDocument()
		expect(screen.queryByText(content)).toBeInTheDocument()

	})

	it("Loading is shown", () => {

		const content = "btn", onClick = jest.fn()

		render(
			<Button
				content={content}
				onClick={onClick}
				disabled={false}
				loading={true}
			/>
		)

		expect(screen.queryByText(/-/)).toBeInTheDocument()

	})

})