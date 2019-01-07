
import { LOAD_PRODUCTS } from '../constants'

import Api from '../api/Api'

export function loadProducts(type, size) {
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading products' })
        let promise = Api.getAllProducts(type, size);
        promise
            .then(response => response.data)
            .then(products => {
                setTimeout(() => {
                    dispatch({ type: 'REQUEST_FINISHED' })
                    dispatch({ type: LOAD_PRODUCTS, products }) // async action
                }, 3000)
            })
    }
}