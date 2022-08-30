import React from "react";
import image from '../assets/images/valorate-transp.png';
import {Link} from "react-router-dom";

function TopBar(){
    return(
        <React.Fragment>
            <div className="topbar">
                <div className="brand-icon">
                        <Link to="/"><img src={image} alt="Valorate"/></Link>
                </div>
                <div className="title">
                    <div className="main">
                    Evento Cultura del Emprendimiento en Manizales
                    </div>
                    <div className="date">
                    Fecha: Septiembre 6 del 2022
                    </div>

                </div>

            </div>

            
          
            

        </React.Fragment>
    )

}

export default TopBar;