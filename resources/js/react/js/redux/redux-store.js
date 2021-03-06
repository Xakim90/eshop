import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import productsReducer from './productsReducer';

let reducers = combineReducers({
    form: formReducer,
    productsReducer: productsReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunkMiddleWare) // redux-dev tools o'rnatilgan store
    )
);
window._store_ = store;

export default store;
