import React, { createContext, useState, useEffect } from 'react';

const CovidTable = () => {
    const [data, setDate] = useState([]);

    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            // console.log(res);
            const ActualData = await res.json();
            // console.log(ActualData.statewise);
            setDate(ActualData.statewise);
        } catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getCovidData();
    })

    return (
        <>
            <div className="container-fluid mt-5 text-center">
                <div className="main-heading">
                    <h1 className="mb-5"><span className="fw-bold">INDIA</span> COVID-19 Dashboard</h1>
                </div>

                <div className="table-responsive table-wrapper-scroll-y table-scroll">
                    <table className="table table-hover table-borderless" style={{ textAlign: "left" }}>
                        <thead className="table-dark text-uppercase">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(1).map((curData, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td className='state'>{curData.state}</td>
                                        <td className='confirmed'>{curData.confirmed}</td>
                                        <td className='recovered'>{curData.recovered}</td>
                                        <td className='deaths'>{curData.deaths}</td>
                                        <td className='Active'>{curData.active}</td>
                                        <td className='lastupdatedtime'>{curData.lastupdatedtime}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CovidTable;
