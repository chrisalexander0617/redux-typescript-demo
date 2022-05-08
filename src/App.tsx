import "./App.css";
import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./feautres/reservationSlice"
function App() {
  const mounted = useRef(false)

  // extracts the data from the Redux store state in store.tsx
  const reservations = useSelector((state: RootState) => state.reservations.value)
  const [inputValue, setInputValue] = useState("")

  // necessary to prevent syntax error
  const dispatch = useDispatch()

  const handleAddReservations = () => {
    if(!inputValue) return;
    dispatch(addReservation(inputValue))
    setInputValue("")
  }

  useEffect(():any => {
    mounted.current = true
    return () => mounted.current = false
  })

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map(reservation => {
                return <ReservationCard name={reservation} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
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