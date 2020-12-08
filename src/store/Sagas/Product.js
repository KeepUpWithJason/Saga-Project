// 相当于redux中的dispatch
import { put, call, takeLatest, delay } from "redux-saga/effects"

import * as actions from "../Action/product"

import { getProductApi } from "../../api"

import * as types from "../Types/product"

// 此方法的作用是为了通过拦截来触发相应的操作
export default function* watchFetchProductFlow() {
    // 想要拦截的action类型(type)  参数2 传入generator处理函数
    yield takeLatest(types.FETCH_PRODUCT, getProductData)
}


function* getProductData() {
    // 正在发起请求 提交action通知reducer进行更改
    // put相当于dispatch
    yield put(actions.getProductReq())
    yield delay(2000)
    try {
        // call可以调用请求的api
        let res = yield call(getProductApi, "HelloJason")
        console.log(res);
        // 数据获取成功
        yield put(actions.getProductSuccess({ data: res.data }))
    } catch (err) {
        err = err.toString()
        // 数据拉取失败
        yield put(actions.getProductFail({ err }))
    }
}