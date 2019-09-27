import React from 'react'
import './assets/css/App.scss'
import Home from './views/Home/Home.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Store from './store/index.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={Store}>
          <Route exact path="/" component={Home} />
        </Provider>
      </div>
    </Router>
  )
}

export default App
