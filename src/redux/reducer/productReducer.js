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
      return { state, ...payload };
    default:
      return state;
  }
};
