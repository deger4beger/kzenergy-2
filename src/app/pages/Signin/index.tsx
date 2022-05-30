import React from "react"
import AuthTemplate from "../../components/AuthTemplate"
import Button from "../../components/Button"
import Input from "../../components/Input"

const Signin = () => {
	return (
		<AuthTemplate
			button={
				<Button
					content="Signin"
					disabled={false}
					loading={false}
					onClick={() => console.log(1)}
				/>
			}
			title="Signin form"
		>
			<Input
				name="Fullname"
				onChange={() => console.log(1)}
				placeholder="Full name"
				type="text"
				value={""}
			/>
		</AuthTemplate>
	)
}

export default Signin