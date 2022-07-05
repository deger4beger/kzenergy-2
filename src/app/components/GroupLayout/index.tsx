import React, { useState } from "react"
import cn from "classnames"
import s from "./index.module.scss"

interface Props {
	title: string
	btns?: React.ReactNode
	children?: React.ReactNode
	subLayout?: boolean
}

const GroupLayout: React.FC<Props> = ({
	title,
	btns,
	children,
	subLayout=false
}) => {

	return (
		<div className={s.wrapper}>
			<div className={s.menu}>
				<div className={cn(s.title, {
					[s.sub]: subLayout
				})}>
					<div className={s.icon}>
						›
					</div>{ title }
				</div>
				{ btns && <div className={s.btns}>
					{ btns }
				</div> }
			</div>
			{ children && <div className={cn(s.content, {
					[s.sub]: subLayout
				})}>
				{ children }
			</div> }
		</div>
	)
}

export default GroupLayout