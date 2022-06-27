import React, { useState } from "react"
import cn from "classnames"
import s from "./index.module.scss"

interface Props {
	options: string[],
	title: string,
	selected: string,
	setSelected: (option: string) => void
}

const Dropdown: React.FC<Props> = ({
	options,
	title,
	selected,
	setSelected
}) => {

	const [isActive, setIsActive] = useState(false)

	return <div className={s.wrapper}>
		<div className={s.title}>
			{ title }
		</div>
		<div className={s.dropdown}>
			<div
					className={cn(s.upper, {[s.selected]: !!selected})}
					onClick={() => setIsActive(prev => !prev)}
				>
				{ selected ? selected : "Click to select..."}
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