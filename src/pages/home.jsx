import React from 'react';
import "./home.css"
import lyric from "../assets/lyrichero.png"
import heroimg from "../assets/heroomkolthoum.png"
import herocarpet from "../assets/carpethero.png"
import tape from "../assets/tape1.png"
import herotext from "../assets/herotext.svg"
import house from "../assets/house.png"
import girl from "../assets/girl.png"
import music1 from "../assets/music01.svg";
import music2 from "../assets/music02.svg";
import music3 from "../assets/music03.svg";
import music4 from "../assets/music04.svg";
import music5 from "../assets/music05.svg";
import music6 from "../assets/music06.svg";
import music7 from "../assets/music07.svg";
import note from "../assets/musicnote.png"
import player from "../assets/music.png"
import TextType from '../components/typewriting';
import note2 from "../assets/note2.png"
import flower from "../assets/flower.png"
import note3 from "../assets/note3.png"
import violin from "../assets/violin.png"
import tape2 from "../assets/tape.png"
import cape from "../assets/cape.png"
import char from "../assets/char.png"
import cup from "../assets/cup.png"
import flower2 from "../assets/flower2.png"
import radio from "../assets/radio.png"
import newspaper from "../assets/news2.png"
import ticket from "../assets/ticket.png"
import booth from "../assets/photobooth.png"
import omkolthoum from "../assets/omkolthom2.png"
import { useState} from "react";
import Caption from '../components/caption';
import Section5 from '../components/section5';
import flower4 from "../assets/flower4.png"
import piano from "../assets/piano.png"
import badge from "../assets/badge.png"
import enta from "../assets/enta.png"
import omkolthoum3 from "../assets/omkolthom3.png"
import Section7 from '../components/section7';
import glass from "../assets/glass.png"
import jewl from "../assets/jewl.png"
import scarf from "../assets/scarf.png"
import ear from "../assets/earing.png"
import line from "../assets/line.svg"
import SmallCap from '../components/smallcap';
import carpet from "../assets/carpet1.png"
import carpet2 from "../assets/carpet2.png"
import logo from "../assets/logo.svg"
import phone from "../assets/phone.svg"

