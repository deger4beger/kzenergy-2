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
	return <div className={s.wrapper}>
		<div className={s.title}>
			{ props.name }
		</div>
		<input {...props} className={s.input} />
	</div>
}

export default Input