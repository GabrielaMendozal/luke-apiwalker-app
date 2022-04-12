import React from 'react';

const Planets = ({data}) => {

    return(
        <div>
            <h1>Name: {data.name}</h1>            
            <p>Rotatio Period: {data.rotation_period}</p>            
            <p>Orbital Period: {data.orbital_period}</p>            
            <p>Diameter: {data.diameter}</p>
            <p>Climate: {data.climate}</p>            
        </div>
    );
}
export default Planets;