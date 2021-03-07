import { combineReducers } from 'redux'
import {authReducer} from './auth'

// Combines Reducers
const rootReducer = combineReducers({
    user: authReducer,
  
  })

export default rootReducer