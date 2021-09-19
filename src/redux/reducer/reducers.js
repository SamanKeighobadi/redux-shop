import {combineReducers} from 'redux'
import { cartReducer, prodcutReducer, selectedProductReducer } from './productReducer'

export const reducers = combineReducers({
    allProducts: prodcutReducer,
    product:selectedProductReducer,
    cart:cartReducer
})