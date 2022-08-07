import { MeasureSystem } from "types/talon"
import { WasteQantity } from "types/waste"
import cn from "classnames"
import s from "./index.module.scss"
import { usePatchWasteLimitMutation } from "lib/api/stat/index.mutation"
import Modal from "../Modal"
import Input from "../Input"
import { useEffect, useState } from "react"
import Button from "../Button"


const WasteCard: React.FC<{
	waste: WasteQantity
}> = ({ waste }) => {

	const [patchLimit, { isLoading }] = usePatchWasteLimitMutation()
	const [modalActive, setModalActive] = useState(false)
	const [limit, setLimit] = useState(waste.limit)

	useEffect(() => {
		if (modalActive) {
			setLimit(waste.limit)
		}
	}, [modalActive])

	const changeLimit = async () => {
		await patchLimit({
			wasteName: waste.name,
			quantity: limit
		})
		setModalActive(false)
	}

	return (
		<>
			<div className={cn(s.wrapper, {
				[s.pos]: Object.values(waste.quantity).some(el => el),
				[s.warning]: waste.quantity.тонна > waste.limit
			})} onClick={() => setModalActive(true)}>
				<div className={s.title}>
					{ waste.name }
				</div>
				<div className={s.values}>
					{ Object.entries(waste.quantity).map(([key, value]) =>
						<div>
							<span>{ key === MeasureSystem.M3 ? "м³" : key }:</span>
							<span>
								{ value } { key === MeasureSystem.TON && "/ " + waste.limit }
							</span>
						</div>
					) }
				</div>
			</div>
			<Modal
				active={modalActive}
				setActive={setModalActive}
				title={"Изменить лимит отхода " + waste.name}
			>
				<Input
					value={limit}
					onChange={e => setLimit(Number(e.target.value))}
					type="text"
					placeholder="Лимит"
					name="Лимит"
				/>
				<Button
					content="Изменить"
					onClick={changeLimit}
					loading={isLoading}
					type="dark"
					styles={{
						borderRadius: "20px",
						marginTop: "30px"
					}}
				/>
			</Modal>
		</>
	)

}

export default WasteCard