import React, { useEffect, useState } from 'react'


const Missions = () => {
    const [mission, setMission] = useState([]);
    const [missionT, setMissionT] = useState([]);

    useEffect(() => {
        getMission()
    }, []);

    const getMission = async () => {
        const resp = await fetch(`https://ssd-api.jpl.nasa.gov/mdesign.api?des=2015%20AB`)
        const dataMission = await resp.json();
        console.log(dataMission);
        setMission(dataMission.selectedMissions)
        setMissionT(dataMission.fields)
    }

    return (
        <div className='container'>
            <h1>Missions</h1>
            <div className='scroll'>
                <table>
                    <thead>
                        <tr>
                            { missionT.map((m, i) => (
                                <th key={i}>{m}</th>
                            )) }
                        </tr>
                    </thead>
                    <tbody>
                        { mission.map((m, i) => (
                            <tr key={i}>
                                {m.map((dt) => (
                                    <td>{dt}</td>
                                ))}
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Missions