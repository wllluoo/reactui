import React, { Component } from 'react';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers'
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux'
import { Modal, Button } from 'antd';
import middleware from './middleware/middleware';
import App from './App';
import { ModalWithButton, ImmutableTest, HighOrderComponent, Alert, SidebarContainer, SvgTest, Home, SvgDemo, MoreTable } from './components';

const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);
const middlewareList = [thunkMiddleware, reduxRouterMiddleware, middleware];

const finalCreateStore = compose(
        applyMiddleware(...middlewareList),
    )(createStore);


const store = finalCreateStore(reducer)

require('./App.css');

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter history={history} store={store}>
			<App>
				<Route path="/" exact component={Home} />
				<Route path="/ModalWithButton" component={ModalWithButton} />
				<Route path="/Alert" component={Alert} />
				<Route path="/HighOrderComponent" component={HighOrderComponent} />
				<Route path="/SvgTest" component={SvgTest} />
				<Route path="/SvgDemo" component={SvgDemo} />
				<Route path="/MoreTable" component={MoreTable} />
		</App>
		</BrowserRouter>
	</Provider>,
document.getElementById('root'));