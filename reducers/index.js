import {combineReducers} from 'redux';
import  {currWeight,calcReducer,currBarbell} from './calcReducer';
import  {rounds} from './roundsReducer';


const rootReducer = combineReducers({
    currWeight,
    calcReducer,currBarbell,rounds
    //short hand property name
})

export default rootReducer;