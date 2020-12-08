import * as types from "../Types/product"

export const createAction = type => (payload = {}) => ({ type, payload })

// 关于product的action
// 发起请求
export const getProduct = createAction(types.FETCH_PRODUCT)

// 正在获取购物车商品
export const getProductReq = createAction(types.FETCH_PRODUCT_REQ)

// 获取购物车商品成功
export const getProductSuccess = createAction(types.FETCH_PRODUCT_SUCCESS)

// 获取购物车商品失败
export const getProductFail = createAction(types.FETCH_PRODUCT_FAIL)

// 加入购物车
export const addTocart = createAction(types.ADD_TOCART)