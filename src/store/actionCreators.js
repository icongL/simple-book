import {
	CHANG_SEARCH_FOCUS,
	CHANGE_MODAL_ENTER,
	CHANG_HOME_ARTICLE_PAGE,
	GET_HOME_INIT_ARTICLE,
	CHANG_HOME_ARTICLES
} from './actionTypes.js'
import {
	fromJS
} from 'immutable'

export const createHeadeInputFocusAction = (newFocus) => {
	return {
		type: CHANG_SEARCH_FOCUS,
		value: newFocus
	}
}

export const changeModalIsEnterAction = (isEnter) => {
	return {
		type: CHANGE_MODAL_ENTER,
		value: isEnter
	}
}

export const changArticlePageNum = (newPage) => {
	return {
		type: CHANG_HOME_ARTICLE_PAGE,
		newPage
	}
}

export const initHomeArticlesAction = () => {
	return {
		type: GET_HOME_INIT_ARTICLE
	}
}
export const changHomeArticlesAction = (value) => {
	return {
		type: CHANG_HOME_ARTICLES,
		articles: fromJS(value)
	}
}