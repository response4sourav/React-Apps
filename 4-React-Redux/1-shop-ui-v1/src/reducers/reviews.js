


import { LOAD_REVIES, ADD_NEW_REVIEW } from '../constants'

/*

    {
        111:[
            {},
            {}
        ],
        222:[
            {},
            {}
        ]
    }

*/ 

export function reviewsReducer(state = {}, action) {

    console.log('-reviews-reducer-');

    switch (action.type) {
        case LOAD_REVIES: {
            let { productId, reviews } = action
            let existingReviews = state[productId] || [];
            reviews = existingReviews.concat(reviews)
            return Object.assign({}, state, { [productId]: reviews })
        }
        case ADD_NEW_REVIEW: {
            let { productId, review } = action
            let existingReviews = state[productId] || [];
            let reviews = existingReviews.concat(review)
            return Object.assign({}, state, { [productId]: reviews })
        }
        default:
            return state;
    }

}