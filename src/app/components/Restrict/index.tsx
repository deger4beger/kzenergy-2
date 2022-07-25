import { logout } from "lib/redux/auth/slice"
import { useDispatch } from "react-redux"
import Button from "../Button"
import s from "./index.module.scss"

const Restrict = () => {

	const dispatch = useDispatch()

	const onLogout = () => {
		dispatch(logout())
	}

	return (
		<div className={s.wrapper}>
			По решению администратора, на данном аккаунте заблокирована функция просмотра данных
			<div className={s.btn}>
				<Button
					content="Выйти"
					onClick={onLogout}
				/>
			</div>
		</div>
	)

}

export default Restrict