


import { LOAD_REVIES, ADD_NEW_REVIEW } from '../constants'

import Api from '../api/Api'

export function loadReviews(productId, size) {

    return function (dispatch) {
        let promise = Api.getAllReviews(productId, size);
        promise
            .then(response => response.data)
            .then(reviews => {
                // setTimeout(() => {
                dispatch({ type: LOAD_REVIES, productId, reviews }) // async action
                // }, 2000)
            })
    }

}

export function addNewReview(productId, review) {
    return function (dispatch) {
        let promise = Api.addNewReview(productId, review);
        promise
            .then(response => response.data)
            .then(review => {
                // setTimeout(() => {
                dispatch({ type: ADD_NEW_REVIEW, productId, review }) // async action
                // }, 2000)
            })
    }

}