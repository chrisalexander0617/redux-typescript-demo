import { configureStore } from '@reduxjs/toolkit'
import reservationsReducer from '../feautres/reservationSlice'

export const store = configureStore({
    // Reducers takes the current state value and accepts a "payload" of instructions
    // like how a waiter will pass in a note to the kitchen to have the chefs make whats on the paper (payload)

    //There can be many reducers, but commonly they will be separated into multiple categories
    // This acts as the master file that holds all the reducers inside the app
    reducer:{
        reservations:reservationsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

// This includes thunk middleware types since default Dispatch does not know about them
export type AppDispatch = typeof store.dispatch
