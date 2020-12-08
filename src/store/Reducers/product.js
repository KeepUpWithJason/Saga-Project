let defaultState = {
    isFetching: true,
    data: []
}

export default (state = defaultState, action) => {
    let { type, payload } = action
    switch (type) {
        case "FETCH_PRODUCT":
            return Object.assign({}, state, {
                isFetching: true
            })
        case "FETCH_PRODUCT_SUCCESS":
            return Object.assign({}, state, {
                isFetching: false,
                data: payload.data
            })
        case "FETCH_PRODUCT_FAIL":
            return Object.assign({}, state, {
                isFetching: false,
                data: null,
                err: payload.err
            })
        default:
            return { ...state }
    }
}