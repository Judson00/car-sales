import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

//create store and conntect it to the app
//use createStore function
const store = configureStore();


//Provide the store to the app
//use the <Provider /> component and pass in the store as  aprop
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


