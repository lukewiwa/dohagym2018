
import React from 'react'
import ReactDOM from 'react-dom'
import './scss/app.scss'

// main app
import App from './App'

ReactDOM.render((
  <div className="wrapper">
    <a href='https://ko-fi.com/W7W7LGD1' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee' /></a>

    <App />
  </div>
),
  document.getElementById('app')
)