import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Principal = () => {
    const [data_nasa, setData] = useState({});

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            setData(res.data)
        })
        .catch(err => {
            alert(err)
        });
    }, [])
    return (
        <div className='container'>
            <h1>{ data_nasa.title }</h1>
            <p>{ data_nasa.date } { data_nasa.explanation }</p>
            <div className='cont-img'>
                <img src={ data_nasa.hdurl } alt={data_nasa.title} />
            </div>
        </div>
    )
}

export default Principal