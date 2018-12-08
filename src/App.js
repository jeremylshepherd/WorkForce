/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View}  from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import config from './config/firebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/Elements';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
        <Header text="Employee Manager" />
        <View style={styles.body}>
          <LoginForm />
        </View>
        </View>
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
