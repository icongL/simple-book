import { combineReducers } from 'redux-immutable'
import { Reducer as headeReducer} from './../layouts/Heade/store'
import {  Reducer as HomeReducer } from './../views/Home/store'
// 导出Reducer
export default combineReducers({
	heade: headeReducer,
	Home:  HomeReducer
})