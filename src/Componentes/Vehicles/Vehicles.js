import React from 'react';

const Vehicles = ({data}) => {

    return(
        <div>
            <h1>Name: {data.name}</h1>            
            <p>Model: {data.model}</p>            
            <p>Manufacturer: {data.manufacturer}</p>            
            <p>Cost in Credits: {data.cost_in_credits}</p>
            <p>Passengers: {data.passengers}</p>
        </div>
    );
}
export default Vehicles;