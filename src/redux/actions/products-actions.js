import * as ACTIONTYPES from "../action-types/shop-actions";

export const addToCar = (productId) => {
  return {
    type: ACTIONTYPES.ADD_TO_CART,
    payload: {
      id: productId,
    },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: ACTIONTYPES.REMOVE_FROM_CART,
    payload: {
      id: productId,
    },
  };
};

export const quantity = (productId) => {
  return {
    type: ACTIONTYPES.QTY,
    payload: {
      id: productId,
    },
  };
};

export const currentProduct = (product) => {
  return {
    type: ACTIONTYPES.CURRENT_PRODUCT,
    payload: product,
  };
};

export const allProducts = (products) => {
    return {
        type:ACTIONTYPES.ALL_PRODUCT,
        payload:products
    }
}
