import React from 'react'
import './Footer.css'

export default function Footer() {
  const demoLinks = [
    {
      id: 1,
      title: 'Prueba demo de KIBO aquí',
      image: '/assets/footer/demo.png',
      link: '#'
    },
    {
      id: 2,
      title: 'Visita la documentación de la API',
      image: '/assets/footer/api.png',
      link: '#'
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-links">
        {demoLinks.map((item) => (
          <div key={item.id} className="footer-card">
            <img src={item.image} alt={item.title} className="footer-card-image" />
            <div className="footer-card-content">
              <p className="footer-card-title">{item.title}</p>
              <a href={item.link} className="footer-card-link">
                Navegar
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <nav className="footer-nav">
          <div className="footer-logo">KIBO</div>
          <a href="#inicio" className="footer-nav-item">
            Inicio
          </a>
          <a href="#about" className="footer-nav-item">
            Acerca de
          </a>
          <a href="#features" className="footer-nav-item">
            Características
          </a>
          <a href="#screens" className="footer-nav-item">
            Pantallas
          </a>
        </nav>

        <div className="footer-divider"></div>

        <div className="footer-copyright">
          <span className="copyright-icon">©</span>
          <p className="copyright-text">Copyright 2025. Aventis Cali</p>
        </div>
      </div>
    </footer>
  )
}
