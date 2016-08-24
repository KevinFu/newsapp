import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   Dimensions,
   ScrollView,
   TouchableHighlight
} from 'react-native';

export default class Live extends Component {
   constructor(props) {
      super(props);
   }
   _renderItems() {
      let blockArr = [];
      for (let i = 0; i < 10; i++) {
         blockArr[i] = (
            <View style={styles.item} key={i}><Text>项目{i}</Text></View>
         )
      }
      
      return blockArr;
   }
   render() {
      let items = this._renderItems();
      items[items.length] = (
         <ScrollView key={10} style={styles.scrollView} horizontal={true}>
            {this._renderItems()}
         </ScrollView>
      )
      return (
         <View style={{height: 570}}>
            <ScrollView style={styles.scrollView}>{items}</ScrollView>
         </View>
      )
   }
}


const styles = {
   scrollView:{
      margin:10
   },
   item:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#ccc',
      borderColor:'#999',
      borderWidth:1,
      padding:10,
      margin:10,
      height:50,
   },
}
