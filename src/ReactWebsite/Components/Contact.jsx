import React, { useState } from "react";
import { Navigate } from "react-router";

const Contact = (props) => {
    const [data, setData] = useState({
        fullName: '',
        phone: '',
        email: '',
        msg: '',
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${data.fullName}, Phone Number: ${data.phone}, Email: ${data.email} and Message: ${data.msg}`);
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                    name="fullname" value={ data.fullname } onChange={inputEvent} placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1"
                                    name="phone" value={ data.phone } onChange={inputEvent} placeholder="Enter Mobile Number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                    name="email" value={ data.email } onChange={inputEvent} placeholder="Enter Your Email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                    name="msg" value={ data.msg } onChange={inputEvent} rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
