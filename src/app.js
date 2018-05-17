import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { useStrict } from 'mobx';
useStrict(true);
import { Provider } from 'mobx-react';
import AppContainer from './containers/AppContainer';

import createRoute from './routes/createRoute';
import createStore from './stores/createStore';

const stores = createStore();
const routes = createRoute();

render(<AppContainer store={stores} routes={routes}/>, document.getElementById('root'));
