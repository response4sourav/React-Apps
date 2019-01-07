


import { LOAD_PRODUCTS, BUY } from '../constants'


export function productsReducer(state = [], action) {

    console.log("-products-reducer-");

    switch (action.type) {
        case LOAD_PRODUCTS: {
            let { products } = action;
            return [...state, ...products]
            // return state;
        }
        default:
            return state;
    }

}