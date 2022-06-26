import React from "react"
import AuthTemplate from "../../components/AuthTemplate"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useSigninLogic } from "./index.logic"

const Signin = () => {

	const {
		isBtnDisabled, isLoading, onFormConfirm, error,
		setFormFieldValue, formData
	} = useSigninLogic()

	return (
		<AuthTemplate
			button={
				<Button
					content="Signin 🗝"
					disabled={isBtnDisabled}
					loading={isLoading}
					onClick={onFormConfirm}
				/>
			}
			title="Signin form"
			error={error}
			isSigninForm
		>
			<Input
				name="Email"
				onChange={setFormFieldValue("email")}
				placeholder="Email"
				type="text"
				value={formData.email}
			/>
			<Input
				name="Password"
				onChange={setFormFieldValue("password")}
				placeholder="Password"
				type="password"
				value={formData.password}
			/>
		</AuthTemplate>
	)
}

export default Signin