


function loadingStatusReducer(state = {}, action) {
    switch (action.type) {
        case 'REQUEST_BEGIN': {
            let { message } = action;
            return Object.assign({}, state, { message })
        }
        case 'REQUEST_FINISHED': {
            return Object.assign({}, state, { message: '' })
        }
        default: return state;
    }
}

export { loadingStatusReducer };