import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../Reducers"
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk'


export default function Store(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer, 
        initialState,  
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );
};