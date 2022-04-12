import React from 'react';

const People = ({data}) => {

    return(
        <div>
            <h1>Name: {data.name}</h1>            
            <p>Height: {data.height}</p>            
            <p>Mass: {data.mass}</p>            
            <p>Hair Color: {data.hair_color}</p>
            <p>Skin Color: {data.skin_color}</p>
        </div>
    );
}
export default People;