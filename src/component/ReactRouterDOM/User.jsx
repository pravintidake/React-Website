import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(history);
    // console.log(location.pathname);
    return (
        <>
            <div className="pageContent">
                <h1>Hello, {fname} {lname}</h1>
                <h4>My Url Location is: {location.pathname} </h4>
                {location.pathname === `/user/Ashu/Tidake` ?
                    (<button className='btn btn-warning' onClick={() => navigate("/")}> Go To Home </button>) : null
                }
            </div>
        </>
    )
}

export default User;
