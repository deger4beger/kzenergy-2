import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import { screen } from "../../../lib/utils/test/redux"
import { render } from "@testing-library/react"
import AuthTemplate from "."
import userEvent from "@testing-library/user-event"

describe("AuthTemplate component", () => {

	const history = createMemoryHistory()
	jest.spyOn(history, "push")

	it("Rendered with props", () => {

		render(
		  <Router history={history as any}>
		    <AuthTemplate
		      title="title"
		      button={<div data-testid="button" />}
		      isSigninForm={false}
		    >
		      <div data-testid="children" />
		    </AuthTemplate>
		  </Router>
		)

		expect(screen.queryByText(/title/i)).toBeInTheDocument()
		expect(screen.queryByTestId(/button/i)).toBeInTheDocument()
		expect(screen.queryByTestId(/children/i)).toBeInTheDocument()

	})

	it("Error is shown", () => {

		render(
		  <Router history={history as any}>
		    <AuthTemplate
		      title="title"
		      button={<div />}
		      isSigninForm={false}
		      error={"some error"}
		    >
		      <div />
		    </AuthTemplate>
		  </Router>
		)

		expect(screen.queryByText(/some error/i)).toBeInTheDocument()

	})

	it("First link is shown and works well", () => {

		render(
		  <Router history={history as any}>
		    <AuthTemplate
		      title="title"
		      button={<div />}
		      isSigninForm={true}
		      error={"some error"}
		    >
		      <div />
		    </AuthTemplate>
		  </Router>
		)

		expect(screen.queryByText(/signup/i)).toBeInTheDocument()
		userEvent.click(screen.getByText(/signup/i))
		expect(history.push).toHaveBeenCalledWith("/signup")

		expect(screen.queryByText(/login/)).not.toBeInTheDocument()

	})

	it("Seconds link is shown and works well", () => {

		render(
		  <Router history={history as any}>
		    <AuthTemplate
		      title="title"
		      button={<div />}
		      isSigninForm={false}
		      error={"some error"}
		    >
		      <div />
		    </AuthTemplate>
		  </Router>
		)

		expect(screen.queryByText(/login/i)).toBeInTheDocument()
		userEvent.click(screen.getByText(/login/i))
		expect(history.push).toHaveBeenCalledWith("/signin")

		expect(screen.queryByText(/signup/)).not.toBeInTheDocument()

	})

})