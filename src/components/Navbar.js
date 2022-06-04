import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return ( 
  <nav className="navbar navbar-expand-lg mb-5 p-3 navbar-dark bg-dark">
  <Link to='/' style={{textDecoration: 'none'}}>
    <img src='./logo192.png' style={{width:'10%'}} alt='header-logo'/>
    <a className="navbar-brand mx-4"> Graph Coloring Simulation </a>
  </Link>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to='/detail-laporan-pkl' style={{textDecoration: 'none'}}>
        <a className="nav-item nav-link" > Example </a>
      </Link>
      <a className="nav-item nav-link" href="https://github.com/wly0601/graph-coloring-simulation" style={{textDecoration: 'none'}}> GitHub Repository </a>
      <a className="nav-item nav-link" href="https://gitlab.com/wly0601/coloring-graph-simulation" style={{textDecoration: 'none'}}> GitLab Repository </a>
    </div>
  </div>
  </nav>
  )
}

export default Navbar;