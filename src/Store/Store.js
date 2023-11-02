import { createStore } from 'redux';
import data from '../utils/Data.json'
// import {saveAs} from 'file-saver'


const initialstate = {
    warehouses : data,
}

const warehousereducer = (state = initialstate, action) => {
    console.log(action.type)
    switch(action.type) {
        case 'EDIT_WAREHOUSE':
            const updatedwarehouse = state.warehouses.map((warehouse)=>
            warehouse.id === action.payload.id ? action.payload : warehouse
            )
            return {...state, warehouses: updatedwarehouse}
            case 'ADD_WAREHOUSE':
                return {
                  ...state,
                  warehouses: [...state.warehouses, action.payload],
                };
        default :
        return state;
    }
}
const store = createStore(warehousereducer)
export default store;