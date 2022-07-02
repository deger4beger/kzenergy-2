import React from "react"
import CrossBtn from "../CrossBtn"
import s from "./index.module.scss"
import cn from "classnames"

interface Props {
	name: string
	wastes: string[]
	onRemoveBtnClick?: () => void
	onObjClick?: () => void
}

const ObjectCard: React.FC<Props> = ({
	name,
	wastes,
	onRemoveBtnClick,
	onObjClick
}) => {

	const onRemoveBtnClickWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		onRemoveBtnClick!()
	}

	return (
		<div className={cn(s.object, {[s.clickable]: !!onObjClick})} onClick={onObjClick}>
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