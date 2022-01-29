import React from 'react';
import Cards from './Cards';
import Slides from './Slides';

const Inicio = () => {
  
  
  
    return (
      <div>
        <Slides />
      <div className="container">
            <div className='row'>  
                <Cards Nombre="Tintas" Enunciado="Tintas de la mejor calidad"/>
                <Cards Nombre="Barnicez" Enunciado="Barnicez de baja, alta y media viscosidad"/>
                <Cards Nombre="Suministros" Enunciado="Barnicez de baja, alta y media viscosidad"/>
                <Cards Nombre="Colores Especiales" Enunciado="Barnicez de baja, alta y media viscosidad"/>
                <Cards Nombre="Bolsas" Enunciado="Barnicez de baja, alta y media viscosidad"/>
            </div>




      </div>

      </div>
      
  )
};

export default Inicio;
