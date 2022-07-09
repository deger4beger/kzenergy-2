import React, { useState } from "react"
import cn from "classnames"
import fileSaver from "file-saver"
import { Talon, TalonStatus } from "types/talon"
import s from "./index.module.scss"
import Button from "../Button"
import SimpleButton from "../SimpleButton"
import Tooltip from "../Tooltip"
import StatusIcon from "../StatusIcon"

interface Props {
	talon: Talon
	children?: React.ReactNode
}

const TalonCard: React.FC<Props> = ({
	talon, children
}) => {

	const [active, setActive] = useState(true)

	const onDownloadClick = () => {
		fileSaver.saveAs(
  			talon.excel!,
  			`Талон от (${talon.date}).xlsx`
		)
	}

	return (
		<div className={s.wrapper}>
			<div className={cn(s.menu, {
				[s.active]: active
			})}
			onClick={() => setActive(prev => !prev)}
			>
				<div className={s.left}>
					<StatusIcon status={talon.status} />
					<div className={s.title}>
						{ talon.wasteName } - { talon.date }
					</div>
					<div className={s.status}>
						({ talon.status })
					</div>
				</div>
				<div className={s.right} onClick={(e) => e.stopPropagation()}>
					{ talon.message && <Tooltip
						content="✉"
						info={ talon.message }
					/> }
					{ children }
					{ talon.excel && <SimpleButton
						text="Скачать файл ⇓"
						onClick={onDownloadClick}
					/> }
					<div className={cn(s.downIcon, {
						[s.active]: active
					})}>›</div>
				</div>
			</div>
			<div className={cn(s.content, {
				[s.active]: active
			})}>
				<div className={s.contentTitle}>
					Тип назначения отхода
				</div>
				<div className={s.contentTitle}>
					Агрегатное состояние
				</div>
				<div className={s.contentTitle}>
					Система измерения
				</div>
				<div className={s.contentTitle}>
					Количество
				</div>
				<div className={s.contentValue}>
					{ talon.wasteDestinationType }
				</div>
				<div className={s.contentValue}>
					{ talon.aggregateState }
				</div>
				<div className={s.contentValue}>
					{ talon.measureSystem }
				</div>
				<div className={s.contentValue}>
					{ talon.quantity }
				</div>
			</div>
		</div>
	)

}

export default TalonCard