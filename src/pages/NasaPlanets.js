import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NasaPlanets = () => {
    const [nasa, setNasa] = useState([]);
    useEffect(() => {
        // axios.get(`https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image`)
        axios.get(`https://images-api.nasa.gov/search?q=apollo`)
        .then(res => {
            console.log(res.data.collection.items);
            setNasa(res.data.collection.items);
        })
        .catch(err => {
            console.log("Error api:", err);
        })
    }, []);
    return (
        <div className='container'>
            <h1>Apollo</h1>
            { nasa.map((n, i) => {
                
                return (
                    <div key={i}>
                        <h3>{ n.data[0].title }</h3>
                        <h4>{ n.data[0].date_created }</h4>
                        <p>{ n.data[0].description }</p>
                        <p>{ n.href }</p>
                    </div>
                );
            }) }
        </div>
    );
}

export default NasaPlanets;