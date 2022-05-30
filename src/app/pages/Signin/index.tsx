import React, { useState } from "react"
import AuthTemplate from "../../components/AuthTemplate"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Dropdown from "../../components/Dropdown"
import { UserRoles } from "../../../types/user"

const Signin = () => {

	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		phone: "",
		role: "" as UserRoles,
		password: "",
		repeatPassword: ""
	})

	const setFormFieldValue = (
		e: React.ChangeEvent<any>,
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
		console.log(formData)
	}

	return (
		<AuthTemplate
			button={
				<Button
					content="Signin"
					disabled={false}
					loading={false}
					onClick={onFormConfirm}
				/>
			}
			title="Signin form"
		>
			<Input
				name="Fullname"
				onChange={(e) => setFormFieldValue(e, "fullname")}
				placeholder="Full name"
				type="text"
				value={formData.fullname}
			/>
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

export default Signin