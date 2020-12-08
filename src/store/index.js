import { createStore, applyMiddleware } from "redux"

import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "./Reducers"

export default createStore(rootReducer, composeWithDevTools())