import React from 'react';

const Starships = ({data}) => {

    return(
        <div>
            <h1>Name: {data.name}</h1>            
            <p>Model: {data.model}</p>            
            <p>Manufacturer: {data.manufacturer}</p>            
            <p>Cost in Credits: {data.cost_in_credits}</p>
            <p>Crew: {data.crew}</p> 
        </div>
    );
}
export default Starships;