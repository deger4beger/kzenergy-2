import React, { useEffect, useState } from "react"
import AuthTemplate from "../../components/AuthTemplate"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Dropdown from "../../components/Dropdown"
import { UserRoles } from "../../../types/user"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { signupThunk } from "../../../lib/redux/auth/thunks"
import { resetError } from "../../../lib/redux/auth/slice"

const Signup = () => {

	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		phone: "",
		role: "" as UserRoles,
		password: "",
		repeatPassword: ""
	})
	const [localError, setLocalError] = useState("")

	const dispatch = useAppDispatch()
	const { isLoading, error } = useAppSelector(state => state.userReducer)

	useEffect(() => {
		dispatch(resetError())
	})

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
	const setRole = (role: string) => {
		setFormData(prev => ({
			...prev,
			role: role as UserRoles
		}))
	}

	const onFormConfirm = () => {
		const { repeatPassword, ...payload } = formData
		if (formData.password !== repeatPassword) {
			setLocalError("Passwords are not the same")
			return
		}
		setLocalError("")
		dispatch(signupThunk(payload))
	}

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
			{/*<Input
				name="Fullname"
				onChange={(e) => setFormFieldValue(e, "fullname")}
				placeholder="Full name"
				type="text"
				value={formData.fullname}
			/>*/}
			<Input
				name="Email"
				onChange={(e) => setFormFieldValue(e, "email")}
				placeholder="Email"
				type="text"
				value={formData.email}
			/>
			<Input
				name="Phone number"
				onChange={(e) => setFormFieldValue(e, "phone")}
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
				onChange={(e) => setFormFieldValue(e, "password")}
				placeholder="Password"
				type="password"
				value={formData.password}
			/>
			<Input
				name="Repeat password"
				onChange={(e) => setFormFieldValue(e, "repeatPassword")}
				placeholder="Repeat password"
				type="password"
				value={formData.repeatPassword}
			/>
		</AuthTemplate>
	)
}

export default Signup