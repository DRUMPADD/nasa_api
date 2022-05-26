import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../static/css/epic.css';
const Epic = () => {
    // const [epic, setEpic] = useState([]);
    const [image, setImage] = useState([]);
    useEffect(() => {
        // axios.get(`https://api.nasa.gov/EPIC/api/natural/all?api_key=${process.env.REACT_APP_API_KEY}`)
        // .then(res => {
        //     setEpic(res.data);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
        
        axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            setImage(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <div className='container'>
                <h1>EPIC</h1>
                <div className='epic'>
                { image.map((el, i) => {
                    return(
                        <div className='card-epic' key={ i }>
                            <p>ID: { el.identifier }</p>
                            <p>Date: { el.date }</p>
                            <p>Caption: { el.caption }</p>
                            <p>Centro coordinates: lat:{ el.centroid_coordinates.lat } lon:{ el.centroid_coordinates.lon }</p>
                            <p>Lunar position: <br/> <spam>X: { el.lunar_j2000_position.x }</spam> <spam>Y: { el.lunar_j2000_position.y }</spam> <spam>Z: { el.sun_j2000_position.z }</spam></p>
                            <p>Sun position: <br/><spam>X: { el.sun_j2000_position.x }</spam> <spam>Y: { el.sun_j2000_position.y }</spam> <spam>Z: { el.sun_j2000_position.z }</spam></p>
                        </div>
                    );
                }) }
                </div>
            </div>
        </div>
    )
}

export default Epic