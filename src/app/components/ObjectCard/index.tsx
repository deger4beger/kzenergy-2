import React from "react"
import s from "./index.module.scss"

interface Props {
	name: string
	wastes: string[]
}

const ObjectCard: React.FC<Props> = ({
	name,
	wastes
}) => {
	return (
		<div className={s.object}>
			<div className={s.name}>
				{ name }
			</div>
			<div className={s.wastes}>
				{ wastes.map(waste =>
					<div className={s.waste} key={waste}>
						{ waste }
					</div>
				) }
			</div>
		</div>
	)
}

export default ObjectCard