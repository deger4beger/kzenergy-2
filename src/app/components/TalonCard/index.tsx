import React, { useState } from "react"
import cn from "classnames"
import fileSaver from "file-saver"
import { Talon } from "types/talon"
import s from "./index.module.scss"
import Button from "../Button"
import SimpleButton from "../SimpleButton"


const TalonCard: React.FC<Talon> = (talon) => {

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
					<div className={cn(s.statusIcon, {
							[s.pos]: true,
							[s.neg]: talon.status === "Отклонён"
						})}>
						<div className={s.inner} />
					</div>
					<div className={s.title}>
						{ talon.date }
					</div>
					<div className={s.status}>
						({ talon.status })
					</div>
				</div>
				<div onClick={(e) => e.stopPropagation()}>
					{ talon.excel && <SimpleButton
						text="Скачать файл ⇓"
						onClick={onDownloadClick}
					/> }
				</div>
			</div>
			<div className={cn(s.content, {
				[s.active]: active
			})}>
				{/*<div className={s.contentTitle}>
					Тип назначения отхода
				</div>*/}
				<div className={s.contentValue}>
					{ talon.wasteName }
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