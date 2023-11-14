import React from "react";

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid d-flex">
          <a className="navbar-brand text-light" href="#">Landing Page Practice</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">Contact</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav> 
    )
}

export default NavBar
