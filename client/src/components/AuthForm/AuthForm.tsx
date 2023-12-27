import styles from "./styles.module.scss";

import Cookies from "js-cookie";
import { trpc } from "../../api/api";

export const AuthForm = () => {
	const register = trpc.register.useMutation();
	const login = trpc.login.useMutation();
	
	const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const password = formData.get("password");
		const email = formData.get("email");

		const res = await login.mutateAsync({
			email: email as string,
			password: password as string,
		});

		if (res.token) {
			Cookies.set("token", res.token, {
				expires: 7,
			});
			window.alert("Logged in!");
		}
	};

	const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name");
		const password = formData.get("password");
		const email = formData.get("email");

		const res = await register.mutateAsync({
			name: name as string,
			email: email as string,
			password: password as string,
		});

		if (res.token) {
			Cookies.set("token", res.token, {
				expires: 7,
			});
			window.alert("Registered!");
		}
	};

	return (
		<div className={styles.container}>
			<form action="post" onSubmit={(e) => onRegister(e)}>
				<h3>Register</h3>
				{register.error && <p>{register.error.message}</p>}
				<input name="name" type="text" placeholder="Username" />
				<input name="email" type="email" placeholder="Email" />
				<input name="password" type="password" placeholder="Password" />
				<button type="submit">Submit</button>
			</form>
			<form action="post" onSubmit={(e) => onLogin(e)}>
				<h3>Login</h3>
				{login.error && <p>{login.error.message}</p>}
				<input name="email" type="email" placeholder="Email" />
				<input name="password" type="password" placeholder="Password" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
