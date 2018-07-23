import { createStore, combineReducers, applyMiddleware } from 'redux';

import { dogReducer } from './modules/Dog/reducer';

const reducers = combineReducers({
    dogState: dogReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
