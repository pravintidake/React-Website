import React, { useState } from 'react';

const MyAccordian = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="main-div">
                <div className="main_heading">
                    <p className="togglebtn" onClick={() => setShow(!show)}>{show ? "➖" : "➕"}</p>
                    <h3 className="heading">{question}</h3>
                </div>
                {
                    show && <p className="answers">{answer}</p>
                }
            </div>
        </>
    )
}

export default MyAccordian;