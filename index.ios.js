/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const GDMapView = requireNativeComponent('GDMapView', null)

export default class OB extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GDMapView style= {styles.container} showsCompass = {false}></GDMapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('OB', () => OB);
