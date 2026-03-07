import React from 'react';
import "./section5.css"
import carpet1 from "../assets/carpet2.png"
import carpet2 from "../assets/carpet1.png"
import flower3 from "../assets/flower3.png"
import player2 from "../assets/paperplayer.png"
import player4 from "../assets/player.png"
import vinyl from "../assets/vinyl.png"
import rag3oony from "../assets/rag3oony.mp3";
import { useState , useRef} from "react";

const Section5 = () => {

      const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // restart
    }
    setIsPlaying(!isPlaying);
  };



    return ( 
        <>
         <div className="section5">
      <img src={carpet1} alt="" />
      
      <div className="playercont">
        <img 
          src={vinyl} 
          alt="" 
          className={`vinyl ${isPlaying ? "vinyl-active" : ""}`} 
        />
        <img 
          src={player4} 
          alt="" 
          className={`player4 ${isPlaying ? "player4-active" : ""}`} 
        />
        <h3 className='click' onClick={handleClick}>
          {isPlaying ? "Pause" : "Click to Play"}
        </h3>
      </div>

      <img 
        className={`carpet2 ${isPlaying ? "carpet2-active" : ""}`} 
        src={carpet2} 
        alt="" 
      />
      <img 
        className={`player2 ${isPlaying ? "player2-active" : ""}`} 
        src={player2} 
        alt="" 
      />
      <img 
        className={`flower3 ${isPlaying ? "flower3-active" : ""}`} 
        src={flower3} 
        alt="" 
      />

      <h2 className='lyrics' style={{ display: isPlaying ? "block" : "none" }}>
        رجعوني عينيك لأيامي اللي راحوا
        علموني أندم على الماضي وجراحهاللي شفته قبل ما تشوفك عينيا
        عمر ضايع يحسبوه إزاي عليّا
      </h2>

      <audio ref={audioRef} src={rag3oony} />
    </div>
        
        </>
     );
}
 
export default Section5;