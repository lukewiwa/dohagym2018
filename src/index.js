
import React from 'react'
import ReactDOM from 'react-dom'
import { registerServiceWorker } from './register-service-worker'
import './scss/app.scss'

// main app
import App from './App'

registerServiceWorker('./service-worker.js')

ReactDOM.render((
  <div className="wrapper">
    <App />
  </div>
),
  document.getElementById('app')
)