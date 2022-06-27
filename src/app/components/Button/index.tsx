import React from "react"
import cn from "classnames"
import s from "./index.module.scss"

interface Props {
	content: string
	onClick: () => void
	disabled: boolean
	loading: boolean
	styles?: object
}

const Button: React.FC<Props> = ({content, onClick, disabled, loading}) => {
	return <div onClick={onClick} className={cn(s.button, {
			[s.disabled]: disabled,
			[s.loading]: loading
		})} role="button">
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