import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { signinThunk } from "../../../lib/redux/auth/thunks"
import { resetError } from "../../../lib/redux/auth/slice"

export const useSigninLogic = () => {

	const dispatch = useAppDispatch()
	const { isLoading, error } = useAppSelector(state => state.userReducer)

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})
	const isBtnDisabled = Object.values(formData).some(el => !el)

	useEffect(() => {
		dispatch(resetError())
		return () => {
			dispatch(resetError())
		}
	}, [])

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

	return {
		isBtnDisabled, isLoading, onFormConfirm, error,
		setFormFieldValue, formData
	}

}