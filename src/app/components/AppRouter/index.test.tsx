import Unauthorized from "./routes/Unauthorized"
import Facility from "./routes/Facility"
import Ecology from "./routes/Ecology"
import Admin from "./routes/Admin"
import Preloader from "../Preloader"
import AppRouter from "."
import * as ReduxHooks from "../../hooks/redux"
import { render, screen } from "../../../lib/utils/test/redux"
import { UserRoles } from "../../../types/user"

jest.mock("./routes/Unauthorized", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Unauthorized" />
    ))
}))
jest.mock("./routes/Facility", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Facility" />
    ))
}))
jest.mock("./routes/Ecology", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Ecology" />
    ))
}))
jest.mock("./routes/Admin", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Admin" />
    ))
}))
jest.mock("../Preloader", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="Preloader" />
    ))
}))

describe("AppRouter component", () => {

	it("Unauthorized rendered", async () => {

		render(<AppRouter />)

		expect(await screen.findByTestId("Unauthorized")).toBeInTheDocument()

	})

	it("Facility rendered when role is FacilityOne", async () => {

		jest.spyOn(ReduxHooks, "useAppSelector").mockReturnValue(UserRoles.FacilityOne)

		render(<AppRouter />)

		expect(await screen.findByTestId("Facility")).toBeInTheDocument()

	})

	it("Facility rendered when role is FacilityTwo", async () => {

		jest.spyOn(ReduxHooks, "useAppSelector").mockReturnValue(UserRoles.FacilityTwo)

		render(<AppRouter />)

		expect(await screen.findByTestId("Facility")).toBeInTheDocument()

	})

	it("Facility rendered when role is FacilityThree", async () => {

		jest.spyOn(ReduxHooks, "useAppSelector").mockReturnValue(UserRoles.FacilityThree)

		render(<AppRouter />)

		expect(await screen.findByTestId("Facility")).toBeInTheDocument()

	})

	it("Ecology rendered", async () => {

		jest.spyOn(ReduxHooks, "useAppSelector").mockReturnValue(UserRoles.Ecologist)

		render(<AppRouter />)

		expect(await screen.findByTestId("Ecology")).toBeInTheDocument()

	})

	it("Admin rendered", async () => {

		jest.spyOn(ReduxHooks, "useAppSelector").mockReturnValue(UserRoles.Admin)

		render(<AppRouter />)

		expect(await screen.findByTestId("Admin")).toBeInTheDocument()

	})

})