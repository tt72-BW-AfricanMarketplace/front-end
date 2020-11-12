import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRoute from "./features/router/AppRoute";
import { Counter } from './features/counter/Counter';
import routes from "./config/routes/routes";

function App() {
	return (
		<Router>
			<div className="App">
				<Counter />
			</div>
			<Switch>
				{routes.map(route => {
					return (
						<AppRoute key={route.path} path={route.path} component={route.component} isPrivate={route.isPrivate} />
					)
				})}
			</Switch>
		</Router>
	);
}

export default App;
