import React, { useState } from 'react';
import { questions } from './api';
import MyAccordian from './MyAccordian';
import './accordian.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Accordian = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <section className="accordianDiv">
                <h1 className="heading">React Interview Questions</h1>
                {data.map((curElem) => { 
                    const {id} = curElem;
                    return <MyAccordian key={id} {...curElem} /> 
                })}
            </section>
        </>
    )
}

export default Accordian;