import {combineReducers} from 'redux'
import { prodcutReducer } from './productReducer'

export const reducers = combineReducers({
    allProducts: prodcutReducer
})