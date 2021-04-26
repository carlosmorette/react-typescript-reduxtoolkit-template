import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer, { InitialState as UserState } from './manager/user/userSlice'

export interface RootState {
    user: UserState
}

const rootReducer = combineReducers({
    user: userReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store