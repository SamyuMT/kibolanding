# ⚡ QUICK START - Comienza en 5 minutos

## 🚀 5 Pasos para Ejecutar tu Landing Page

### Paso 1: Abre la Terminal
```bash
cd d:\TrabajoPersonal\Portafolio\Kibo\landingPage
```

### Paso 2: Instala Dependencias
```bash
npm install
```
⏱️ Espera ~2 minutos

### Paso 3: Inicia el Servidor
```bash
npm run dev
```

### Paso 4: Abre en tu Navegador
```
http://localhost:3000
```

### Paso 5: ¡Empieza a Editar!
```javascript
// Edita src/components/HeroSection.jsx
// Edita src/styles/global.css
// Edita src/components/*/ComponentName.css
```

---

## 📂 Agregando Imágenes

**1. Copia tus imágenes a:**
```
landingPage/assets/
├── heroSection/
├── aboutSection/
├── featureSection/
├── appScreenSection/
├── teamSection/
└── footer/
```

**2. Actualiza las rutas en los componentes:**
```javascript
<img src="/assets/heroSection/phone.png" alt="Phone" />
```

---

## 🎨 Cambios Rápidos

### Cambiar Color Principal
`src/styles/global.css` (línea 1)
```css
:root {
  --primary-color: #006BFF;  /* Cambia aquí */
}
```

### Cambiar Textos
`src/components/HeroSection.jsx`
```javascript
<h2 className="hero-title">TU NUEVO TÍTULO</h2>
```

### Cambiar Sección Completa
Edita el componente correspondiente:
- `AboutSection.jsx`
- `FeatureSection.jsx`
- `TeamSection.jsx`
- `Footer.jsx`

---

## 🔧 Comandos Importantes

| Comando | Función |
|---------|---------|
| `npm run dev` | Inicia desarrollo (con hot reload) |
| `npm run build` | Compila para producción |
| `npm run preview` | Visualiza build local |
| `npm install` | Instala dependencias |

---

## 📱 Estructura Básica de un Componente

```javascript
// src/components/MiComponente.jsx
import React, { useState } from 'react'
import './MiComponente.css'

export default function MiComponente() {
  const [state, setState] = useState(false)

  return (
    <section className="mi-componente">
      <h2>Mi Componente</h2>
      <button onClick={() => setState(!state)}>
        Hacer algo
      </button>
    </section>
  )
}
```

---

## 🎯 Checklist Inicial

- [ ] `npm install` ejecutado
- [ ] `npm run dev` corriendo
- [ ] Navegador abierto en http://localhost:3000
- [ ] Imágenes copiadas a `/assets/`
- [ ] Puedo ver la landing page
- [ ] Puedo editar y ver cambios en tiempo real

---

## 💾 Para Guardar tu Trabajo

```bash
# Crear repositorio git
git init

# Agregar todos los archivos
git add .

# Crear primer commit
git commit -m "Initial commit: KIBO landing page"

# Agregar repositorio remoto (opcional)
git remote add origin https://tu-repo.git
git push -u origin main
```

---

## 🌐 Desplegar (¡Una línea!)

### A Vercel
```bash
npm install -g vercel
vercel
```

### A Netlify
1. Ejecuta: `npm run build`
2. Sube la carpeta `dist/` a Netlify

### A GitHub Pages
```bash
npm run build
# Sube la carpeta dist/ a gh-pages
```

---

## ❓ Preguntas Frecuentes

**P: ¿Cómo cambio los colores?**  
R: Edita `:root` en `src/styles/global.css`

**P: ¿Cómo agrego una nueva sección?**  
R: Crea un archivo en `src/components/` e impórtalo en `App.jsx`

**P: ¿Cómo cambio las fuentes?**  
R: Modifica `font-family` en `global.css`

**P: ¿Las imágenes no cumplen ruta?**  
R: Verifica: `/assets/carpeta/imagen.png`

---

## 📖 Documentación

- 📘 `README.md` - Guía completa
- 🚀 `GETTING_STARTED.md` - Inicio paso a paso
- 📐 `PROJECT_STRUCTURE.md` - Estructura detallada
- 🎨 `CUSTOMIZATION.md` - Temas y personalización
- 💡 `EXAMPLES.md` - Ejemplos avanzados

---

## 🎉 ¡Listo!

Tu landing page está lista para usar. ¡Feliz desarrollo! 🚀

---

**Tiempo estimado**: ⏱️ 5 minutos  
**Dificultad**: 🟢 Muy Fácil  
**Soporte**: 📖 Documentación completa incluida
