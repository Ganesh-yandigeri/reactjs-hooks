import { PRODUCT_DATA, GET_ALL_PRODUCTS, DELETE_CART_ITEM, ADD_ONE_ITEM, SUB_ONE_ITEM } from './types';


export const productData = (singleData) => ({
    type: PRODUCT_DATA,
    payload: singleData
})

export const getAllProducts = () => ({
    type: GET_ALL_PRODUCTS
})

export const deleteCart = (cart) => ({
    type: DELETE_CART_ITEM,
    payload: cart
})

export const addOneItem = (cartItem) => ({
    type:ADD_ONE_ITEM,
    payload: cartItem
})

export const subOneItem = (cartItem) => ({
    type: SUB_ONE_ITEM,
    payload: cartItem
})