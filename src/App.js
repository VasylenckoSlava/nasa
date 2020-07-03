/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

import initReducer from './store/reducers/asteroidReducer';
import resultReducer from '../src/store/reducers/resultReducer';

import Navigator from './navigation';

const rootReducer = combineReducers({
  init: initReducer,
  // result: resultReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk)),
);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
