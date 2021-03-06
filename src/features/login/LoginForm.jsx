// import { useForm } from "../../hooks/useForm";
import React from "react";
import Form from "../shared/Form";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./loginSlice";

const loginVals = [
	{
		name: "username",
		type: "text",
		placeholder: "username",
		className: "username-field",
	},
	{
		name: "password",
		type: "password",
		placeholder: "password",
		className: "password-field",
	}
];

const LoginForm = (props) => {
	const loginState = useSelector(state => state.login);
	const dispatch = useDispatch();
	const handleSubmit = (values) => {
		console.log(values);
		dispatch(login(values));
	}
	return (
		<Form fields={loginVals} handleSubmit={handleSubmit} />
	)
}
export default LoginForm;