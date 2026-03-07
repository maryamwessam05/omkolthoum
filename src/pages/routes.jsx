import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';
import Error from './error';
import { useEffect , useState} from "react";
import Preloader from './preloader';



const Routess = () => {
     const [loading, setLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => {
            setLoading(false);
            }, 2000);
        }, []);

        if (loading) return <Preloader />;
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
        </Routes>
        </BrowserRouter>
        
        
        </>
     );
}
 
export default Routess;