import React from 'react';
import "./caption.css"
import TextType from '../components/typewriting';


const Caption = (props) => {
    return ( 
        <>
        <div className={props.style}>
                        <TextType 
                            text={props.text}
                            typingSpeed={75}
                            pauseDuration={1500}
                            loop={props.loop}
                            showCursor
                            cursorCharacter="_"
                            texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
                            deletingSpeed={50}
                            variableSpeedEnabled={false}
                            variableSpeedMin={60}
                            variableSpeedMax={120}
                            cursorBlinkDuration={0.5}
                        
                        />

                    </div>
        
        </>
     );
}
 
export default Caption;