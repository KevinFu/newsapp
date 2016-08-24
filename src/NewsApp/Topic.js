import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   Dimensions,
   TouchableHighlight
} from 'react-native';

export default class Topic extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <View style = {{width: Dimensions.get('window').width}}>
            <Text style = {{fontSize: 30, textAlign: 'center', paddingTop: 300}}>Topic Page</Text>
         </View>
      )
   }
}
