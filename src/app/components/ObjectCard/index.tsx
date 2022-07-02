import cn from "classnames"
import React from "react"
import { WasteInfo } from "types/object"
import CrossBtn from "../CrossBtn"
import s from "./index.module.scss"

interface Props {
	name: string
	wastes: WasteInfo[]
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
					<div className={s.waste} key={waste.id}>
						{ waste.name }
					</div>
				) }
			</div>
			{ onRemoveBtnClick && <CrossBtn onClick={onRemoveBtnClickWrapper} className={s.removeBtn} /> }
		</div>
	)
}

export default ObjectCard