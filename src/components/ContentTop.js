import React from "react";
import ReactPlayer from 'react-player';
import video from '../assets/videos/Evento-docentes.mp4';


function ContentTop(){
    return(
        <React.Fragment>
            <div className="contenttop">
            <div className="videoclip">
                <div className="video1">
                <ReactPlayer 
                    url={video}
                    playing={true}
                    controls
                    loop 
                    height='100%'
                    width='100%'
                     />   

                </div>
                     
           
            </div>
            
        </div>
       
        </React.Fragment>
        
    )

}

export default ContentTop;