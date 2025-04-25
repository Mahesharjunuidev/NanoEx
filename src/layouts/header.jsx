import React from 'react';
import Data from '../data/content';

export default function Header() {
  const logo = Data.Navbar.applogo;

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand text-start" href="#">
          <img src={logo} className="w-75" alt="App Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {Data.Navbar.menu.map((menuItem) => (
              <li className="nav-item" key={menuItem.name}>
                <a
                  className={`nav-link ${menuItem.active ? 'active' : ''}`}
                  aria-current={menuItem.active ? 'page' : undefined}
                  href={menuItem.url}
                >
                  {menuItem.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </nav>
  );
}
