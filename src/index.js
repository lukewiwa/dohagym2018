
import React from 'react'
import ReactDOM from 'react-dom'
import './scss/app.scss'

// main app
import App from './App'

ReactDOM.render((
  <div className="wrapper">
    <App />
  </div>
),
  document.getElementById('app')
)