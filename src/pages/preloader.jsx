import React from 'react';
import "./preloader.css"
import preloader from "../assets/preloader.png"


const Preloader = () => {
    return ( 
        <>
        <div className="preloader">
            <img src={preloader} alt="" />
            <h3>Loading...</h3>
        </div>
        
        </>
     );
}
 
export default Preloader;