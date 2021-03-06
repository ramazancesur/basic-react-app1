import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import rootReducer from './store/reducers'
import * as serviceWorker from './serviceWorker';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import App from "./App"

import {translations} from './constants/lang'
const middlewares = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancer(applyMiddleware(...middlewares)));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations))
store.dispatch(setLocale('en'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
