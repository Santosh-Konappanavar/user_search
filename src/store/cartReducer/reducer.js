import { ADD_CART_DATA } from "./actionTypes";


let init = []
if (typeof window != undefined) {
    if (localStorage.getItem('vehicleData')) {
        init = JSON.parse(localStorage.getItem("vehicleData"))
    }
} else {
    init = [];
}

const CartReducer = (store = init, { type, payload }) => {
    switch (type) {
        case ADD_CART_DATA:
            return payload

        
        default:
            return store;
    }
};

export default CartReducer;