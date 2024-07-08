import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" onClick={toggleDropdown} aria-expanded={isDropdownOpen}>
                More
              </a>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Logout</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-chat"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-search"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-list"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
