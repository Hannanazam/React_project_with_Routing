import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark wow fadeInDown">
    <div className="container">
        <a className="navbar-brand" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto text-center">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#Home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Testimonials">Testimonials</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#About">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  );
}

export default Header;
