import { GET_DATA, GET_DATA_SUCCESS, GET_SINGLE_DATA_SUCCESS,ADD_CART_DATA } from "./actionTypes"


export const getData=(payload)=>({
     type:GET_DATA,
     payload
})

export const getDataSuccess=(payload)=>({
     type:GET_DATA_SUCCESS,
     payload
})


export const fetchSingleData = (payload) => ({
     type : GET_SINGLE_DATA_SUCCESS,
     payload
});

export const addCartData =(payload)=>{
    return {
        type:ADD_CART_DATA,
        payload
    }
}