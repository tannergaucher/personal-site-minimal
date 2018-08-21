import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'rebass'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body { 
    margin: 0; 
    font-family: 'Roboto Mono', monospace;
  }
  `
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
