import React from 'react';
import {
	Route,
	Redirect, Switch, BrowserRouter as Router
} from 'react-router-dom';
import BeersDashboard from './beers/screens/beers-dashboard';
import BeerDetails from './beers/screens/beer-details';
import store from './store/store';
import { Provider } from 'react-redux';
// import history from './utils/History';


export enum Routes {
	ROUTE = '/',
	BEERS = '/dashboard',
	DETAILS = '/details/:id'
}

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path={Routes.ROUTE} render={() => (<Redirect to={Routes.BEERS} />)} />
					<Route exact path={Routes.BEERS} render={() => <BeersDashboard />} />
					<Route exact path={Routes.DETAILS} render={() => <BeerDetails />} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
