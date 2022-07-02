import cn from "classnames"
import { useDeleteObjectMutation } from "lib/api/object/index.mutation"
import React from "react"
import { WasteInfo } from "types/object"
import CrossBtn from "../CrossBtn"
import s from "./index.module.scss"

interface Props {
	id: string
	name: string
	wastes: WasteInfo[]
	removable?: boolean
	onObjClick?: () => void
}

const ObjectCard: React.FC<Props> = ({
	id,
	name,
	wastes,
	removable=false,
	onObjClick
}) => {

	const [deleteObject, { isLoading }] = useDeleteObjectMutation()

	const onRemoveBtnClickWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		deleteObject(id)
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
			{ removable && <CrossBtn onClick={onRemoveBtnClickWrapper} className={cn(s.removeBtn, {
				[s.loading]: isLoading
			})} /> }
		</div>
	)
}

export default ObjectCard