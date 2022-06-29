import s from "./index.module.scss"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<>
			<div className={s.upper}>
				<div className={s.container}>
					<div className={s.logo}>
						Shoqan
					</div>
					<div className={s.routes}>
						<div className={s.btn}>
							Signin
						</div>
						<div className={s.divider}>
							|
						</div>
						<div className={s.btn}>
							Signup
						</div>
					</div>
				</div>
			</div>
			<div className={s.lower}>
				<div className={s.container}>
					<Link className={s.link} to="/">
						Work page
					</Link>
					<Link className={s.link} to="/">
						Company overview
					</Link>
					<Link className={s.link} to="/">
						Personal statistics
					</Link>
					<Link className={s.link} to="/">
						Get help
					</Link>
				</div>
			</div>
		</>
	)
}

export default Header