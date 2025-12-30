# 💡 Ejemplos de Uso y Extensiones

Este documento incluye ejemplos prácticos de cómo utilizar y extender los componentes.

## 📋 Tabla de Contenidos

1. [Modificar Contenido](#modificar-contenido)
2. [Personalizar Estilos](#personalizar-estilos)
3. [Agregar Componentes](#agregar-componentes)
4. [Integrar APIs](#integrar-apis)
5. [Formularios](#formularios)

---

## 🔄 Modificar Contenido

### Cambiar Textos del Navbar

**Archivo**: `src/components/HeroSection.jsx`

```javascript
<nav className="hero-nav-items">
  <a href="#inicio" className="nav-item active">MIS SERVICIOS</a>
  <a href="#about" className="nav-item">PORTAFOLIO</a>
  <a href="#features" className="nav-item">TESTIMONIOS</a>
  <a href="#screens" className="nav-item">CONTACTO</a>
</nav>
```

### Cambiar Tecnologías del Hero

```javascript
const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' }
]

{technologies.map((tech) => (
  <div key={tech.name} className="tech-badge">
    <span>{tech.icon} {tech.name}</span>
  </div>
))}
```

### Agregar Más Features al About

**Archivo**: `src/components/AboutSection.jsx`

```javascript
const features = [
  // ... existentes ...
  {
    id: 4,
    title: 'Nueva Característica',
    description: 'Descripción de la nueva característica...'
  },
  {
    id: 5,
    title: 'Otra Característica',
    description: 'Descripción de otra característica...'
  }
]
```

---

## 🎨 Personalizar Estilos

### Cambiar Colores Globales

**Archivo**: `src/styles/global.css`

```css
:root {
  /* Cambiar a tema morado */
  --primary-color: #8B5CF6;      /* Morado */
  --secondary-color: #A78BFA;    /* Morado claro */
  --dark-color: #1F2937;         /* Gris oscuro */
  --gray-color: #6B7280;         /* Gris */
  --white-color: #FFFFFF;
}
```

### Cambiar Tipografía Global

```css
h1 {
  font-family: 'Montserrat', sans-serif;  /* Cambiar fuente */
  font-size: 56px;                         /* Aumentar tamaño */
  letter-spacing: 1px;                     /* Espaciado entre letras */
}
```

### Modificar Espaciado

```css
.hero-section {
  padding: 100px 150px;  /* Aumentar padding */
  gap: 200px;            /* Aumentar gap */
}
```

### Personalizar Sombras

```css
:root {
  --shadow-light: 0px 2px 8px rgba(0, 0, 0, 0.15);
  --shadow-medium: 0px 20px 25px rgba(0, 0, 0, 0.30);
}
```

### Cambiar Border Radius

```css
:root {
  --border-radius: 10px;  /* Bordes más cuadrados */
  /* o */
  --border-radius: 30px;  /* Bordes más redondeados */
}
```

---

## ➕ Agregar Componentes

### Crear Nuevo Componente

1. **Crear archivo del componente**

```javascript
// src/components/TestimonialsSection.jsx

import React from 'react'
import './TestimonialsSection.css'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      author: 'Juan Pérez',
      text: 'Excelente servicio, muy recomendado',
      rating: 5
    },
    {
      id: 2,
      author: 'María García',
      text: 'Profesionales y puntuales',
      rating: 5
    }
  ]

  return (
    <section className="testimonials-section">
      <h2 className="section-title">Testimonios</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">- {testimonial.author}</p>
            <div className="testimonial-rating">
              {'⭐'.repeat(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

2. **Crear archivo de estilos**

```css
/* src/components/TestimonialsSection.css */

.testimonials-section {
  padding: 60px 40px;
  background-color: var(--light-gray);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto 0;
}

.testimonial-card {
  background: var(--white-color);
  padding: 20px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
}

.testimonial-text {
  margin-bottom: 10px;
  font-style: italic;
}

.testimonial-author {
  font-weight: bold;
  margin-bottom: 10px;
}

.testimonial-rating {
  font-size: 20px;
}
```

3. **Agregar al App.jsx**

```javascript
import TestimonialsSection from './components/TestimonialsSection'

function App() {
  return (
    <div className="app">
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />  {/* Nuevo */}
      <FeatureSection />
      {/* ... resto de componentes ... */}
    </div>
  )
}
```

---

## 🔌 Integrar APIs

### Obtener Datos de una API

```javascript
// src/components/TeamSection.jsx

import React, { useState, useEffect } from 'react'

export default function TeamSection() {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch('https://api.ejemplo.com/team')
        if (!response.ok) throw new Error('Error al cargar el equipo')
        const data = await response.json()
        setTeam(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTeam()
  }, [])

  if (loading) return <div>Cargando...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <section className="team-section">
      <div className="team-grid">
        {team.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

## 📝 Formularios

### Agregar un Formulario de Contacto

```javascript
// src/components/ContactSection.jsx

import React, { useState } from 'react'
import './ContactSection.css'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('https://tu-api.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Error al enviar:', error)
    }
  }

  return (
    <section className="contact-section">
      <h2>Contactanos</h2>

      {submitted && <p className="success-message">¡Mensaje enviado!</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </section>
  )
}
```

### Estilos para el Formulario

```css
/* src/components/ContactSection.css */

.contact-section {
  padding: 60px 40px;
  max-width: 600px;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 16px;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 3px rgba(0, 107, 255, 0.1);
}

.success-message {
  background-color: #10B981;
  color: white;
  padding: 15px;
  border-radius: var(--border-radius);
  margin-bottom: 20px;
}
```

---

## 🎯 Casos de Uso Avanzados

### Cambiar Tema Dinámicamente

```javascript
// src/hooks/useTheme.js

import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.style.setProperty(
        '--dark-color',
        '#FFFFFF'
      )
      document.documentElement.style.setProperty(
        '--white-color',
        '#1F2937'
      )
    } else {
      document.documentElement.style.setProperty(
        '--dark-color',
        '#232233'
      )
      document.documentElement.style.setProperty(
        '--white-color',
        '#FFFFFF'
      )
    }
  }, [isDark])

  return [isDark, setIsDark]
}
```

### Usar en Componente

```javascript
import { useTheme } from './hooks/useTheme'

export default function App() {
  const [isDark, setIsDark] = useTheme()

  return (
    <div>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? '☀️ Claro' : '🌙 Oscuro'}
      </button>
      {/* ... resto */}
    </div>
  )
}
```

---

## 🔒 Mejores Prácticas

1. **Mantener componentes pequeños y reutilizables**
2. **Usar variables CSS para consistencia**
3. **Documentar componentes personalizados**
4. **Probar en diferentes resoluciones**
5. **Validar formularios en frontend y backend**
6. **Optimizar imágenes antes de subir**
7. **Usar lazy loading para imágenes**

---

**Última actualización**: 2025
