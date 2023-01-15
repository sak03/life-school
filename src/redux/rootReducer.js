import { combineReducers } from 'redux'
import { userInfo } from './reducer'
import { changeState } from './sidebarReducer'

export default combineReducers({userInfo, changeState})