import React from "react";
import ContentHV from "./ContentHV";
import image from '../assets/images/perfil3marino.png'

function ContentBottomLeft(){
    return(
        <div className="detailleft">
         <div><img className="foto" src={image} alt="Valorate"/></div>
         <div className="flecha-up"></div>
         <div><ContentHV/></div>

        </div>
        
    )

}

export default ContentBottomLeft;