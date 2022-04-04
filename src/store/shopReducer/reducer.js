import {
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_SINGLE_DATA_SUCCESS
  } from "./actionTypes.js";
  
  const init = {
    vehicle: {
      data: [],
    },
    filtered : {}
  };
  
  export const ShopReducer = (store = init, { type, payload }) => {
    switch (type) {
      case GET_DATA:
        return {
          ...store,
          vehicle: {
            ...store.vehicle,
            data: payload,
          },
        };
        case GET_DATA_SUCCESS:
          return {
            ...store,
            vehicle: {
              ...store.vehicle,
              data: payload,
            },
          };
     
  
        
      default:
        return { ...store };
    }
  };