import React, { Component, PropTypes } from 'react';
import {
   View,
   Text,
   Navigator,
   StyleSheet,
   TouchableHighlight
} from 'react-native';

import Firstpage from './firstpage';

export default class Nav1 extends Component {
   render() {
      return (
         <Navigator
            initialRoute = {{title:'first page', component: Firstpage}}
            renderScene = {(route, navigator) => {
               var Component = route.component;
               return <Component navigator={navigator}/>
            }}
            style = {{padding: 100}}
         />
      )
   }
}
