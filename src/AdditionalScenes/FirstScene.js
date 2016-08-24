import React, { Component } from 'react';
import {
   View,
   Text,
   TouchableHighlight,
   StyleSheet
} from 'react-native';

import SecondScene from './SecondScene';

export default class FirstScene extends Component {
   pressButton() {
      this.props.navigator.push({
         component: SecondScene,
         params: {
            data: 'from first scene'
         }
      });
   }
   render() {
      return (
         <TouchableHighlight onPress = {this.pressButton.bind(this)}>
            <Text>Hello First Scene !</Text>
         </TouchableHighlight>
      )
   }
}
