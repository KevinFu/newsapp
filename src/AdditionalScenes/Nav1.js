import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   Navigator,
   TouchableHighlight
} from 'react-native';

import FirstScene from './FirstScene';

export default class Nav1 extends Component {
   render() {
      return (
         <Navigator
            initialRoute = {{name: 'First Scene', component: FirstScene}}
            renderScene = {(route, navigator) => {
               let Component = route.component;
               return <Component {...route.params} navigator = {navigator} />
            }}
            style = {{padding: 100}}
         />
      )
   }
}
