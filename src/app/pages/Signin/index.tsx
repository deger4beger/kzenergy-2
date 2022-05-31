import React, { useState } from "react"
import AuthTemplate from "../../components/AuthTemplate"
import Button from "../../components/Button"
import Input from "../../components/Input"

const Signin = () => {

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})

	const setFormFieldValue = (
		e: React.ChangeEvent<HTMLInputElement>,
		fieldName: keyof typeof formData
	) => {
		setFormData(prev => ({
			...prev,
			[fieldName]: e.target.value
		}))
	}

	const onFormConfirm = () => {
		console.log(formData)
	}

	return (
		<AuthTemplate
			button={
				<Button
					content="Signin 🗝"
					disabled={false}
					loading={false}
					onClick={onFormConfirm}
				/>
			}
			title="Signin form"
			isSigninForm
		>
			<Input
				name="Email"
				onChange={(e) => setFormFieldValue(e, "email")}
				placeholder="Email"
				type="text"
				value={formData.email}
			/>
			<Input
				name="Password"
				onChange={(e) => setFormFieldValue(e, "password")}
				placeholder="Password"
				type="password"
				value={formData.password}
			/>
		</AuthTemplate>
	)
}

export default Signin