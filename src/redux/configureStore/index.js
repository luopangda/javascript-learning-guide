import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import { routerMiddleware} from 'react-router-redux'
import { BrowserRouter} from 'react-router-dom'

const middleware = routerMiddleware(BrowserRouter);
const logger = createLogger({
    level: 'info',
    logger: console,
    collapsed: true
});
const createStoreWithMiddleware = process.env.NODE_ENV === 'production' ? applyMiddleware(
    middleware, thunk
)(createStore) : applyMiddleware(
    middleware, thunk, logger
)(createStore);

const configureStore = (initialState) => {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store
};
export default configureStore
