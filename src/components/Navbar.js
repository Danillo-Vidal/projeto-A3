import React, { useState, useEffect, useRef } from 'react';
import './style/Navbar.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu quando clicar fora
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" ref={navbarRef}>
      <div className="container d-flex align-items-center justify-content-between">
        <a className="navbar-brand" href="#">
          <img src="/img/logo_home_public.png" alt="Logo" width="200" height="200" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu} // Alterna o menu
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">SOBRE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CALCULADORA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">INTEGRANTES</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
