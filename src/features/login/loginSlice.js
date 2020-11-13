import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import {axiosSecret} from "../../env/utils/axiosSecret";
// import { client_login } from "../../api/client";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
	isLoggedIn: user ? true : false,
	user: user ? user : null,
	status: "idle",
	error: undefined,
}
// user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

export const login = createAsyncThunk("login/status", async (userData) => {
	const {username, password} = userData;
	console.log(username, password);
	const response = await axiosSecret().post(
		"https://tt72-anyfit.herokuapp.com/login",
		`grant_type=password&username=${username}&password=${password}`
	)
	console.log(response);
	return response.data;
})

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {},
	extraReducers: {
		[login.pending]: (state, action) => {
			console.log(action.payload);
			state.status = "loading";
		},
		[login.fulfilled]: (state, action) => {
			console.log(action.payload);
			state.isLoggedIn = true;
			const token = action.payload;
			state.user = action.payload;
			state.status = "idle";
		},
		[login.rejected]: (state, action) => {
			console.log(action.payload);
			state.isLoggedIn = false;
			state.user = action.payload;
			state.status = "idle";
			state.error = action.payload;
		}
	}

});

export default loginSlice.reducer;