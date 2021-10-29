import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Slider() {
  return (
   
<div id="carouselExampleIndicators" className="carousel slide carousel-fade" id="Home" data-bs-ride="carousel">
    <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="http://dartisa.com/hannan/theme1/images/image1.jpg" className="d-block w-100 h-60" alt="..." />
            <div className="carousel-caption-1 d-none d-md-block wow fadeInLeft">
              <h5 className="firstslide">First slide label</h5>
              <p>Some representative placeholder content for the first slide.Some representative placeholder.</p>
              <button className="btn btn-warning">Primary</button>
         </div>
        </div>
        <div className="carousel-item">
            <img src="http://dartisa.com/hannan/theme1/images/image2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption-2 d-none d-md-block wow fadeInUp">
               <h5>Second slide label</h5>
               <p>Some representative placeholder content for the first slide.Some representative placeholder.</p>
               <button className="btn btn-warning">Primary</button>
  </div>
        </div>
        <div className="carousel-item">
            <img src="http://dartisa.com/hannan/theme1/images/image3.jpg" className="d-block w-100" alt="..." />
             <div className="carousel-caption-3 d-none d-md-block wow fadeInRight">
               <h5>Third slide label</h5>
              <p>Some representative placeholder content for the first slide.Some representative placeholder.</p>
              <button className="btn btn-warning">Primary</button>
  </div>
        </div>
    </div>
    <div className="forcarouselback"></div>

    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </a>
</div>


  );
}

export default Slider;
