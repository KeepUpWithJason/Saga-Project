import Product from "./product"

let defaultState = {}

export default (state = defaultState, action) => {
    return {
        Product: Product(state.Product, action)
    }
}