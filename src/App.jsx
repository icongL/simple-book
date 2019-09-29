import React from 'react'
import './assets/css/App.scss'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Store from './store/index.js'
import Home from './views/Home/Home.jsx'
import ArticleDetail from './views/ArticleDetail/index.jsx'
import Explore from './views/Explore/index.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={Store}>
          <Route exact path="/" component={Home} />
          <Route exact path="/find/" component={Explore} />
          <Route exact path="/:id" component={ArticleDetail} />
        </Provider>
      </div>
    </Router>
  )
}

export default App
