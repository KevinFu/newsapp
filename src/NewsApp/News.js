import React, { Component } from 'react';
import {
   View,
   Text,
   Image,
   StyleSheet,
   ListView,
   Dimensions,
   RefreshControl,
   TouchableHighlight
} from 'react-native';

const goldArr = [
   'Sop1470526978184',
   'Sop1470589721396',
   'Sop1470587303312',
   'Sop1470676586199',
   'Sop1470698370455',
   'Sop1470678707095',
   'Sop1470770367976',
   'Sop1470783626057',
   'Sop1470844413241',
   'Sop1470872422810',
   'Sop1470844822695',
   'Sop1471004326568',
   'Sop1471037089286',
   'Sop1471114438478',
   'Sop1471217656328',
   'Sop1471379186607',
   'Sop1471389898878',
   'Sop1471474287608',
   'Sop1471484467263',
   'Sop1471550131850',
   'Sop1471625444090',
   'Sop1471633479605',
   'Sop1471701542616',
   'Sop1471722487603',
   'Sop1471742037511',
   'Sop1471747687557'
];

let listData = {};

export default class News extends Component {
   constructor(props) {
      super(props);
      ds = new ListView.DataSource({
         rowHasChanged: (r1, r2) => r1 !== r2,
         sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      });
      this.state = {
         loading: true,
         isRefreshing: false,
         dataSource: ''
      }
   }
   
   componentDidMount() {
      console.log(this.props.loading);
      this._fetchData();
   }
   _fetchData(loadMore) {
      let data = {};
      
      let rndGoldId = goldArr[Math.floor(Math.random() * goldArr.length)];
      
      let url = 'http://c.3g.163.com/nc/special/' + rndGoldId + '.html';
      
      fetch(url)
         .then((res) => res.json())
         .then((jsondata) => {
            data = jsondata[rndGoldId].topics;
            listData = loadMore == 'true' ? listData : {};
   
            for(let key in data) {
               listData[jsondata[rndGoldId].sname + ' ' + data[key].shortname] = data[key].docs;
            }

            console.log(listData);
            
            this.setState({
               loading: false,
               dataSource: ds.cloneWithRowsAndSections(listData)
            });
         })
         .catch((err) => {
            console.warn(err);
         })
   }
   _onRefresh() {
      this._fetchData();
   }
   _renderRow(rowData) {
      return (
         <View style = {styles.item}>
            <Image
               source = {{uri: rowData.imgsrc}}
               style = {styles.itemImg} />
            <View style = {styles.itemInfo}>
               <Text style = {styles.itemTitle}>{rowData.title}</Text>
               <Text style = {styles.itemReplyCount}>{rowData.replyCount}跟贴</Text>
            </View>
         </View>
      )
   }
   _renderSectionHeader(sectionData, sectionId) {
      return (
         <View style = {styles.sectionHeader}>
            <Text style = {styles.sectionText}>{sectionId}</Text>
         </View>
      )
   }
   _loadMore() {
      this._fetchData('true');
   }
   render() {
      return (
         <View style = {{width: Dimensions.get('window').width, height: 568}}>
            {
               this.state.loading ? <Image style = {styles.loading} source = {require('../../image/loading.gif')}/>:
                  <ListView style = {{flex: 1}}
                     dataSource = {this.state.dataSource}
                     renderRow = {this._renderRow}
                     renderSectionHeader = {this._renderSectionHeader}
                     onEndReached = {this._loadMore.bind(this)}
                     onEndReachedThreshold = {10}
                     refreshControl = {
                        <RefreshControl
                           refreshing = {this.state.isRefreshing}
                           onRefresh = {this._onRefresh.bind(this)}
                        />
                     }
                  />
            }
         </View>
      )
   }
}

const styles = StyleSheet.create({
   loading: {
      position: 'absolute',
      top: 20,
      left: Dimensions.get('window').width / 2 - 10,
      width: 16,
      height: 16
   },
   sectionHeader: {
      flex: 1,
      height: 30,
      paddingLeft: 15,
      justifyContent: 'center',
      backgroundColor: '#eef1f6'
   },
   sectionText: {
      fontSize: 12,
   },
   item: {
      position: 'relative',
      flexDirection: 'row',
      paddingTop: 9,
      paddingRight: 8,
      paddingBottom: 9,
      paddingLeft: 10,
      borderBottomWidth:1,
      borderColor:'#efeff1',
   },
   itemImg: {
      width: 100,
      height: 75,
      marginRight: 14
   },
   itemInfo: {
      flex: 1,
   },
   itemTitle: {
      fontSize: 16,
      lineHeight: 22,
      marginTop: -5
   },
   itemReplyCount: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      height: 16,
      lineHeight: 15,
      paddingLeft: 5,
      paddingRight: 5,
      borderRadius: 7,
      color: '#828282',
      fontSize: 12,
      backgroundColor: '#f2f2f2'
   }
})
