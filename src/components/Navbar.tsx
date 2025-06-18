import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark bg-opacity-75 backdrop-blur shadow-sm">
      <div className="container" style={{ maxWidth: '1440px' }}>
        <a className="navbar-brand d-flex align-items-center gap-2 text-white" href="/">
          <img src="/logo.png" alt="Logo UberPet" width={40} height={40} />
          <span className="fs-5 fw-bold">UberPet</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="navbarSupportedContent"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-center gap-3">
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#como-funciona"
                onClick={() => setIsOpen(false)}
              >
                Como Funciona
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#faq"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#contato"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-light rounded-pill px-4"
                onClick={() => setIsOpen(false)}
              >
                Entrar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
