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
          <GDMapView style= {styles.map} showsCompass = {false}>
          </GDMapView>
          <View style={styles.controlPanel}>
          </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    position: 'absolute',
    width:'100%',
    height:'100%',
  },
  controlPanel:{
    position: 'absolute',
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(255, 0, 0, 0.5)'
  },
});

AppRegistry.registerComponent('OB', () => OB);
