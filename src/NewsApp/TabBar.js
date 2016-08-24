import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   Dimensions,
   TouchableHighlight
} from 'react-native';

export default class TabBar extends Component {
   constructor(props) {
      super(props);
      let { index } = this.props;
      this.state = {
         selectedTab: index
      }
      this._pressTabItem = this._pressTabItem.bind(this);
   }
   _pressTabItem(index) {
      let {routes, switchTab} = this.props;
      switchTab(routes[index]);
   }
   componentWillReceiveProps(nextProps){
      this.setState({selectedTab: nextProps.index})
   }
   render() {
      let routes = this.props.routes;
      return(
         <View style={styles.nav}>
            {routes.map(item => {
               let selected = this.state.selectedTab === item.index;
               return (
                  <TouchableHighlight underlayColor="#f2f2f2"
                     key={item.index}
                     onPress={() => this._pressTabItem(item.index)}
                  >
                     <Text style={[selected && styles.selectedText]}>{item.name}</Text>
                  </TouchableHighlight>
               )
            })}
         </View>
      )
   }
}

const styles = StyleSheet.create({
   nav: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: Dimensions.get('window').width,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 48,
      borderTopWidth: 1,
      borderTopColor: '#d8d8d8',
      backgroundColor: '#f7f7f7'
   },
   selectedText: {
      color: '#f00'
   }
});