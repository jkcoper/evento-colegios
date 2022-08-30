import React from "react";
import ContentBottom from "./ContentBottom";
import ContentTop from "./ContentTop";
import {Link, Routes, Route} from 'react-router-dom';
import FormularioPage from "./FormularioPage";
import NotFound from "./NotFound";

function Content(){
    return(
        <div className="prueba">
            <div  className="registro">
            <ContentTop/>
        <Link to="/form"><button className='bottom1'>Regístrate Aquí</button></Link>

            </div>
        
        <Routes>
            <Route path="/" element={<ContentBottom/>} />
            <Route path="form" element={<FormularioPage/>} />
            <Route element={NotFound} />
        </Routes>
        
        </div>
        
    )


}

export default Content;