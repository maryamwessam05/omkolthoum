import React from 'react';
import TextType from '../components/typewriting';
import { useState} from "react";
import "./section7.css"
import paper1 from "../assets/Vector.svg"
import paper2 from "../assets/Vector2.svg"
import birds from "../assets/birds.png"
import building from "../assets/building.png"
import mag1 from "../assets/mag01.png";
import mag2 from "../assets/mag02.png";
import mag3 from "../assets/mag03.png";
import mag4 from "../assets/mag04.png";
import mag5 from "../assets/mag05.png";
import mag6 from "../assets/mag06.png";
import mag7 from "../assets/mag07.png";
import mag8 from "../assets/mag08.png";


const Section7 = () => {

    const [section7Entered, setSection7Entered] = useState(false);
    const [startTyping7, setStartTyping7] = useState(false);

    return (  
        <>
         <div className={`section7 ${section7Entered ? "section7-active" : ""}`} onMouseEnter={() => {
            setStartTyping7(true);
            setSection7Entered(true);}}>

                <img src={paper1} alt=""  className='paper1'/>
                <img src={paper2} alt=""  className='paper2'/>
                <img src={birds} alt=""  className='birds'/>
                <img src={building} alt=""  className='building'/>

                {startTyping7 && (
                    <TextType 
                                text="Music That United Millions"
                                typingSpeed={75}
                                pauseDuration={1500}
                                loop={false}
                                showCursor
                                cursorCharacter="_"
                                texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
                                deletingSpeed={50}
                                variableSpeedEnabled={false}
                                variableSpeedMin={60}
                                variableSpeedMax={120}
                                cursorBlinkDuration={0.5}
                        />
                )}

                <div className="magazine">
                    <img src={mag1} alt="mag1" className="mag1" />
                    <img src={mag2} alt="mag2" className="mag2" />
                    <img src={mag3} alt="mag3" className="mag3" />
                    <img src={mag4} alt="mag4" className="mag4" />
                    <img src={mag5} alt="mag5" className="mag5" />
                    <img src={mag6} alt="mag6" className="mag6" />
                    <img src={mag7} alt="mag7" className="mag7" />
                    <img src={mag8} alt="mag8" className="mag8" />
                </div>






                 
            </div>
        
        
        </>
    );
}
 
export default Section7;