// import { lazy } from "react";
// const Counter = lazy(() => import("../counter/Counter"));
import { Counter } from "../counter/Counter";
import HomePage from "../homepage/HomePage";
import LoginPage from "../login/LoginPage";


const views = {
	HomePage,
	Counter,
	LoginPage,
}
export default views;