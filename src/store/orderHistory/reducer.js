
   
import {HISTORY_CART_DATA} from "./actionTypes"

let init = []


if (typeof window != undefined) {
    if (localStorage.getItem('orderData')) {
        init = JSON.parse(localStorage.getItem("orderData"))
    }
} else {
    init = [];
}


const historyReducer = (store = init, { type, payload }) => {
    switch (type) {

        case HISTORY_CART_DATA:
            return payload
        
        default:
            return store;
    }
};

export default historyReducer;