const Home = () => {
const [section2Entered, setSection2Entered] = useState(false);
const [section3Entered, setSection3Entered] = useState(false);
const [section4Entered, setSection4Entered] = useState(false);
const [section6Entered, setSection6Entered] = useState(false);
const [section8Entered, setSection8Entered] = useState(false);
const [startTyping, setStartTyping] = useState(false);
const [startTyping9, setStartTyping9] = useState(false);


    return (
        <>
        <main>
            <div className="herosection">
                <div className="lyrichero">
                    <div className="lyric">
                    <img src={lyric} alt="" />
                    </div>
                    <div className="lyric">
                    <img src={lyric} alt="" />
                    </div>
                    <div className="lyric">
                    <img src={lyric} alt="" />
                    </div>
                </div>

                <img className='herocarpet' src={herocarpet} alt="" />
                <img className='heroimg' src={heroimg} alt="" />

                <img className='herotxt' src={herotext} alt="" />
                <img className='tape' src={tape} alt="" />

                
            </div>

            <div className={`section2 ${section2Entered ? "section2-active" : ""}`} onMouseEnter={() => setSection2Entered(true)}>
                <div className="half1">
                    <img className='house' src={house} alt="" />
                    <img className='girl' src={girl} alt="" />
                     <Caption text={["Born in a small Egyptian village" ,"Learned music from her father" ]} loop={true} style="caption" />
                </div>

                <div className="linecont">
                    <img src={line} className='line' alt="" />
                </div>

                <div className="half2">
                    <div className="music">
                        <img className="music1" src={music1} alt="" />
                        <img className="music2" src={music2} alt="" />
                        <img className="music3" src={music3} alt="" />
                        <img className="music4" src={music4} alt="" />
                        <img className="music5" src={music5} alt="" />
                        <img className="music6" src={music6} alt="" />
                        <img className="music7" src={music7} alt="" />
                    </div>

                    <img  className='player' src={player} alt="" />
                    <img className='note' src={note} alt="" />

                </div>
            </div>
            
            <div className={`section3 ${section3Entered ? "section3-active" : ""}`}
                onMouseEnter={() => setSection3Entered(true)}>
                <div className="bg">
                    <img src={note2} alt="" />
                    <img className='flower' src={flower} alt="" />
                    <img className='note3' src={note3} alt="" />
                    <img className='tape2' src={tape2} alt="" />
                    <img className='violin' src={violin} alt="" />

                </div>

                <div className="character">
                    <img className='cape' src={cape} alt="" />
                    <img className='char' src={char} alt="" />
                    <Caption text={["She disguised herself as a boy " ,"early in her career to perform publicly." ]} loop={true} style="caption2" />
                </div>

            </div>

            <div className={`section4 ${section4Entered ? "section4-active" : ""}`} onMouseEnter={() => {setStartTyping(true);setSection4Entered(true);}}>
                {startTyping && (<Caption text={["Her Radio Era" ]} loop={false} style="caption3" />)}

                 <div className="bgs4">
                    <img className='cup' src={cup} alt="" />
                    <img className='flower2' src={flower2} alt="" />
                    <img className='radio' src={radio} alt="" />
                    <img className='news2' src={newspaper} alt="" />
                    <img className='ticket' src={ticket} alt="" />
                    

                 </div>

                 <div className="omkolthoumhero">
                     <img className='omkolthoum' src={omkolthoum} alt="" />
                     <Caption text={["Every first Thursday of the month," ," the Arab world would stop to listen." ]} loop={true} style="caption4" />  
                </div>

            </div>

            <Section5 />
            
            <Section7 />

            <div className={`section6 ${section6Entered ? "section6-active" : ""}`} onMouseEnter={() => setSection6Entered(true)}>
                <img className='booth' src={booth} alt="" />
                <img src={flower4} className='flower4' alt="" />
                <img src={piano} className='piano' alt="" />
                <img src={badge} className='badge' alt="" />
                <img src={enta} className='enta' alt="" />

            </div>

             <div className={`section8 ${section8Entered ? "section8-active" : ""}`}
     onMouseEnter={() => setSection8Entered(true)}>
                <img src={carpet2} alt="" />
                <div className="omk4cont">
                 <img className='omk4' src={omkolthoum3} alt="" />
                 <img src={glass} alt="" className='glass'/>
                 <img src={ear} alt="" className='ear'/>
                 <img src={scarf} alt="" className='scarf'/>
                 <img src={jewl} alt="" className='jewl'/>
                
                </div>
                <img src={carpet} alt="" />
                 
                <SmallCap style="smallcap1" text="Her Stunning Jewlery" />
                <SmallCap style="smallcap2" text="Her Iconic Hand Scarf" />
                <SmallCap style="smallcap3" text="Her Iconic Sunglasses" />
                <SmallCap style="smallcap4" text="Her Unforgettable Dress" />



            </div>

            <div className={`section9`} onMouseEnter={() => {setStartTyping9(true);}}>
                <div className="quotecont">
                    <div className="quote">
                        {startTyping9 && (

                   <TextType 
                                text="المُحب لو معندوش عزة نفس ميتحبش"
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

                    </div>
                </div>
            </div>

            <footer>
                <img className='logo' src={logo} alt="" />

                <ul className='list'>
                    <li>Home</li>
                    <li>Timeline</li>
                    <li>Radio Era</li>
                    <li>Music that united nations</li>
                    <li>Her Style</li>
                </ul>
            </footer>

        
            
            


        </main>
        <div className="msg2">
                 <img src={phone} alt="" />
            <h5>This can't be viewed on the phone</h5>
            </div>
        
        
        
        </>
     );
}
 
export default Home;