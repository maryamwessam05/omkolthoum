import React from 'react';
import "./home.css"
import lyric from "../assets/lyrichero.png"
import heroimg from "../assets/heroomkolthoum.png"
import herocarpet from "../assets/carpethero.png"
import tape from "../assets/tape1.png"
import herotext from "../assets/herotext.svg"
import house from "../assets/house.png"
import girl from "../assets/girl.png"

const Home = () => {
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

            <div className="section2">
                <div className="half1">
                    <img className='house' src={house} alt="" />
                    <img className='girl' src={girl} alt="" />

                    <div className="caption">
                        <h3>Born in a small Egyptian village</h3>
                        <h3>Learned music from her father</h3>

                    </div>
                </div>

                <div className="half2">
                    
                </div>
            </div>
        </main>
        
        
        
        </>
     );
}
 
export default Home;