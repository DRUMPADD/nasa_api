import React, { useEffect, useState } from 'react';

const Comets = () => {
    const [comet, setComet] = useState({});

    useEffect(() => {
        getCometsInfo()
    }, []);
    
    async function getCometsInfo () {
        const res = await fetch(`https://ssd-api.jpl.nasa.gov/cad.api`);
        let data = await res.json();
        console.log(data.data);
        console.log(data.fields);
        setComet(data)
    }

    return (
        <div className='container'>
            <h1>Data for all asteroids and comets</h1>
            <div className='scroll'>
                <table>
                    <thead>
                        <tr>
                        { comet.fields.map((c, i) => (
                            <th key={i}>{c}</th>
                        )) }
                        </tr>
                    </thead>
                    <tbody>
                        { comet.data.map((c, i) => (
                            <tr key={i}>
                                {c.map((d) => (
                                    <td>{d}</td>
                                ))}
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Comets;