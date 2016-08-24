/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   View
} from 'react-native';

// import Nav1 from './src/OneScene/Nav1';
// import Nav2 from './src/OneScene/Nav2';

import Nav1 from './src/AdditionalScenes/Nav1';
import Nav2 from './src/AdditionalScenes/Nav2';

import App from './src/NewsApp/App';

class newsapp extends Component {
   render() {
      return (
         <App />
      )
   }
}

AppRegistry.registerComponent('newsapp', () => newsapp);
