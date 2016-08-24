import React, { Component } from 'react';
import {
   View,
   Text,
   TouchableHighlight,
   StyleSheet
} from 'react-native';


export default class SecondScene extends Component {
   render() {
      return (
         <TouchableHighlight onPress = {() => {
            this.props.navigator.pop();
         }}>
            <Text>Hello Second Scene {this.props.data}!</Text>
         </TouchableHighlight>
      )
   }
}
