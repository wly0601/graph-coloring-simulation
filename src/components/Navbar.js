import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return ( 
  <nav className="navbar navbar-expand-lg mb-5 p-3 navbar-dark bg-dark">
  <Link to='/' style={{textDecoration: 'none'}}>
    <a className="navbar-brand mx-5"> Graph Coloring Simulation </a>
  </Link>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to='/detail-laporan-pkl' style={{textDecoration: 'none'}}>
        <a className="nav-item nav-link" > Example </a>
      </Link>
      <a className="nav-item nav-link" href="#"> GitHub Repository </a>
    </div>
  </div>
  </nav>
  )
}

export default Navbar;