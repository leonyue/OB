/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import ChangeStyleButton from './customButton';
/* @flow */

class WaypointTitle extends Component {
  render() {
    return (
      <View style={styles.title}>
        <Image
          style={{width: 30,height: 30,alignSelf:'center',marginLeft:5}}
          source={{uri: 'https://www.baidu.com/img/teacher_pc_8fa12bc0f7f102be0395c901ca11298f.gif'}}>
        </Image>
        <Text
          style={{marginLeft:15,alignSelf:'center',marginRight:5}}
          >{this.props.title}</Text>
        <Image
          style={{width: 30,height: 30,alignSelf:'center',marginRight:15}}
          source={{uri: 'https://www.baidu.com/img/teacher_pc_8fa12bc0f7f102be0395c901ca11298f.gif'}}>
        </Image>
        {/* <Image
          style={{width: 30,height: 30,alignSelf:'center',marginRight:5}}
          source={{uri: 'https://www.baidu.com/img/teacher_pc_8fa12bc0f7f102be0395c901ca11298f.gif'}}>
        </Image> */}
        <ChangeStyleButton
          style={{width: 30,height: 30,alignSelf:'center',marginRight:5}}>
        </ChangeStyleButton>
      </View>
    );
  }
}

export default class WaypointPanel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WaypointTitle title="This is title"></WaypointTitle>
        <View style={styles.content}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  title:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#448888',
  },
  content: {
    margin:0,
    // flex:8,
    backgroundColor:'green',
  },
});
