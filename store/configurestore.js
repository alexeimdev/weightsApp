import {createStore, applyMiddleware} from  'redux';
import rootReducer from '../reducers';
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools} from 'redux-devtools-extension';
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(reduxImutableStateInvariant()))
    );
}