import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
// import reduxPromise from 'redux-promise'
// import reduxMulti from 'redux-multi'
// import reduxThunk from 'redux-thunk'

import App from './main/app'
// import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && __REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware()(createStore)(reducers, devTools)

ReactDOM.render(< App/>, document.getElementById('root'))
