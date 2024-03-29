import React from "react"
import s from "./index.module.scss"
import { Link } from "react-router-dom"

interface Props {
	title: string
	error?: string | null
	children: React.ReactNode[] | React.ReactNode
	button: React.ReactNode
	isSigninForm: boolean
}

const AuthTemplate: React.FC<Props> = ({
	title,
	error,
	children,
	button,
	isSigninForm
}) => {
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<div className={s.title}>
					{title}
				</div>
				<div className={s.subtitle}>
					{ isSigninForm ? <Link to={"/signup"} className={s.link}>
							Нет аккаунта ? Зарегистрируйтесь
						</Link>
					: <Link to={"/signin"} className={s.link}>
						← Назад ко входу
					</Link> }
				</div>
				<div className={s.inputs}>
					{children}
					{error && (
						<div className={s.error}>
							{error}
						</div>
					)}
				</div>
				{button}
			</div>
		</div>
	)
}

export default AuthTemplate