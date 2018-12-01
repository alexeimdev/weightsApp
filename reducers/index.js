import {combineReducers} from 'redux';
import  {currWeight,calcReducer} from './calcReducer';


const rootReducer = combineReducers({
    currWeight,
    calcReducer
    //short hand property name
})

export default rootReducer;