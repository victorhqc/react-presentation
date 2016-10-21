import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Redux dependencies
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

import App from './components/App';
import Merge from './components/Merge';
import './index.css';

render(
  <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} />
                <Route path="/merge" component={Merge} />
            </Router>
        </Provider>,
  document.getElementById('root')
);
