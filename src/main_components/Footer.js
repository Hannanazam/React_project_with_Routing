import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
 
  return (
<section id="Contact">
    <div className="testimonials">
        <h1>Contact</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis, explicabo.
        </p>
    </div>


    <div className="container1 wow fadeInDown">
        <span className="big-circle"></span>
        <img src="http://dartisa.com/hannan/theme1/images/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>
  
            <div className="info">
              <div className="information">
                <img src="http://dartisa.com/hannan/theme1/images/location1.png" className="icon" alt="" />
                <p>ABC Street H-77/56, HQ 12557</p>
              </div>
              <div className="information">
                <img src="http://dartisa.com/hannan/theme1/images/email1.png" className="icon" alt="" />
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <img src="http://dartisa.com/hannan/theme1/images/phone.png" className="icon" alt="" />
                <p>123-456-789</p>
              </div>
            </div>
  
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                {/* <FontAwesomeIcon icon={"facebook"} /> */}
                  {/* <i className="fab fa-facebook-f"></i> */}
                </a>
                <a href="#">
                {/* <FontAwesomeIcon icon={"twitter"} /> */}
                  {/* <i className="fab fa-twitter"></i> */}
                </a>
                <a href="#">
                {/* <FontAwesomeIcon icon={"instagram"} /> */}
                  {/* <i className="fab fa-instagram"></i> */}
                </a>
                <a href="#">
                {/* <FontAwesomeIcon icon={"linkedin"} /> */}
                  {/* <i className="fab fa-linkedin-in"></i> */}
                </a>
              </div>
            </div>
          </div>
  
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>
  
            <form  method="POST" autoComplete="off">
            
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label>Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label>Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label>Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container">
                <input type="text" name="subject" className="input" />
                <label>Subject</label>
                <span>Subject</span>
              </div>
              <div className="input-container textarea">
                <textarea name="Message" className="input Message"></textarea>
                <label>Message</label>
                <span>Message</span>
              </div>
              <input name="send" type="submit" value="SEND MAIL" className="sendBtn" />
            </form>
          </div>
        </div>
      </div>
  
</section>
  );
}

export default Footer;
