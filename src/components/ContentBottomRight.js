import React from "react";
import images2 from '../assets/images/topbarimages.jpg'

function ContentBottomRight(){
    return(
        <div className="detalle">
            <div className="textodetalle">
            <h2 className='titulo1'>Desarrolle competencias en sus estudiantes.</h2>
            Sea parte de la transformación cultural en función de la cultura del emprendimiento, creando conciencia en sus estudiantes de la importancia del emprendimiento, con desarrollo de competencias ciudadanas, laborales, tecnológicas y para el emprendimiento, desde preescolar hasta último grado de enseñanza escolar.

            <h2 className="titulo2">Trabajando en equipo lo podemos lograr.</h2>
            Trabajar en "EL PROYECTO DE VIDA" de sus estudiantes, para que estos a su vez se conviertan en emprendedores y generadores de riqueza, mejorando la calidad de vida de sus familias y la sociedad.


            </div>
            <div className="imagenbase">
                <img id='detalleimagen' src={images2} alt="Valorate"/>
            </div>
           
        </div>
    )

}

export default ContentBottomRight;