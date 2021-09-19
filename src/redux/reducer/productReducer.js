import { ACTIONSTYPES } from "../action-types/action-types";

export const prodcutReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ACTIONSTYPES.ALL_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ACTIONSTYPES.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const cartReducer = (state=[], { type, payload }) => {
  switch (type) {
    case ACTIONSTYPES.ADD_TO_CART:
      return {...state,payload};
    case ACTIONSTYPES.REMOVE_FROM_CART:
      return {};
    case ACTIONSTYPES.QUANTITY:
      return {};
    default:
      return state;
  }
};
