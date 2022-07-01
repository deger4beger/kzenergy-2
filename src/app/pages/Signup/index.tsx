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
					content="Зарегистрироваться 🗝"
					disabled={isBtnDisabled}
					loading={isLoading}
					onClick={onFormConfirm}
				/>
			}
			title="Заполните форму"
			isSigninForm={false}
			error={localError || error}
		>
			<Input
				name="ФИО"
				onChange={setFormFieldValue("fullname")}
				placeholder="ФИО"
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
				name="Номер телефона"
				onChange={setFormFieldValue("phone")}
				placeholder="Номер телефона"
				type="tel"
				value={formData.phone}
			/>
			<Dropdown
				title="Ваша должность"
				selected={formData.role}
				setSelected={setRole}
				options={Object.values(UserRoles)}
			/>
			<Input
				name="Пароль"
				onChange={setFormFieldValue("password")}
				placeholder="Пароль"
				type="password"
				value={formData.password}
			/>
			<Input
				name="Повторите пароль"
				onChange={setFormFieldValue("repeatPassword")}
				placeholder="Повторите пароль"
				type="password"
				value={formData.repeatPassword}
			/>
		</AuthTemplate>
	)
}

export default Signup