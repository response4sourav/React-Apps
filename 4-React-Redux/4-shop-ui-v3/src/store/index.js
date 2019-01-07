

import { createStore, applyMiddleware } from 'redux'
import rootreducer from '../reducers';
import ReduxThunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootreducer, composeWithDevTools(
    applyMiddleware(ReduxThunk)
))


export default store;