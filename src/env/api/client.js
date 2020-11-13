import axios from "axios";
import axiosAuth from "../utils/axiosAuth";


const BASE_URL = "https://tt72-anyfit.herokuapp.com/login";

export const client_login = async (username, password) => {
	const res = await axios.post(
		"https://tt72-anyfit.herokuapp.com/login",
		`grant_type=password&username=${username}&password=${password}`
	);
	return res;
};
