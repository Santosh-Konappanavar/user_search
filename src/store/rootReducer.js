import {combineReducers} from "redux";
import historyReducer from "./orderHistory/reducer";
import { ShopReducer } from "./shopReducer/reducer";
import CartReducer from "./cartReducer/reducer";


const rootReducer = combineReducers({
   
shop:ShopReducer,
cart:CartReducer,
history:historyReducer
});

export default rootReducer;