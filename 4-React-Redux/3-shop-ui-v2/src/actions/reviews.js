


import { LOAD_REVIES, ADD_NEW_REVIEW } from '../constants'


export function loadReviews(productId, size) {
    //..
    const reviews = [
        { stars: 5, author: 'who@mail.com', body: 'sample-review-1' },
        { stars: 1, author: 'who@mail.com', body: 'sample-review-2' }
    ]
    return { type: LOAD_REVIES, productId, reviews }
}

export function addNewReview(productId, review) {
    //..
    return { type: ADD_NEW_REVIEW, productId, review }
}