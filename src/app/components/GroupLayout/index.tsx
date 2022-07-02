import React, { useState } from "react"
import s from "./index.module.scss"

interface Props {
	title: string
	btns: React.ReactNode
	children?: React.ReactNode
}

const GroupLayout: React.FC<Props> = ({
	title,
	btns,
	children
}) => {

	return (
		<div className={s.wrapper}>
			<div className={s.menu}>
				<div className={s.title}>
					<div className={s.icon}>
						›
					</div>{ title }
				</div>
				<div className={s.btns}>
					{ btns }
				</div>
			</div>
			{ children && <div className={s.content}>
				{ children }
			</div> }
		</div>
	)
}

export default GroupLayout