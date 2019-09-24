import { CHANG_SEARCH_FOCUS } from './actionTypes.js'  

export const createHeadeInputFocusAction = (newFocus) => {
	return {
		type: CHANG_SEARCH_FOCUS,
		value: newFocus
	}
}
