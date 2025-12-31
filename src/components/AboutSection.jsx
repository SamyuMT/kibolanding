import React from 'react'
import './AboutSection.css'
import { useLanguage } from '../contexts/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()

  const features = t.about.features.map((f, i) => ({ id: i + 1, ...f }))

  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2 className="section-title">{t.about.title}</h2>
        <p className="section-subtitle">{t.about.subtitle}</p>
      </div>

      <div className="about-content">
        <div className="about-phone">
          <img src="../../assets/aboutSection/imagenMovil.png" alt="KIBO Mobile" className="phone-image" />
        </div>

        <div className="about-features-about">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card card">
              <div className="feature-icon">✓</div>
              <div className="feature-content">
                <h3 className="feature-title-about">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
