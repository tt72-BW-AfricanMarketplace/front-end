import views from "../../features/views";
// import { COUNTER_PATH } from "./paths";

export const HOMEPAGE_PATH = "/";
export const COUNTER_PATH = "/counter";


export const COUNTER = {
	component: views.Counter,
	path: COUNTER_PATH,
	isPrivate: false,
};

export const HOMEPAGE = {
	component: views.HomePage,
	path: HOMEPAGE_PATH,
	isPrivate: false,
}

const ROUTES = [HOMEPAGE, COUNTER];
export default ROUTES;