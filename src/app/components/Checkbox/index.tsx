import React from "react"
import cn from "classnames"
import s from "./index.module.scss"

interface Props {
	active: boolean,
	text: string
	onToggle: () => void
}

const Checkbox: React.FC<Props> = ({
	active, onToggle, text
}) => {
	return (
		<div className={s.wrapper} onClick={onToggle}>
			<div className={cn(s.icon, {
				[s.active]: active
			})} />
			<div className={s.text}>
				{ text }
			</div>
		</div>
	)
}

export default Checkbox