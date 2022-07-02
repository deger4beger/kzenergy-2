import React from "react"
import CrossBtn from "../CrossBtn"
import s from "./index.module.scss"

interface Props {
	name: string
	wastes: string[]
	onRemoveBtnClick?: () => void
}

const ObjectCard: React.FC<Props> = ({
	name,
	wastes,
	onRemoveBtnClick
}) => {

	const onRemoveBtnClickWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		onRemoveBtnClick!()
	}

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
			{ onRemoveBtnClick && <CrossBtn onClick={onRemoveBtnClickWrapper} className={s.removeBtn} /> }
		</div>
	)
}

export default ObjectCard