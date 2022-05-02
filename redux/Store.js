import { configureStore, combineReducers, createReducer } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import menuReducer from './features/menu'
import currentUserReducer from './features/currentUser'




const combinedReducers = combineReducers({
    menu: menuReducer,
    currentUser: currentUserReducer,
});

const rootReducer = createReducer(combinedReducers(undefined, { type: "" }), (builder) => {
    builder
        .addCase("__NEXT_REDUX_WRAPPER_HYDRATE__", (state, action) => ({ ...state, ...action.payload }))
        .addDefaultCase(combinedReducers);
});

const initStore = () => {
    const store = configureStore({
        reducer: rootReducer,
    })
    return store
}

export const wrapper = createWrapper(initStore)