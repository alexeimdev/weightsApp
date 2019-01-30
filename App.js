/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import configureStore from './store/configurestore';
import {Provider} from 'react-redux';
import Mainpage from "./Mainpage";
import CalcPage from "./CalcPage";
import { StackNavigator } from 'react-navigation';
import MyRoutes from "./navi";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const store = configureStore();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <Text style={styles.headerStyle}>EasyWeights</Text>
            <MyRoutes />
          </View>
        </Provider>
    );
  }
}

const styles = {
    container: {
        marginTop: 30,
        flex: 1
    },
    headerStyle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 15
    },
}