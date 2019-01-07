


import { LOAD_PRODUCTS} from '../constants'


export function productsReducer(state = [], action) {

    console.log("-products-reducer-");

    switch (action.type) {
        case LOAD_PRODUCTS: {
            let { products } = action;
            return [...state, ...products]
        }
        default:
            return state;
    }

}