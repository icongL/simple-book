import { CHANG_SEARCH_FOCUS, CHANGE_MODAL_ENTER } from './../../../store/actionTypes.js'  
import { fromJS } from 'immutable'
const defaultState = fromJS({
	isFocus: false,
	isEnter: false
})
export default (state = defaultState, action) => {
	switch(action.type) {
		case   CHANG_SEARCH_FOCUS: 
			return state.set('isFocus', action.value)
		case CHANGE_MODAL_ENTER :
			return state.set('isEnter', action.value)
		default:  return state
	} 
}