import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   Navigator,
   TouchableHighlight,
   Dimensions
} from 'react-native';

import News from './News';
import Live from './Live';
import User from './User';
import Topic from './Topic';
import TabBar from './TabBar';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.routes = [
         {title: 'News', name: '新闻', index: 0, component: News},
         {title: 'Live', name: '直播', index: 1, component: Live},
         {title: 'Topic', name: '话题', index: 2, component: Topic},
         {title: 'User', name: '我', index: 3, component: User},
      ];
      this.state = {
         index: this.routes[0].index
      };
   
      this._switchTab = this._switchTab.bind(this);
   }
   _switchTab(route) {
      let navigator = this.refs.navigator;
      let current = navigator.getCurrentRoutes(); 
      let filter = current.filter(item => item.index === route.index); 

      if(!filter.length) { 
         navigator.push(route); 
      } else { 
         navigator.jumpTo(route); 
      }
      this.setState({index: route.index});
   }
   render() {
      return (
         <View style = {styles.container}>
            <Navigator
               ref="navigator"
               initialRoute = { this.routes[0] }
               renderScene = { (route, navigator) => {
                  let Component = route.component;
                  return <Component route = {route} navigator = {navigator}/>
               }}
               configureScene={(route) => {
                  let  gestureType = Navigator.SceneConfigs.HorizontalSwipeJump;
                  gestureType.gestures.jumpForward=null;
                  return gestureType
               }}
               style={{flex: 1, width: Dimensions.get('window').width, paddingTop: 50}}
               navigationBar={
                  <Navigator.NavigationBar
                     routeMapper={{
                        LeftButton: (route, navigator, index, navState) =>
                           <Text style={styles.routerBarText}>搜索</Text>,
                        RightButton: (route, navigator, index, navState) =>
                           <Text style={styles.routerBarText}>用户</Text>,
                        Title: (route, navigator, index, navState) =>
                           <Text style={styles.routerBarText}>{route.title}</Text>,
                     }}
                     style={{backgroundColor: '#E10000', height: 50,}}
                 />
               }
            />
            <TabBar routes={this.routes} switchTab={this._switchTab} index={this.state.index}/>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      position: 'relative',
      height: Dimensions.get('window').height
   },
   routerBarText: {
      color: '#fff',
      paddingVertical: 8,
      fontSize: 12,
      paddingHorizontal: 10,
   }
});
