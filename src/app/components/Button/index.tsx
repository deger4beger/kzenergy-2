import React from "react"
import cn from "classnames"
import s from "./index.module.scss"

interface Props {
	content: string
	onClick: () => void
	disabled?: boolean
	loading?: boolean
	type?: "primary" | "dark",
	styles?: Object
}

const Button: React.FC<Props> = ({
	content,
	onClick,
	disabled,
	loading,
	styles,
	type = "primary"
}) => {
	return <div onClick={onClick} className={cn(s.button, {
			[s.disabled]: disabled,
			[s.loading]: loading,
			[s.primary]: type === "primary",
			[s.dark]: type === "dark"
		})} role="button" style={styles}>
		<div className={cn(s.content, {[s.loading]: loading})}>
			<div className={s.text}>
				{content}
			</div>
			{loading && (
				<div className={s.preloader}>-</div>
			)}
		</div>
	</div>
}

export default Button