/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View}  from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import config from './config/firebase';
import SplashScreen from 'react-native-splash-screen';
import Router from './Router';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <StatusBar backgroundColor="#2d3436" barStyle="light-content" />
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  body: {
    flex: 14,
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
