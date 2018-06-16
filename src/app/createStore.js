import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  /*
    compose(...middleware) is where we inject our middlewares (think middleman for your Redux data)
    into our dataflow.
    The first thing we're passing is the 'Thunk Middleware', which allows us to dispatch asynchronous actions.
    This helps us the most when we're gathering data from an API. For more details into what a thunk is, check out
    the following: https://github.com/gaearon/redux-thunk
    The second thing is Redux Devtools, which is an EXTREMELY POWERFUL extension for debugging React/Redux applications.
    It allows you to monitor the state of your redux store and 'time-travel' between dispatched actions.
    This way, I can see the exact affect that each action has on the store.
  */
  compose(
    applyMiddleware(thunk),
    applyMiddleware(logger),
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
  )
);

export default store;
