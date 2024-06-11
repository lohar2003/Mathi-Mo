import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Mathi Mo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active"  to="/math">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to="/footer">Footer</Link>
        </li>
      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/Footer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tutorials
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exercises
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servises
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link  " aria-current="page" href="/"><i className='fa fa-facebook'></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " aria-current="page" href="/"><i className='fa fa-instagram'></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " aria-current="page" href="/"><i className='fa fa-youtube'></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " aria-current="page" href="/"><i className="fa fa-whatsapp"></i></a>
        </li>
     
      
      </ul>
    </div>
  </div>
</nav>
<div className="scrollmenu scrollable-content">
  <a href="/">Home</a>
  <a href="/">Mathematics</a>
  <a href="/">Number Theory in Mathematics</a>
  <a href="/">Algebra</a>
  <a href="/">Trigonometry </a>
  <a href="/">Statistics</a>
  <a href="/">Probability</a>
  <a href="/">Geometry</a>
  <a href="/">Mensuration</a>
  <a href="/">Calculus</a>
  <a href="/">Logarithm</a>
  <a href="/">Math Formulas</a>
  <a href="/">Integration Formulas</a>
  <a href="/">Differentiation Formulas</a>
  <a href="/">Statistics Formulas</a>
  <a href="/">Basic Geometry Formulas</a>
  <a href="/">Sequences and Series Formulas</a>
  <a href="/">Coordinate Geometry Formulas</a>
  <a href="/">Trigonometry Table</a>
  <a href="/">CBSE Class 8 Maths Formulas</a>
  <a href="/">CBSE Class 9 Maths Formulas</a>
  <a href="/">CBSE Class 10 Maths Formulas</a>
  <a href="/">CBSE Class 11 Maths Formulas</a>
  <a href="/">CBSE Class 12 Maths Formulas</a>
  <a href="/">Home</a>
  <a href="/">News</a>
  <a href="/">Home</a>
  <a href="/">News</a>
  <a href="/">Home</a>
  <a href="/">News</a>
  <a href="/">Home</a>
  <a href="/">News</a>
  <a href="/">Home</a>
  <a href="/">News</a>
  <a href="/">Home</a>
  <a href="/">News</a>
  <a href="/">Home</a>
  <a href="/">News</a>

</div>

    </div>
  )
}
