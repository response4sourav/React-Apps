

import { productsReducer } from './products'
import { reviewsReducer } from './reviews'
import { cartReducer } from './cart'
import { loadingStatusReducer } from './loading-status'


import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    status: loadingStatusReducer
});

export default rootReducer; 