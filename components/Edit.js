import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { editBlog } from '../actions/index'
import { connect } from 'react-redux'
import fb from '../firebase'


class Edit extends Component{

    state = {
        title: this.props.route.params.title,
        content: this.props.route.params.content,
        key: this.props.route.params.key
      }

    submit =()=>{
        const {title, content} = this.state
        // console.log(title)
        // console.log(content)
         this.props.editBlog(this.state.title, this.state.content, this.state.key)
        // this.setState({
        //     title: "",
        //     content: ""
        // })
    }
    render(){
        console.log(this.props)
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

export default connect(null, {editBlog})(Edit)