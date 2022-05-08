import React from 'react';

interface ReservationCardTypes {
    name:String;
}

export default function ReservationCard({name}:ReservationCardTypes){
    return <div className="reservation-card-container">{name}</div>
}
  