import { HISTORY_CART_DATA } from "./actionTypes"

export const historyCartData =(payload)=>{
    return {
        type:HISTORY_CART_DATA,
        payload
    }
}