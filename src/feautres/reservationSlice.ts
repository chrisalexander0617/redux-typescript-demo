import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { db } from '../firebase-config'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { fetchDocsData } from './functions/firebase'

interface ReservationState {value:string[]}

const reservationDatabase = collection(db, "reservations")

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