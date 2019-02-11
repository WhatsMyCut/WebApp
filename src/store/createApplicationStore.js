import { createStore, applyMiddleware, compose } from 'redux'
import { default as thunk }  from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer'

// Create the application store with redux.
// Redux uses `reducers` to allow different types of dispatched
// actions to mutate global state in one place.
// All actions should be dispatched and go
// through the reducers of the application store.
// See more on redux here:
// * http://redux.js.org/
// * https://egghead.io/series/getting-started-with-redux
// * https://egghead.io/series/building-react-applications-with-idiomatic-redux
//
// The redux-thunk middleware allows dispatched actions to work
// asynchronously by returning a function instead of new state
// See more on redux-thunk here:
// * https://github.com/gaearon/redux-thunk

export default () => {
  return createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
}
