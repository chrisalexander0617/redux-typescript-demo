import "./App.css";
import React, { useEffect, useCallback, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./feautres/reservationSlice"
import { db } from '../src/firebase-config'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { fetchDocsData } from '../src/feautres/functions/firebase'
import { SetStateAction } from "react";

interface ReservationTypeSchema { 
  id:string, 
  name:string
}

const reservationDatabase = collection(db, "reservations")

function App() {
  const mounted = useRef(false)
  // extracts the data from the Redux store state in store.tsx
  //const reservations = useSelector((state: RootState) => state.reservations.value)

  const [reservationValues, setReservationvalues] = useState<ReservationTypeSchema[]>([])
  const [inputValue, setInputValue] = useState("")
  
  // necessary to prevent syntax error

  /* 
  const dispatch = useDispatch()
  const handleAddReservations = () => {
    if(!inputValue) return;
    dispatch(addReservation(inputValue))
    setInputValue("")
  } */ const handleAddReservations = () => {} // erase

  const setStateFromDocsApiCall = useCallback( async () => {
    const reservationData = await getDocs(reservationDatabase)
    const mappedData = reservationData.docs.map(doc => ({...doc.data(), id:doc.id }))
    
    console.log(typeof mappedData)
    console.log('mappedData!!!!!', mappedData)
    setReservationvalues(() => mappedData as any)
  },[]) 

  useEffect(():any => {
    mounted.current = true
    return () => mounted.current = false
  })

  useEffect(():any => {
    if(mounted.current){
      setStateFromDocsApiCall()
    }
  },[setStateFromDocsApiCall]);

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservationValues?.map(reservation => {
                return <ReservationCard name={reservation.name}  />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>{inputValue}</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;