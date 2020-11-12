import views from "../../features/views";
// import { COUNTER_PATH } from "./paths";

const COUNTER_PATH = "/counter";

export const COUNTER = {
	component: views.Counter,
	path: COUNTER_PATH,
	isPrivate: false,
};

const ROUTES = [COUNTER];
export default ROUTES;