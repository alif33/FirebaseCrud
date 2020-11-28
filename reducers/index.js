import { combineReducers } from 'redux'
import BlogReducer from './BlogReducer'

const rootReducer = combineReducers({
    blogList: BlogReducer
})

export default rootReducer