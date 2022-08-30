import React from "react";

function FormularioPage(props){
    const { 
        iframeSource = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfzMinA4ts68Tq6l2mZ8L86SPkRTiDjRsCIzeENIh8K11XQ-Q/viewform?embedded=true" width="100%" height="1250" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>'
        } = props;
    return(
        <div className="form" dangerouslySetInnerHTML={{__html: iframeSource}}></div>        
    )


}

export default FormularioPage;