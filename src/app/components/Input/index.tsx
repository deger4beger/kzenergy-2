import { useState } from "react"
import React from "./index.module.scss"
import cn from "classnames"
import s from "./index.module.scss"

interface Props {
	name?: string
	placeholder: string
	type: string
	value: string | number
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	disabled?: boolean
	styles?: Object
}

const Input: React.FC<Props> = ({ type, disabled=false, styles, ...inputProps }) => {

	const [inputType, setInputType] = useState(type)

	const onShowPassClick = () => {
		if (type !== "password") return
		inputType === "password" ? setInputType("text") : setInputType("password")
	}

	return <div className={cn(s.wrapper, {
		[s.disabled]: disabled
	})} style={styles}>
		{ inputProps.name && <div className={s.title}>
			{ inputProps.name }
		</div> }
		<div className={s.inputBlock}>
			<input
				{...inputProps}
				type={inputType}
				className={s.input}
				step={type === "number" ? "any" : undefined}
			/>
			{ type === "password" && <div
				className={s.showPassword}
				onClick={onShowPassClick}
				>
				<div className={cn(s.showPasswordContent, {[s.crossed]: inputType === "password"})}>
					👁
				</div>
			</div> }
		</div>
	</div>
}

export default Input