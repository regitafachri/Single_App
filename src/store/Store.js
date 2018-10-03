import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from '../reducers/reducers'

const middleware = [promiseMiddleware()]

if (process.env.NODE_ENV !== 'live'){
   middleware.push(createLogger())
}

const store = createStore(reducers, applyMiddleware(...middleware))

export default store