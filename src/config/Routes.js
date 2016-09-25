import React from 'react';
import {Route} from 'react-router';
import App from '../App';
import PhotoListContainer from '../containers/PhotoListContainer';
import PhotoDetailPage from '../components/PhotoDetailPage';

const Routes = (
	<Route>
		<Route path="/" component={App}>

		</Route>
		<Route path="/photos" component={PhotoListContainer}>

		</Route>
		<Route path="/photos/:id" component={PhotoDetailPage}>

		</Route>
	</Route>
);

export default Routes;