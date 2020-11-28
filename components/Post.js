import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { postBlogs } from '../actions/index'
import { connect } from 'react-redux'
import fb from '../firebase'

class Post extends Component{
    constructor(){
      super()
      this.state = {
         title: "",
         content: ""
      }
    }
    submit =()=>{
        const {title, content} = this.state
        // fb.database().ref('/log').set({title, content})
        // fb.database().ref('blogs').push().set({title, content})
        this.props.postBlogs(this.state.title, this.state.content)
        this.setState({
            title: "",
            content: ""
        })
        this.props.navigation.navigate('NavStack')
    }
    render(){
        return(
            <View style={styles.container}> 
                <Text style={{ textAlign: 'center'}}>Post</Text>
                <TextInput style={{marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="title" onChangeText={ title => this.setState({title})} value={this.state.title} />
                <TextInput  style={{marginTop: 20, height: 90, borderColor: 'gray', borderWidth: 1}} placeholder="content" onChangeText={ content => this.setState({content})} value={this.state.content}/>
                <View style={{ marginTop: 20}}> 
                    <Button
                        title="Submit"
                        onPress={this.submit}    
                    />
                </View>
            </View>
        ) 
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
})  

export default connect(null, {postBlogs})(Post)