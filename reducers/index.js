import {combineReducers} from 'redux';
import  {currWeight,calcReducer,currBarbell} from './calcReducer';


const rootReducer = combineReducers({
    currWeight,
    calcReducer,currBarbell
    //short hand property name
})

export default rootReducer;