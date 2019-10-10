import React from 'react';
import RootNavigator from './src/navigation/RootNavigator'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/redux/reducers'
import thunk from 'redux-thunk';

const middlewares = [thunk];

const store = createStore(reducers, applyMiddleware(...middlewares))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }

}

