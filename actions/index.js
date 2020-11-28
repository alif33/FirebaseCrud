import fb from '../firebase'
export function getBlogs(){
    return (dispatch) => {
        fb.database().ref('/blogs').on('value', snapshot => {
            dispatch({
                type: "BLOGS_FETCH",
                payload: snapshot.val()
            })
        })
    }
}
export function postBlogs(title, content){
    return (dispatch) => {
        fb.database().ref('/blogs').push({title, content})
        //fb.database().ref('/blogs').push({title, content})
    }
}
export function deleteBlogs(key) {
    return (dispatch) =>{
        fb.database().ref(`/blogs/${key}`).remove()
    }
}


export function editBlog(title, content, key) {
    return (dispatch) =>{
        fb.database().ref(`/blogs`).child(key).update({title, content})
    }
}