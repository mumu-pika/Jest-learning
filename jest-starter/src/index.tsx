import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'

import 'antd/dist/antd.css'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
