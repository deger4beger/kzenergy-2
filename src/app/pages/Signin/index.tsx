import React, { useState } from "react"
import AuthTemplate from "../../components/AuthTemplate"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { signinThunk } from "../../../lib/redux/auth/thunks"

const Signin = () => {

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})

	const dispatch = useAppDispatch()
	const { isLoading, error } = useAppSelector(state => state.userReducer)

	const isBtnDisabled = Object.values(formData).some(el => !el)

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
		dispatch(signinThunk(formData))
	}

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