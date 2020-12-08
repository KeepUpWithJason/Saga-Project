import { createStore, applyMiddleware } from "redux"

import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "./Reducers"

import craeteSagaMiddleware from "redux-saga" //引入saga中间件

let sagaMiddleware = craeteSagaMiddleware()

import helloSaga from "./Sagas/Product"

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(helloSaga)