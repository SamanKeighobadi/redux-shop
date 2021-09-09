import { ACTIONSTYPES } from "../action-types/action-types";

export const prodcutReducer = (state=[],{type,payload}) =>{
    switch(type){
        case ACTIONSTYPES.ALL_PRODUCTS:
            return {...state,products:payload}
        default:
            return state;
    }
}