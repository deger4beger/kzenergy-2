import React from "react"
import s from "./index.module.scss"

interface Props {
	content: string
	info: string
}

const Tooltip: React.FC<Props> = ({
	content,
	info
}) => {

	return (
		<div className={s.content}>
			{ content }
			<div className={s.bubble}>
				{ info }
			</div>
		</div>
	)

}

export default Tooltip