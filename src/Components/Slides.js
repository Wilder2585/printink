

import React from 'react';

const Slides = () => {
  return (
  <div id="carouselExampleControls" class="carousel slide mb-1" data-bs-ride="carousel">
    <div class="carousel-inner ">
        <div class="carousel-item active" >
            <img src="imagenes/guiapantone.jpg" className='d-block m-auto' style={{width: "1800px", height: "350px"}}></img>
        </div>
        <div class="carousel-item">
         <img src="imagenes/tintas.jpg" className='d-block m-auto' style={{width: "1800px", height: "350px"}}></img>
        </div>
        <div class="carousel-item">
         <img src="imagenes/tintas2.jpg"  className='d-block m-auto' style={{width: "1800px", height: "350px"}}></img>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
)
};

export default Slides;