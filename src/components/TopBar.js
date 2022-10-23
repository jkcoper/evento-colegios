import React from "react";
import image from '../assets/images/valorate-transp.png';
/* import logo1 from '../assets/images/LOGO_UMANIZALES_50.png';
import logo2 from '../assets/images/logo_unidad_y_proyeccion-14.png'; */
import logo1 from '../assets/images/LogoTolima.png';
import {Link} from "react-router-dom";

function TopBar(){
    return(
        <React.Fragment>
            <div className="topbar">
                <div className="brand-icon">
                        <Link to="/"><img id="valorate" src={image} alt="Valorate"/></Link>
                </div>
                <div className="title">
                    <div className="main">
                    Conferencia: Inteligencia de Liderazgo
                    </div>
                    {/* <div className="apoya">
                    Con el apoyo de la Universidad de Manizales y su Unidad de Emprendimiento
                    </div> */}
                    <div className="apoya">
                    Con el apoyo del Grupo Empresarial del Tolima
                    </div>
                    <div className="date">
                    Fecha: Octubre 26 del 2022 - Hora: 7:00 am
                    </div>
                    <div className="direccion">
                    Lugar: Auditorio Escobar y Arias Centro empresarial Av Mirolindo Cr 48 s # 106-44 vía picaleña km 4</div>

                </div>
                {/* <div className="logo-umanizales">
                    <div className="logo1">
                    <img id ="logo1" src={logo1} alt="UManizales"/>
                    </div>
                    <div className="logo2">
                    <img id ="logo2" src={logo2} alt="UEManizales"/>
                    </div>

                </div> */}
                <div className="logo-umanizales">
                    <div className="logo1">
                    <img id ="logo1" src={logo1} alt="GET"/>
                    </div>
                </div>

            </div>

            
          
            

        </React.Fragment>
    )

}

export default TopBar;