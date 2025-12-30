import React from 'react'
import './Footer.css'

export default function Footer() {
  const demoLinks = [
    {
      id: 1,
      title: 'Prueba demo de KIBO aquí',
      link: 'https://graph.kibo.aventiscali.com/'
    },
    {
      id: 2,
      title: 'Visita la documentación de la APP móvil',
      image: './assets/footer/api.png',
      link: 'https://github.com/SamyuMT/Kibo'
    },
    { 
      id: 3,
      title: 'Visita el documento de proyecto completo',
      image: './assets/footer/documentos.png',
      link: 'https://drive.google.com/drive/folders/125nJ0zDbnVs4Ib-yTelKQLt_1dH1T4Cz?usp=sharing'
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-links">
        {demoLinks.map((item) => (
          <div key={item.id} className="footer-card">
            {item.image ? (
              <img 
                src={item.image} 
                alt={item.title} 
                className="footer-card-preview"
              />
            ) : (
              <iframe 
                src={item.link} 
                title={item.title}
                className="footer-card-preview"
                loading="lazy"
              />
            )}
            <div className="footer-card-content">
              <p className="footer-card-title">{item.title}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="footer-card-link">
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
