import React from 'react'
import './Footer.css'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const demoLinks = [
    {
      id: 1,
      title: t.footer.demoLinks[0],
      link: 'https://graph.kibo.aventiscali.com/'
    },
    {
      id: 2,
      title: t.footer.demoLinks[1],
      image: './assets/footer/api.png',
      link: 'https://github.com/SamyuMT/Kibo'
    },
    { 
      id: 3,
      title: t.footer.demoLinks[2],
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
                {t.footer.browse}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <nav className="footer-nav">
          <div className="footer-logo">KIBO</div>
          <a href="#inicio" className="footer-nav-item">
            {t.footer.nav.home}
          </a>
          <a href="#about" className="footer-nav-item">
            {t.footer.nav.about}
          </a>
          <a href="#features" className="footer-nav-item">
            {t.footer.nav.features}
          </a>
          <a href="#screens" className="footer-nav-item">
            {t.footer.nav.screens}
          </a>
        </nav>

        <div className="footer-divider"></div>

        <div className="footer-copyright">
          <span className="copyright-icon">©</span>
          <p className="copyright-text">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
