

import { createStore } from 'redux'
import rootreducer from '../reducers';

import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootreducer,composeWithDevTools())


export default store;