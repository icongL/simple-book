import { GET_HOME_INIT_ARTICLE  } from './actionTypes.js'
import { changHomeArticlesAction } from './actionCreators'
import { put, takeLatest, select} from 'redux-saga/effects'
import { baseURL } from './../api/baseURl.js' 
import axios from 'axios'

function* fetchArticleList () {
	// 获取页码数	
	const state= yield select()
	const articlePage = state.getIn(['Home', 'articlePage'])
	try {
		const list = yield axios.get(baseURL + `article?page=${ articlePage }`)
		const action = changHomeArticlesAction(list.data.articles)
		yield put(action)
	} catch (e) {
		console.log(e)
		// yield put({
		// 	errorInfo: e.status
		// })
	}
}


export function* initHomeArticleSaga () {
	yield takeLatest(GET_HOME_INIT_ARTICLE, fetchArticleList)
}