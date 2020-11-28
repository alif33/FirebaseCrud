import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableHighlight } from 'react-native'
import { getBlogs, deleteBlogs } from '../actions/index'
import { AntDesign } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { Component } from 'react'
import _ from 'lodash'

class Blogs extends Component{
componentDidMount(){
  this.props.getBlogs()
}
  
  render(){
    console.log(this.props)
    return(
      <View style={styles.container}> 
          <Text>Fetch Blogs articles</Text>
          <FlatList
            style={{ width: '100%'}}
            data={this.props.listOfBlogs}
            keyExtractor={ (item)=> item.key }
            renderItem={ ({item})=> {
              return (
                <View style={{ elevation: 8,marginBottom: 15, borderRadius: 15, backgroundColor: '#575FCF', padding: 20}}> 
                  <Text style={{fontSize: 20, lineHeight: 30, color: '#fff'}}>{item.title}</Text>
                  <Text style={{ fontSize: 20 }}>{item.content}</Text>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}> 
                    <TouchableHighlight onPress={ ()=>{ this.props.navigation.navigate('Edit', {...item})}}>
                      <View> 
                          <AntDesign name="plus" size={24} color="black" />
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ ()=>{ this.props.deleteBlogs(item.key) }}>
                      <View> 
                          <AntDesign name="close" size={24} color="black" />
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              )
            }}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10
    }
})

function mapStateToProps(state){
  const listOfBlogs = _.map(state.blogList.blogList, (val, key)=>{
    return {
      ...val,
      key: key
    }
  })
  return {
    listOfBlogs
  }
}

export default connect( mapStateToProps, {getBlogs, deleteBlogs})(Blogs) 