import { ACTIONSTYPES } from "../action-types/action-types";

export const setProducts = (products) => {
  return { type: ACTIONSTYPES.ALL_PRODUCTS, payload: products };
};

export const selectedProduct = (product) => {
  return { type: ACTIONSTYPES.SELECTED_PRODUCT, payload: product };
};

export const addToCart = (productId) => {
  return {
    type: ACTIONSTYPES.ADD_TO_CART,
    payload: {
      id: productId,
    },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: ACTIONSTYPES.REMOVE_FROM_CART,
    payload: {
      id: productId,
    },
  };
};

export const quntity = (productId, value) => {
  return {
    type: ACTIONSTYPES.QUANTITY,
    payload: {
      id: productId,
      qty: value,
    },
  };
};
