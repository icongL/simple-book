import { combineReducers } from 'redux-immutable'
import { Reducer as headeReducer} from './../layouts/Heade/store'

// 导出Reducer
export default combineReducers({
	heade: headeReducer
})