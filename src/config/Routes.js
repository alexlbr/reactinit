import React from 'react';
import {Route} from 'react-router';
import App from '../App';
import PhotoListContainer from '../containers/PhotoListContainer';
import PhotoDetailContainer from '../containers/PhotoDetailContainer';

const Routes = (
	<Route>
		<Route path="/" component={App}></Route>
		<Route path="/photos" component={PhotoListContainer}></Route>
		<Route path="/photos/:id" component={PhotoDetailContainer} ></Route>
	</Route>
);

export default Routes;
