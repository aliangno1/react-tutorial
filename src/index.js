import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
// import App from './Api'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))