import React from "react"
import AuthTemplate from "../../components/AuthTemplate"
import Dropdown from "../../components/Dropdown"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useSignupLogic } from "./index.logic"

const Signup = () => {

	const {
		isBtnDisabled, isLoading, onFormConfirm, localError,
		error, setFormFieldValue, formData, setRole, UserRoles
	} = useSignupLogic()

	return (
		<AuthTemplate
			button={
				<Button
					content="Signup 🗝"
					disabled={isBtnDisabled}
					loading={isLoading}
					onClick={onFormConfirm}
				/>
			}
			title="Signup form"
			isSigninForm={false}
			error={localError || error}
		>
			<Input
				name="Fullname"
				onChange={setFormFieldValue("fullname")}
				placeholder="Full name"
				type="text"
				value={formData.fullname}
			/>
			<Input
				name="Email"
				onChange={setFormFieldValue("email")}
				placeholder="Email"
				type="text"
				value={formData.email}
			/>
			<Input
				name="Phone number"
				onChange={setFormFieldValue("phone")}
				placeholder="Phone number"
				type="tel"
				value={formData.phone}
			/>
			<Dropdown
				title="Your role in company"
				selected={formData.role}
				setSelected={setRole}
				options={Object.values(UserRoles)}
			/>
			<Input
				name="Password"
				onChange={setFormFieldValue("password")}
				placeholder="Password"
				type="password"
				value={formData.password}
			/>
			<Input
				name="Repeat password"
				onChange={setFormFieldValue("repeatPassword")}
				placeholder="Repeat password"
				type="password"
				value={formData.repeatPassword}
			/>
		</AuthTemplate>
	)
}

export default Signup