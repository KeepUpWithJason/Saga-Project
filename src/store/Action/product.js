import * as types from "../Types/product"

const createAction = type => payload => ({ type, payload })


// 关于product的action


// 发起请求
const getProductReq = createAction(types.FETCH_PRODUCT_REQ)

// 获取购物车商品成功
const getProductSuccess = createAction(types.FETCH_PRODUCT_SUCCESS)

// 获取购物车商品失败
const getProductFail = createAction(types.FETCH_PRODUCT_FAIL)

// 加入购物车
const addTocart = createAction(types.ADD_TOCART)