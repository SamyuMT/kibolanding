import React, { useState } from 'react'
import './HeroSection.css'
import pythonImg from '../../assets/heroSection/python.png'
import flaskImg from '../../assets/heroSection/flask.png'
import flutterImg from '../../assets/heroSection/flutter.png'
import rectanguloHero from '../../assets/heroSection/rectangulo-hero.png'
import { useLanguage } from '../contexts/LanguageContext'
import appPhone from '../../assets/heroSection/hero.png'

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, toggleLanguage, t } = useLanguage()

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
          <a href="#inicio" className="nav-item active">{t.nav.home}</a>
          <a href="#about" className="nav-item">{t.nav.about}</a>
          <a href="#features" className="nav-item">{t.nav.features}</a>
          <a href="#screens" className="nav-item">{t.nav.screens}</a>
          <div className="lang-toggle" role="tablist" aria-label="Language selector">
            <button
              type="button"
              className={`lang-option ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-option ${lang === 'es' ? 'active' : ''}`}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
          </div>
        </nav>
        <div className="navbar-right">
          <div className="mobile-lang-toggle">
            <button
              type="button"
              className={`mobile-lang-option ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={`mobile-lang-option ${lang === 'es' ? 'active' : ''}`}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
          </div>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio" className="mobile-nav-item" onClick={closeMenu}>{t.nav.home}</a>
        <a href="#about" className="mobile-nav-item" onClick={closeMenu}>{t.nav.about}</a>
        <a href="#features" className="mobile-nav-item" onClick={closeMenu}>{t.nav.features}</a>
        <a href="#screens" className="mobile-nav-item" onClick={closeMenu}>{t.nav.screens}</a>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <img className="hero-rectangle" src={rectanguloHero} alt="" aria-hidden="true" />
          <div className="hero-text-box">
            <h2 className="hero-title">{t.hero.title}</h2>
            <p className="hero-description">{t.hero.description}</p>
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
            <img src={appPhone} alt="KIBO App Phone" />
          </div>
        </div>
      </div>
    </section>
  )
}
