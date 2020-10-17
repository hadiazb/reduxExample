import React from 'react';
import {
	Switch,
	Route,
	BrowserRouter as Router,
} from 'react-router-dom';
import Home from '../containers/Home/index';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Home} exact />
			</Switch>
		</Router>
	);
};

export default App;
