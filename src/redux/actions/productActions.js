import {ACTIONSTYPES} from '../action-types/action-types'

export const setProducts = (products) => {
    return {type:ACTIONSTYPES.ALL_PRODUCTS,payload:products}
}