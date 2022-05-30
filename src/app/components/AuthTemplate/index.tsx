import React from "react"
import s from "./index.module.scss"
import { Link } from "react-router-dom"

interface IAuthTemplateProps {
	title: string
	error?: string
	children: React.ReactNode[] | React.ReactNode
	button: React.ReactNode
	isSigninForm: boolean
}

const AuthTemplate: React.FC<IAuthTemplateProps> = ({
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
					{ isSigninForm ? <div>
						Don't have an account ?&nbsp;
						<Link to={"/signup"} className={s.link}>
							Signup
						</Link>
					</div> : <Link to={"/signin"} className={s.link}>
						← Back to login
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