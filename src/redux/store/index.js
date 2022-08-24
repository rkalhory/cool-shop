import reducer from '../reducer'
import {configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)















//
//
//
//
//
//
// const persistConfig = {
//     key: 'cart',
//     storage,
// }
//
// const persistedReducer = persistReducer(persistConfig, reducer)
//
// export default () => {
//     const store=configureStore(()=>persistedReducer())
//     // let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

// export default store