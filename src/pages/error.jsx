import React from 'react';
import "./error.css"
import back from "../assets/back.svg"
import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <>
        <div className="error">
            <Link to={"/"}>
                <div className="back">
                    <img src={back} alt="" />
                    <h5>Back To Home</h5>
                </div>
            </Link>
            <div className="msg">

            <h1>404</h1>
            <h5>Page not found</h5>
            </div>
        </div>
        
        
        </>
     );
}
 
export default Error;