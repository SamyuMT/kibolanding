import React from 'react'
import './FeatureSection.css'
import { useLanguage } from '../contexts/LanguageContext'

import iconDashboard from '../../assets/featureSection/surface1.png'
import iconDesign from '../../assets/featureSection/design.png'
import iconAlert from '../../assets/featureSection/chat.png'
import iconMobile from '../../assets/featureSection/cell-phone.png'
import iconPrivacy from '../../assets/featureSection/eye-scanner 2.png'
import kiboPhone from '../../assets/featureSection/movil1.png'

export default function FeatureSection() {
  const { t } = useLanguage()

  const features = t.features.list.map((f, i) => {
    // keep original icons order
    const icons = [iconDashboard, iconDesign, iconAlert, iconMobile, iconPrivacy]
    return { id: i + 1, icon: icons[i], ...f }
  })

  return (
    <section id="features" className="feature-section">
      <div className="feature-header">
        <h2 className="feature-title">{t.features.title}</h2>
        <p className="feature-subtitle">{t.features.subtitle}</p>
      </div>

      <div className="feature-grid">
        {/* Izquierda */}
        <div className="feature-left">
          {features.slice(0, 2).map((feature) => (
            <div key={feature.id} className="feature-item">
              <img src={feature.icon} alt={feature.title} className="feature-item-icon" />
              <h3 className="feature-item-title">{feature.title}</h3>
              <p className="feature-item-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Centro: feature arriba, imagen abajo */}
        <div className="feature-center">
          <div className=" feature-item-center">
            <img src={features[2].icon} alt={features[2].title} className="feature-item-icon" />
            <h3 className="feature-item-title">{features[2].title}</h3>
            <p className="feature-item-description">{features[2].description}</p>
          </div>
          <div className="feature-phone-mockup">
            <img src={kiboPhone} alt="KIBO Phone" className="feature-phone-image" />
          </div>
        </div>

        {/* Derecha */}
        <div className="feature-right">
          {features.slice(3).map((feature) => (
            <div key={feature.id} className="feature-item feature-item-right">
              <img src={feature.icon} alt={feature.title} className="feature-item-icon" />
              <h3 className="feature-item-title">{feature.title}</h3>
              <p className="feature-item-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}