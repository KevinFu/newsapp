import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   Dimensions,
   TouchableHighlight
} from 'react-native';

export default class Tie extends Component {
   render() {
      return (
         <View style = {{width: Dimensions.get('window').width}}>
            <Text style = {{fontSize: 30, textAlign: 'center', paddingTop: 300}}>Tie page</Text>
         </View>
      )
   }
}
