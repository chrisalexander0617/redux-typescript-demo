import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ReservationState {value:string[]}

const initialState:ReservationState = {
    value:[],
}

export const reservationSlice = createSlice({
    name:'reservations',
    initialState,
    reducers:{
        addReservation:(state, action:PayloadAction<string>) => {
            state.value.push(action.payload)
        }
    }
})

// addReservation will be used in components to update the state
export const { addReservation } = reservationSlice.actions

// slices contain multiple reducer methods associated with its category
// used in store specifically
export default reservationSlice.reducer