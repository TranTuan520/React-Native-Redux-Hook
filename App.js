import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

import store from './redux/store'
import Main from './components/mainComponent';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

