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
			<Input
				name="Email"
				onChange={() => console.log(1)}
				placeholder="Email"
				type="text"
				value={""}
			/>
			<Input
				name="Phone number"
				onChange={() => console.log(1)}
				placeholder="Phone number"
				type="tel"
				value={""}
			/>
			<Input
				name="Password"
				onChange={() => console.log(1)}
				placeholder="Password"
				type="password"
				value={""}
			/>
			<Input
				name="Repeat password"
				onChange={() => console.log(1)}
				placeholder="Repeat password"
				type="password"
				value={""}
			/>
		</AuthTemplate>
	)
}

export default Signin