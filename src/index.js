import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { carReducer } from './reducers';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
