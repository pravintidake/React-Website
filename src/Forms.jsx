import React, { useState } from "react";

const Forms = () => {
    // const [firstName, setName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [myFirstName, setFullName] =  useState();
    // const [myLastName, setLastFullName] =  useState();
    // const inputEventTwo = (event) => {
    //     setLastName(event.target.value);
    // }

    // For Handling multiple Input form states
    const [myData, setData] = useState( {
        fname : '',
        lname : '',
        email : '',
        mobile : '',
        address : ''
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        // setName(event.target.value);

        // const value = event.target.value;
        // const name = event.target.name;

        // Array Distruction
        const {value, name} = event.target;

        setData((preValue)=>{
            // console.log(preValue);

            //Reducing The code using Spread Operator (...)
            return { ...preValue, [name] : value };
            
            //Code for Accessing the input values and stored in the specific name filed as per the condition
            // if(name === 'fName') {
            //     return {
            //         fname : value,
            //         lname : preValue.lname,
            //         email : preValue.email,
            //         mobile: preValue.mobile
            //     }
            // } else if(name === 'lName') {
            //     return {
            //         fname : preValue.fname,
            //         lname : value,
            //         email : preValue.email,
            //         mobile: preValue.mobile
            //     }
            // } else if(name === 'eMail') {
            //     return {
            //         fname : preValue.fname,
            //         lname : preValue.lname,
            //         email : value,
            //         mobile: preValue.mobile
            //     }
            // } else if(name === 'mobile') {
            //     return {
            //         fname : preValue.fname,
            //         lname : preValue.lname,
            //         email : preValue.email,
            //         mobile: value
            //     }
            // }
        })

    }

    const onSubmit = (event) => {
        event.preventDefault();
        // setFullName(fullName);
        alert('Form Submitted...');
    }
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <h1>Hello {myData.fname} {myData.lname}</h1>
                <p style = {{textAlign : 'center', margin : '2px'}}>{myData.email}</p>
                <p style = {{textAlign : 'center', margin : '2px'}}>{myData.mobile}</p>
                <p style = {{textAlign : 'center', margin : '2px'}}>{myData.address}</p>
                <input type="text" placeholder="Enter Your First Name..." name="fname" value={myData.fname} onChange={inputEvent} />
                <input type="text" placeholder="Enter Your Last Name..." name="lname" value={myData.lname} onChange={inputEvent} />
                <input type="text" placeholder="Enter Your Email..." name="email" value={myData.email} autoComplete = 'off' onChange={inputEvent} />
                <input type="number" placeholder="Enter Your Mobile..." name="mobile" value={myData.mobile} autoComplete = "off" onChange={inputEvent} />
                <input type="text" placeholder="Enter Your Address..." name="address" value={myData.address} onChange={inputEvent} />
                <button type='submit' className="btn">Click Me</button>
            </form>
        </>
    )

}

export default Forms;