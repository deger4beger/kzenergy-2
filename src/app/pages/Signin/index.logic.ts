import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { signinThunk } from "../../../lib/redux/auth/thunks"
import { resetError } from "../../../lib/redux/auth/slice"

export const useSigninLogic = () => {

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})
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

	const onFormConfirm = () => {
		dispatch(signinThunk(formData))
	}

	return {
		isBtnDisabled, isLoading, onFormConfirm, error,
		setFormFieldValue, formData
	}

}