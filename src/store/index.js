import { createStore, applyMiddleware } from "redux"

import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "./Reducers"

import createSagaMiddleware from "redux-saga" //引入saga中间件

let sagaMiddleware = createSagaMiddleware()

import rootSaga from "./Sagas"

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)