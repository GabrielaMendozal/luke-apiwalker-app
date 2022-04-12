import React from 'react';

const Films = ({data}) => {

    return(
        <div>
            <h1>Film: {data.title}</h1>            
            <p>Director: {data.director}</p>            
            <p>Producer: {data.producer}</p>            
            <p>Released Date: {data.release_date}</p>
            <p>Opening Crawl: {data.opening_crawl}</p>            
        </div>
    );
}
export default Films;