import s from "./index.module.scss"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "app/hooks/redux"
import { logout } from "lib/redux/auth/slice"

const Header = () => {

	const isAuth = useAppSelector(state => state.userReducer.isAuth)
	const dispatch = useAppDispatch()

	const onLogout = () => {
		dispatch(logout())
	}

	return (
		<>
			<div className={s.upper}>
				<div className={s.container}>
					<div className={s.logo}>
						Shoqan
					</div>
					<div className={s.routes}>
						{ isAuth ?
							<>
								<div className={s.btn} onClick={onLogout}>
									<div className={s.logoutIcon}>⎆</div> Logout
								</div>
							</> : <>
								<Link className={s.btn} to="signin">
									Signin
								</Link>
								<div className={s.divider}>
									|
								</div>
								<Link className={s.btn} to="signup">
									Signup
								</Link>
							</>
						}
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