import React from 'react';
import "./smallcap.css"

const SmallCap = (props) => {
    return ( 
        <>
        <div className={props.style}>
            <h2 className='captxt'>
                {props.text}
            </h2>
        </div>
        
        
        </>
     );
}
 
export default SmallCap;