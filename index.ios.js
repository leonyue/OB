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
  View,
  Button,
  Alert,
  Image,
  Animated
} from 'react-native';

const GDMapView = requireNativeComponent('GDMapView', null);

const onButtonPress= ()=> {
  Alert.alert('button has been pressed');
};


export default class OB extends Component {
  state: {
    fadeAnim: Animated,
    currentAlpha:number,
    currentPanelMarginRight:number,
    translateAnim:Animated,
  }
  constructor(props) {
    super(props);
    this.state={
      currentAlpha: 1.0,//标志位，记录当前value
      fadeAnim: new Animated.Value(1.0),
    }
  }

  startAnimation() {
    this.state.currentAlpha = this.state.currentAlpha == 1.0?0:1.0;
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue:this.state.currentAlpha,
        duration:2000,
      }
    ).start()
  }

  render() {
    return (
      <View style={styles.container}>
          <GDMapView style= {styles.map} showsCompass = {false}>
          </GDMapView>
          {/* 工具栏 */}
          <Animated.View style={[
            styles.waypointToolBar,
            {
              transform:[
                {
                  translateX:this.state.fadeAnim.interpolate(
                    {
                      inputRange:[0,1],
                      outputRange:[-200,0],
                    },
                  ),
                }
              ]
            }
          ]}>
          </Animated.View>
          {/* 抽屉开关 */}
          <Animated.View style={
            [styles.waypointDrawer,{
              opacity: this.state.fadeAnim,
              transform:[
                {
                  translateX:this.state.fadeAnim.interpolate(
                    {
                      inputRange:[0,1],
                      outputRange:[-200,0],
                    },
                  ),
                }
              ]
            } ]}>
            <Button title='X'
              backgroundColor = 'rgba(0,0,0,0)'
              onPress={()=>this.startAnimation()}>
              </Button>
          </Animated.View>
          {/* 展开视图 */}
          <Animated.View style={[styles.waypointPanel,{
            transform:[
              {
                translateX:this.state.fadeAnim.interpolate(
                  {
                    inputRange:[0,1],
                    outputRange:[-200,0],
                  },
                ),
              }
            ]
          }]}>

          </Animated.View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'flex-start',
  },
  map:{
    position: 'absolute',
    width:'100%',
    height:'100%',
  },
  waypointToolBar:{
    // position: 'absolute',
    width:40,
    height:200,
    marginTop:20,
    marginRight:10,
    borderRadius:3,
    alignSelf:'flex-end',
    backgroundColor:'rgba(0,0,0,0.3)',
  },
  waypointDrawer:{
    // position: 'absolute',
    width:90,
    height:40,
    marginTop:20,
    marginRight:-20,
    borderRadius:20,
    alignSelf:'flex-end',
    backgroundColor:'rgba(0,0,0,0.3)',
  },
  waypointPanel:{
    // position: 'absolute',
    width:200,
    height:300,
    backgroundColor:'rgba(255, 0, 0, 1)',
    marginRight:-200,
    marginTop:-260,
    alignSelf:'flex-end',
  },
});

AppRegistry.registerComponent('OB', () => OB);
