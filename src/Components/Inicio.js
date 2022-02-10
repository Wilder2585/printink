import React from 'react';
import Cards from './Cards';
import Slides from './Slides';


const Inicio = () => {
  
  
  
    return (
      <div className="container w-80">
        <Slides />
        
      
            <div className= "row m-auto w-80 " >  
                <Cards Nombre="Tintas" Enunciado="Tintas de la mejor calidad" imagen="imagenes/ink.jpg" linkImagen='/Tintas'/>
                <Cards Nombre="Barniz" Enunciado="Barnices de baja, alta y media viscosidad" imagen="imagenes/barniz.jpg" linkImagen='/Barnices'/>
                <Cards Nombre="Suministros" Enunciado="Barnices de baja, alta y media viscosidad" imagen="imagenes/insumo.jpg" linkImagen='/Suministros'/>
                <Cards Nombre="Colores Especiales" Enunciado="Barnicez de baja, alta y media viscosidad" imagen="imagenes/especiales.jpg" linkImagen='/Especiales'/>
                <Cards Nombre="Bolsas" Enunciado="Barnicez de baja, alta y media viscosidad" imagen="imagenes/bolsas.jpg" linkImagen='/Bolsas'/>
                <Cards Nombre="Bopp" Enunciado="Barnicez de baja, alta y media viscosidad" imagen="imagenes/bopp.jpg" linkImagen='/Bopp'/>
            </div>
     


      </div>
      
  )
};

export default Inicio;
