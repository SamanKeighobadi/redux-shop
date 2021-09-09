import {ACTIONSTYPES} from '../action-types/action-types'

export const setProdcuts = (products) => {
    return {type:ACTIONSTYPES.ALL_PRODUCTS,payload:products}
}