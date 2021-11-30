import React, { createContext, useState, useEffect } from 'react';

const CovidStatewise = () => {
    const [data, setDate] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const ActualData = await res.json();
            console.log(ActualData.statewise[0]);
            setDate(ActualData.statewise[0]);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getCovidData();
    })

    return (
        <>
            <div className="bg-dark text-light container-fluid mt-5 pt-3 p-5 text-center">
                <h2 className="live_title">🔴 LIVE</h2>
                <h1 className="main_title">COVID-19 CORONSVIRUS TRACKER</h1>

                <section className="mt-3">
                    <ul className="box">
                        <li className="card" style={{backgroundColor:'rgb(47, 119, 201)'}}>
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span className="small_span">OUR</span> COUNTRY</p>
                                    <p className="card_total card_small">INDIA</p>
                                </div>
                            </div>
                        </li>
                        <li className="card" style={{backgroundColor:'#4caf50'}}>
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span className="small_span">OUR</span> RECOVERED</p>
                                    <p className="card_total card_small">{data.recovered}</p>
                                </div>
                            </div>
                        </li>
                        <li className="card" style={{backgroundColor:'rgb(150 159 46)'}}>
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span className="small_span">OUR</span> CONFIRMED</p>
                                    <p className="card_total card_small">{data.confirmed}</p>
                                </div>
                            </div>
                        </li>
                        <li className="card" style={{backgroundColor:'rgb(239 103 33)'}}>
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span className="small_span">OUR</span> DEATHS</p>
                                    <p className="card_total card_small">{data.deaths}</p>
                                </div>
                            </div>
                        </li>
                        <li className="card" style={{backgroundColor:'#673ab7'}}>
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span className="small_span">OUR</span> ACTIVE</p>
                                    <p className="card_total card_small">{data.active}</p>
                                </div>
                            </div>
                        </li>
                        <li className="card" style={{backgroundColor:'#f71d67'}}>
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><span className="small_span">OUR</span> UPDATED</p>
                                    <p className="card_total card_small">{data.lastupdatedtime}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default CovidStatewise;
