import {combineReducers} from 'redux'
import { prodcutReducer, selectedProductReducer } from './productReducer'

export const reducers = combineReducers({
    allProducts: prodcutReducer,
    product:selectedProductReducer
})