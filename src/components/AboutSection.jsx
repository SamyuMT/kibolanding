import React from 'react'
import './AboutSection.css'

export default function AboutSection() {
  const features = [
    {
      id: 1,
      title: 'Fácil uso',
      description: 'La usabilidad de KIBO está pensado para adultos mayores, en donde en pocos pasos podrá iniciar a ser monitorizado su estado cardiaco, junto a la configuración de el contacto de emergencia.'
    },
    {
      id: 2,
      title: 'Alarmas en tiempo real',
      description: 'La integración con google maps tu geolocalización siempre está actualizada, para alertar a emergencia y tus contactos junto a tu ubicación actual.'
    },
    {
      id: 3,
      title: 'Eficiencia de predicción',
      description: 'Nuestro modelo de IA a la medida, permite predicciones cada segundo asegurando monitoreo continuo del usuario.'
    }
  ]

  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2 className="section-title">Sobre la APP</h2>
        <p className="section-subtitle">
          KIBO es una app que integra la inteligencia artificial para predecir arritmias cardiacas mediante el procesamiento de las señales entrantes del corazón recibidas por una conexión bluetooth todo con el fin de evitar la muerte súbita cardiaca
        </p>
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
