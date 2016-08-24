import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   Navigator
} from 'react-native';

export default class Nav2 extends Component {
   render() {
      return (
         <Navigator
            initialRoute = {{title: 'first page', index: 0}}
            renderScene = {(route, navigator) =>
               <Text>Hello {route.title} !</Text>
            }
            style = {{padding: 100}}
         />
      )
   }
}
