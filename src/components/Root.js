import React from 'react';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import Routes from '../config/Routes';
import Store from '../store/configStore';

const Root = () => (
	<Provider store={Store}>
		<Router history={hashHistory}>{Routes}</Router>
	</Provider>
);


export default Root;
