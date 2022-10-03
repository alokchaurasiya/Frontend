import React, { useState } from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const userLogout=()=>{
    if(currentUser){
      sessionStorage.removeItem("user");
      setCurrentUser(null);
      window.location.reload();
    }
  }

  return (
    <div className='position-sticky top-0' style={{zIndex:1}}>
  {/* Navbar */}
  <nav
    className="navbar navbar-expand-lg navbar-dark  "
    style={{ backgroundColor: "#332D2D"}}
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
            <NavLink className="nav-link" to="/browsing">
                Datasets
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
                  fontSize: "19px",
                  color: "white",
                  marginRight: "920px",
                }}>
                AddData
              </NavLink>
              </li>
          </ul>

       
        <ul className="navbar-nav d-flex flex-row me-1">
  
         {/* LOGIN */}
         {!currentUser?
         <li className="nav-item" >
            <NavLink className="nav-link" to="/Sign">
               <button class = "btn btn-primary">LOGIN</button> 
            </NavLink>
          </li>:
          <li>
            <button className='btn btn-danger' onClick={()=>userLogout()}>
              Logout
            </button>
          </li>
          }
            
            {/* SigUp */}
           <li className="nav-item">
            <NavLink className="nav-link" to="/SigUp">
              <button class='btn btn-primary '>REGISTER</button>
            </NavLink>
          </li>  
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Header;