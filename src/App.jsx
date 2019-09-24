import React from 'react'
import './assets/css/App.scss'
import Heade from './layouts/Heade/index.jsx'
import Foot from './layouts/Foot/Foot.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom"
import Store from './store/index.js'

function App() {
  return (
   <Router>
  	 <div className="App">
	     <Provider store={ Store }>
   	 			<Heade />
   	 			<Foot />
   	 	 </Provider>
    	</div>
   </Router>
  )
}

export default App;
