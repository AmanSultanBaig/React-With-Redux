import { createStore } from 'redux'
import teamReducer from '../reducers/reducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, teamReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
