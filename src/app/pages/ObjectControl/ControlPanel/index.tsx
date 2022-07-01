import Modal from "app/components/Modal"
import { useState } from "react"
import s from "./index.module.scss"

const ControlPanel = () => {

	const [modalActive, setModalActive] = useState(false)

	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				List of your objects
			</div>
			<div className={s.addBtn} onClick={() => setModalActive(true)}>
				+
			</div>
			<Modal
				active={modalActive}
				setActive={setModalActive}
			>
				Create object
			</Modal>
		</div>
	)
}

export default ControlPanel