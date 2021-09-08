import * as ACTIONTYPE from "../action-types/shop-actions";

const INIT_STATE = {
  sate: [],
};

export const shopReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ACTIONTYPE.ADD_TO_CART:
      return {};
    case ACTIONTYPE.REMOVE_FROM_CART:
      return {};
    case ACTIONTYPE.CURRENT_ITEM:
      return {};
    case ACTIONTYPE.QTY:
      return {};
    default:
      return state;
  }
};
