import s from "./index.module.scss"
import cn from "classnames"
import { Link, useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "app/hooks/redux"
import { logout } from "lib/redux/auth/slice"
import { RouteNames } from "app/router"
import { UserRoles } from "types/user"

const Divider = () => <div>|</div>

const Header = () => {

	const { isAuth, userData: { role }, permission } = useAppSelector(state => state.userReducer)
	const dispatch = useAppDispatch()
	const location = useLocation().pathname

	const onLogout = () => {
		dispatch(logout())
	}

	return (
		<>
			<div className={s.upper}>
				<div className={s.container}>
					<div className={s.titles}>
						<div className={s.logo}>
							Shoqan
						</div>
						{ ( !permission?.write && isAuth ) && <div className={s.info}>
							( Режим чтения )
						</div> }
					</div>
					<div className={s.routes}>
						{ isAuth ?
							<>
								<div className={s.btn} onClick={onLogout}>
									<div className={s.logoutIcon}>⎆</div> Выйти
								</div>
							</>
							: <>
								<Link className={s.btn} to={RouteNames.SIGNIN}>
									Войти
								</Link>
								<Divider />
								<Link className={s.btn} to={RouteNames.SIGNUP}>
									Зарегистрироваться
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
						Управление отходами
					</Link>
					<Divider />
					<Link
						className={cn(s.link, {
							[s.disabled]: role !== UserRoles.Ecologist,
							[s.active]: location === RouteNames.REPORT_MANAGEMENT
						})}
						to={RouteNames.REPORT_MANAGEMENT}
					>
						Управление отчетами
					</Link>
					<Link
						className={cn(s.link, {
							[s.disabled]: role !== UserRoles.Ecologist,
							[s.active]: location === RouteNames.ARCHIVE
						})}
						to={RouteNames.ARCHIVE}
					>
						Архив отчетов
					</Link>
					<Link
						className={cn(s.link, {
							[s.disabled]: role !== UserRoles.Ecologist,
							[s.active]: location === RouteNames.COMPANY_OVERVIEW
						})}
						to={RouteNames.COMPANY_OVERVIEW}
					>
						Статистика по отходам
					</Link>
					<Divider />
					<Link
						className={cn(s.link, {
							[s.disabled]: role !== UserRoles.Admin,
							[s.active]: location === RouteNames.OBJECT_CONTROL
						})}
						to={RouteNames.OBJECT_CONTROL}
					>
						Управление объектами
					</Link>
					<Link
						className={cn(s.link, {
							[s.disabled]: role !== UserRoles.Admin,
							[s.active]: location === RouteNames.ADMIN_MANAGEMENT
						})}
						to={RouteNames.ADMIN_MANAGEMENT}
					>
						Панель админа
					</Link>
				</div>
			</div>
		</>
	)
}

export default Header