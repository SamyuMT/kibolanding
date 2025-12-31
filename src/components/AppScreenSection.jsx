import React, { useState } from 'react'
import './AppScreenSection.css'
import { useLanguage } from '../contexts/LanguageContext'

import imgAjustes from '../../assets/appScreenSection/Ajustes.png'
import imgAjustesUser from '../../assets/appScreenSection/AjustesUser.png'
import imgAnalitica from '../../assets/appScreenSection/Analitica.png'
import imgHome01 from '../../assets/appScreenSection/Home-01.png'
import imgNoticias from '../../assets/appScreenSection/Noticias.png'
import imgReportes from '../../assets/appScreenSection/Reportes.png'
import imgUser from '../../assets/appScreenSection/User.png'

export default function AppScreenSection() {
  const { t } = useLanguage()
  const items = [
    
    { src: imgAjustesUser, alt: 'Ajustes Usuario' },
    { src: imgNoticias, alt: 'Noticias' },
    { src: imgReportes, alt: 'Reportes' },
    { src: imgHome01, alt: 'Home' },
    { src: imgAnalitica, alt: 'Analítica' },
    { src: imgAjustes, alt: 'Ajustes' },
    { src: imgUser, alt: 'Perfil' }
  ]

  const [currentIndex, setCurrentIndex] = useState(Math.floor(items.length / 2))

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="screens" className="app-screen-section">
      <h2 className="section-title">{t.appscreen.title}</h2>

      <div className="carousel-container">
        <div className="carousel-wrapper">
          <button className="carousel-btn carousel-btn-left" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="carousel-slides">
            {items.map((item, index) => {
              let className = 'carousel-slide'
              let style = {
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }

              if (index === currentIndex) {
                className += ' active'
                style.zIndex = 10
                style.opacity = 1
              } else {
                const prevIndex = (currentIndex - 1 + items.length) % items.length
                const nextIndex = (currentIndex + 1) % items.length

                if (index === prevIndex) {
                  style.zIndex = 5
                  style.opacity = 0.2
                  style.transform = 'translate(calc(-50% - 300px), -50%)'
                } else if (index === nextIndex) {
                  style.zIndex = 5
                  style.opacity = 0.2
                  style.transform = 'translate(calc(-50% + 300px), -50%)'
                } else {
                  style.opacity = 0
                  style.zIndex = 0
                  style.pointerEvents = 'none'
                }
              }

              return (
                <div key={index} className={className} style={style}>
                  <img src={item.src} alt={item.alt} />
                </div>
              )
            })}
          </div>

          <button className="carousel-btn carousel-btn-right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>

        <div className="carousel-dots">
          {items.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
