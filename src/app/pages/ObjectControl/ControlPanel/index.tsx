import s from "./index.module.scss"

const ControlPanel = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				List of your objects
			</div>
			<div className={s.addBtn}>
				+
			</div>
		</div>
	)
}

export default ControlPanel