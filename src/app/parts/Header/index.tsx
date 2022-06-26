import React from "react"
import s from "./index.module.scss"

const Header = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<div className={s.logo}>
					shoqan-inc.
					{/*<span className={s.logoIcon}>⛭</span>*/}
					{/*<img src={"assets/icons/logo.png"} alt="#" className={s.logoIcon} draggable={false} />*/}
					{/*<div className={s.tickX} />
					<div className={s.tickY} />*/}
				</div>
			</div>
		</div>
	)
}

export default Header