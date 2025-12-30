import React, { useState } from 'react'
import './HeroSection.css'
import pythonImg from '../../assets/heroSection/python.png'
import flaskImg from '../../assets/heroSection/flask.png'
import flutterImg from '../../assets/heroSection/flutter.png'
import rectanguloHero from '../../assets/heroSection/rectangulo-hero.png'

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <section className="hero-section">
      <div className="hero-navbar">
        <div className="hero-logo">
          <h1 className="logo-text">KIBO</h1>
        </div>
        <nav className="hero-nav-items">
          <a href="#inicio" className="nav-item active">INICIO</a>
          <a href="#about" className="nav-item">ACERCA DE</a>
          <a href="#features" className="nav-item">CARACTERÍSTICAS</a>
          <a href="#screens" className="nav-item">PANTALLAS</a>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio" className="mobile-nav-item" onClick={closeMenu}>INICIO</a>
        <a href="#about" className="mobile-nav-item" onClick={closeMenu}>ACERCA DE</a>
        <a href="#features" className="mobile-nav-item" onClick={closeMenu}>CARACTERÍSTICAS</a>
        <a href="#screens" className="mobile-nav-item" onClick={closeMenu}>PANTALLAS</a>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <img className="hero-rectangle" src={rectanguloHero} alt="" aria-hidden="true" />
          <div className="hero-text-box">
            <h2 className="hero-title">KIBO una app para salvar vidas</h2>
            <p className="hero-description">
              KIBO nace como una herramienta monitorización cardíaca que puede reconocer y clasificar varios tipos de arritmias de manera eficiente y alertar de forma anticipada un posible cuadro de muerte subita cardiaca mediante el uso de inteligencia artificial como base tecnológica.
            </p>
            <div className="hero-stack">
              <div className="tech-badge">
                <img src={pythonImg} alt="Python logo" style={{ height: '56px', width: 'auto' }} />
                <span>Python</span>
              </div>
              <div className="tech-badge">
                <img src={flaskImg} alt="Flask logo" style={{ height: '56px', width: 'auto' }} />
                <span>Flask</span>
              </div>
              <div className="tech-badge">
                <img src={flutterImg} alt="Flutter logo" style={{ height: '56px', width: 'auto' }} />
                <span>Flutter</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-phone">
          <div className="phone-mockup">
            <img src="../../assets/heroSection/hero.png" alt="KIBO App Phone" />
          </div>
        </div>
      </div>
    </section>
  )
}
