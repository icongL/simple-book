import { CHANG_SEARCH_FOCUS } from './../../../store/actionTypes.js'  
import { fromJS } from 'immutable'
const defaultState = fromJS({
	isFocus: false,
})
export default (state = defaultState, action) => {
	switch(action.type) {
		case   CHANG_SEARCH_FOCUS: 
			return state.set('isFocus', action.value)
		default:  return state
	} 
}