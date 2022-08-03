import React, { useState } from "react"
import cn from "classnames"
import s from "./index.module.scss"

interface Props {
	options: string[] | readonly string[],
	title?: string,
	selected: string | undefined,
	setSelected: (option: string) => void
	styles?: Object
}

const Dropdown: React.FC<Props> = ({
	options,
	title,
	selected,
	setSelected,
	styles
}) => {

	const [isActive, setIsActive] = useState(false)

	return <div className={s.wrapper} style={styles}>
		{ !!title && <div className={s.title}>
			{ title }
		</div> }
		<div className={s.dropdown}>
			<div
					className={cn(s.upper, {[s.selected]: !!selected})}
					onClick={() => setIsActive(prev => !prev)}
				>
				{ selected ? selected : "Нажмите чтобы выбрать..."}
				<div className={cn(s.arrow, {[s.active]: isActive})}>
					›
				</div>
			</div>
			{ isActive && <div className={s.lower}>
				{ options.map(option => {
					return <div
						className={cn(
							s.option,
							{[s.active]: option === selected}
						)}
						key={option}
						onClick={() => {
							setSelected(option)
							setIsActive(false)
						}
					}>
						{ option }
					</div>
				}) }
			</div> }
		</div>
	</div>
}

export default Dropdown