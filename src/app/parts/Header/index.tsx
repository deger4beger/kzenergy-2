import React from "react"
import s from "./index.module.scss"

const Header = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<div className={s.logo}>
					shoqan-inc.
				</div>
			</div>
		</div>
	)
}

export default Header