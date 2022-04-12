import React from 'react';

const Species = ({data}) => {

    return(
        <div>
            <h1>Name: {data.name}</h1>            
            <p>Classification: {data.classification}</p>            
            <p>Designation: {data.designation}</p>            
            <p>Average Height: {data.average_height}</p>
            <p>Skin Colors: {data.skin_colors}</p> 
        </div>
    );
}
export default Species;