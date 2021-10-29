import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Testimonial() {
  return (
    
<section className="testimonials" id="Testimonials">
<div className="container">
    <h1>Testimonials</h1>
    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis, explicabo.
    </p>

    <div className="row">
        <div className="col-md-4 text-center wow flipInX">
            <div className="profile">
                <img src="http://dartisa.com/hannan/theme1/images/img1.png" className="users" alt="" />
                <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus saepe rem quia
                    fugiat et perspiciatis consequuntur porro, eos, tempore totam corrupti temporibus vel
                    expedita officia repellat incidunt autem maxime deleniti?</blockquote>

                <h3>Hannan Azam <span>Student</span></h3>
            </div>
        </div>



        <div className="col-md-4 text-center wow flipInX">
            <div className="profile">
                <img src="http://dartisa.com/hannan/theme1/images/img2.png" className="users" alt="" />
                <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus saepe rem quia
                    fugiat et perspiciatis consequuntur porro, eos, tempore totam corrupti temporibus vel
                    expedita officia repellat incidunt autem maxime deleniti?</blockquote>

                <h3>Hannan Azam <span>Student</span></h3>
            </div>
        </div>





        <div className="col-md-4 text-center wow flipInX">
            <div className="profile">
                <img src="http://dartisa.com/hannan/theme1/images/img3.png" className="users" alt="" />
                <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus saepe rem quia
                    fugiat et perspiciatis consequuntur porro, eos, tempore totam corrupti temporibus vel
                    expedita officia repellat incidunt autem maxime deleniti?</blockquote>

                <h3>Hannan Azam <span>Student</span></h3>
            </div>
        </div>
    </div>
</div>
</section>
  );
}

export default Testimonial;
