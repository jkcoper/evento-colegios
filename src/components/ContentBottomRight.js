import React from "react";
import images2 from '../assets/images/topbarimages.jpg'

function ContentBottomRight(){
    return(
        <div className="detalle">
            <div className="textodetalle">
            <h2 className='titulo1'>Liderazgo a través del SER.</h2>
            Inteligencia de liderazgo es la capacidad y disposición internas para el desarrollo de procesos mentales, que los líderes emplean en su cotidianidad para resolver múltiples situaciones relacionadas con los retos, que les exige alta efectividad en las tareas y alta conectividad en sus relaciones.
            <h2 className="titulo2">Estructura de la Inteligencia de Liderazgo.</h2>
            <ul>
            <li>Inteligencia emocional</li>
            <li>Inteligencia relacional</li>
            <li>Inteligencia moral</li>
            <li>Inteligencia práctica</li>
            <li>Inteligencia adaptativa</li>
            <li>Inteligencia Social</li>
            </ul>
            
            
           {/*  <h2 className='titulo1'>Desarrolle competencias en sus estudiantes.</h2>
            Sea parte de la transformación cultural en función de la cultura del emprendimiento, creando conciencia en sus estudiantes de la importancia del emprendimiento, con desarrollo de competencias ciudadanas, laborales, tecnológicas y para el emprendimiento, desde preescolar hasta último grado de enseñanza escolar.

            <h2 className="titulo2">Trabajando en equipo lo podemos lograr.</h2>
            Trabajar en "EL PROYECTO DE VIDA" de sus estudiantes, para que estos a su vez se conviertan en emprendedores y generadores de riqueza, mejorando la calidad de vida de sus familias y la sociedad.
 */}

            </div>
            <div className="imagenbase">
                <img id='detalleimagen' src={images2} alt="Valorate"/>
            </div>
           
        </div>
    )

}

export default ContentBottomRight;