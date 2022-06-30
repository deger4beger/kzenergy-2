import s from "./index.module.scss"
import cn from "classnames"
import { Link, useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "app/hooks/redux"
import { logout } from "lib/redux/auth/slice"
import { RouteNames } from "app/router"
import { UserRoles } from "types/user"

const Divider = () => <div>|</div>

const Header = () => {

	const { isAuth, userData: { role } } = useAppSelector(state => state.userReducer)
	const dispatch = useAppDispatch()
	const location = useLocation().pathname

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
							</>
							: <>
								<Link className={s.btn} to={RouteNames.SIGNIN}>
									Signin
								</Link>
								<Divider />
								<Link className={s.btn} to={RouteNames.SIGNUP}>
									Signup
								</Link>
							</>
						}
					</div>
				</div>
			</div>
			<div className={s.lower}>
				<div className={s.container}>
					<Link
						className={cn(s.link, {
							[s.disabled]: role !== UserRoles.FacilityWorker,
							[s.active]: location === RouteNames.WASTE_MANAGEMENT
						})}
						to={RouteNames.WASTE_MANAGEMENT}
					>
						Waste management
					</Link>
					<Divider />
					<Link
						className={cn(s.link, {
							[s.disabled]: role !== UserRoles.Ecologist,
							[s.active]: location === RouteNames.REPORT_MANAGEMENT
						})}
						to={RouteNames.REPORT_MANAGEMENT}
					>
						Report management
					</Link>
					<Link
						className={cn(s.link, {
							[s.disabled]: role !== UserRoles.Ecologist,
							[s.active]: location === RouteNames.COMPANY_OVERVIEW
						})}
						to={RouteNames.COMPANY_OVERVIEW}
					>
						Company overview
					</Link>
					<Divider />
					<Link
						className={cn(s.link, {
							[s.disabled]: role !== UserRoles.Admin,
							[s.active]: location === RouteNames.OBJECT_CONTROL
						})}
						to={RouteNames.OBJECT_CONTROL}
					>
						Object control
					</Link>
					<Link
						className={cn(s.link, {
							[s.disabled]: role !== UserRoles.Admin,
							[s.active]: location === RouteNames.ADMIN_MANAGEMENT
						})}
						to={RouteNames.ADMIN_MANAGEMENT}
					>
						Admin management
					</Link>
				</div>
			</div>
		</>
	)
}

export default Header