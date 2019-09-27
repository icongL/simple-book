import {  CHANG_HOME_ARTICLE_PAGE, CHANG_HOME_ARTICLES  } from './../../../store/actionTypes.js'
import { fromJS } from 'immutable'
const defaultState =fromJS({
	articlePage: 1,
	articles: [],
	pageSize: 10,
	articlesMaxPage: 5
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case CHANG_HOME_ARTICLE_PAGE: 
			return state.set('articlePage', action.newPage)
		case CHANG_HOME_ARTICLES:
			return state.set('articles', state.get('articles').concat(action.articles))
		default: return state
	}
}