import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <>
  {/* Navbar */}
  <nav
    className="navbar navbar-expand-lg navbar-dark "
    style={{ backgroundColor: "#332D2D" }}
  >
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Navbar brand */}
      <a className="navbar-brand" href="#">
      <i class="fas fa-database px-3"></i>
        Data set Publisher
      </a>
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Link */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/nav">
                Home
            </NavLink>
          </li>
          </ul>

         {/* AddData */}
        <ul className="navbar-nav me-left mb-2 mb-lg-0">
        <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/AddDataset"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#E4A11B",
                  marginLeft: "5px",
                }}>
                AddData
              </NavLink>
              </li>
          </ul>

       
        <ul className="navbar-nav d-flex flex-row me-1">

         {/* LOGIN */}
        <li className="nav-item" >
            <NavLink className="nav-link" to="/Sign">
               <button class = "btn btn-primary">LOGIN</button> 
            </NavLink>
          </li>
            
            {/* SigUp */}
           <li className="nav-item">
            <NavLink className="nav-link" to="/SigUp"
                style={{
                  fontSize: "20px",
                  // fontWeight: "bold",
                  // color: "#E4A11B",
                  marginLeft: "5px",
                }} >
              SIGUP
            </NavLink>
          </li>  

            {/* icon */}
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#">
              <i className="fas fa-shopping-cart" />
            </a>
          </li>
          
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
        </ul>
        {/* Search */}
        <form className="w-auto">
        <div class="input-group">
        <input type="search" id=""  class="form-control"  placeholder='Search'/>
        <button type="button" class="btn btn-primary">
        <i class="fas fa-search"></i>
        </button>
       </div>
    </form>
      </div>
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

  )
}

export default Header;