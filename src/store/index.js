import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    composeWithDevTools
} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import rootReducers from './reducers'


const middleware = [thunk];

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)));