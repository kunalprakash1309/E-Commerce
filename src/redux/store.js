// store all the states of code

import { createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import { fetchCollectionStart } from './shop/shop.sagas'

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    console.log(process.env.NODE_ENV)
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run( fetchCollectionStart )

export const persistor = persistStore(store);

export default { store, persistor }