import React from "react";
import { Route, Redirect } from "react-router-dom";
const userIsLoggedIn = true;

const AppRoute = ({ component: Component, path, isPrivate, ...props }) => {
	return (
		<Route path={path}
			render={(props) => isPrivate && !userIsLoggedIn ?
				<Redirect to="/" />
				: <Component {...props} />
			}
			{...props}
		/>
	);
}

export default AppRoute;