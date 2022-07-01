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
					content="Войти 🗝"
					disabled={isBtnDisabled}
					loading={isLoading}
					onClick={onFormConfirm}
				/>
			}
			title="Заполните форму"
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
				name="Пароль"
				onChange={setFormFieldValue("password")}
				placeholder="Пароль"
				type="password"
				value={formData.password}
			/>
		</AuthTemplate>
	)
}

export default Signin