import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { signupThunk } from "../../../lib/redux/auth/thunks"
import { resetError } from "../../../lib/redux/auth/slice"
import { UserRoles } from "../../../types/user"

export const useSignupLogic = () => {

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
		return () => {
			dispatch(resetError())
		}
	}, [])

	const isBtnDisabled = Object.values(formData).some(el => !el)

	const setFormFieldValue = (
		fieldName: keyof typeof formData
	) => (
		e: React.ChangeEvent<HTMLInputElement>,
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

	return {
		isBtnDisabled, isLoading, onFormConfirm, localError,
		error, setFormFieldValue, formData, setRole, UserRoles
	}

}