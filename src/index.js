import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/reset.css'
import './assets/css/index.scss'

import App from './App.jsx'
import * as serviceWorker from './server/serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))



serviceWorker.unregister()
