import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

const RED_COLOR = 'red';
const WHITE_COLOR = 'white';

export default class ChangeStyleButton extends Component {
    state: {
      pressStatus:bool;
    }
    constructor(props) {
        super(props);
        this.state = { pressStatus: false };
    }

    _onHideUnderlay(){
        this.setState({ pressStatus: false });
    }

    _onShowUnderlay(){
        this.setState({ pressStatus: true });
    }

    render(){
        return(
            <TouchableHighlight
                onHideUnderlay={this._onHideUnderlay.bind(this)}
                onPress={() => {
                    console.log('Press Change Style Button');
                }}
                onShowUnderlay={this._onShowUnderlay.bind(this)}
                style={[styles.exit, this.state.pressStatus ? {backgroundColor: RED_COLOR} : {backgroundColor: WHITE_COLOR}]}
                underlayColor='red'>
                <Text style={[styles.exittext, this.state.pressStatus ? {color: WHITE_COLOR} : {color: RED_COLOR}]}>
                    Ch
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  exit: {
      width: 30,
      height: 'auto',
      // marginTop: 30,
      // alignSelf: center,
      alignItems: 'center',

      // borderColor: 'red',
      // borderWidth: 1,
      // borderStyle: 'solid',
      // borderRadius: 5,
  },
  exittext: {
      height: 'auto',
      fontSize: 18,
      textAlignVertical: 'center',
  },
  buttonlayout: {
      height: 30,
      marginTop: 30,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#32a7f5',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 8,
  },
  buttonleft: {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
  },
  buttonright: {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
  },
  button: {
      height: 30,
      textAlign: 'center',
      textAlignVertical: 'center',
      paddingLeft: 10,
      paddingRight: 10,
  },
  buttondivideline: {
      width: 1,
      height: 30,
      backgroundColor: '#32a7f5',
      flexDirection: 'column',
  },
});
