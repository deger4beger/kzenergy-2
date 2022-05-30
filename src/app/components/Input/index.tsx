import React from "./index.module.scss"
import s from "./index.module.scss"

interface InputProps {
	name: string
	placeholder: string
	type: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => {
	return <input {...props} className={s.input} />
}

export default Input