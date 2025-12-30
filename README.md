# KIBO Landing Page - React Implementation

Una landing page moderna y responsiva para KIBO, una aplicación de monitoreo cardíaco con inteligencia artificial.

## 🚀 Características

- ✅ Diseño responsivo (Mobile, Tablet, Desktop)
- ✅ Estructura de componentes React modular
- ✅ CSS por componente y estilos globales
- ✅ Animaciones suaves y transiciones
- ✅ Carrusel interactivo de pantallas
- ✅ Secciones completas:
  - Hero Section
  - About Section
  - Features Section
  - App Screens (Carousel)
  - Video Section
  - Team Section
  - Footer

## 📁 Estructura del Proyecto

```
landingPage/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx
│   │   ├── HeroSection.css
│   │   ├── AboutSection.jsx
│   │   ├── AboutSection.css
│   │   ├── FeatureSection.jsx
│   │   ├── FeatureSection.css
│   │   ├── AppScreenSection.jsx
│   │   ├── AppScreenSection.css
│   │   ├── VideoSection.jsx
│   │   ├── VideoSection.css
│   │   ├── TeamSection.jsx
│   │   ├── TeamSection.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── styles/
│   │   └── global.css
│   ├── constants/
│   │   └── images.js
│   ├── App.jsx
│   └── main.jsx
├── assets/
│   ├── heroSection/
│   ├── aboutSection/
│   ├── featureSection/
│   ├── appScreenSection/
│   ├── teamSection/
│   └── footer/
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## 🛠️ Instalación

### Prerequisitos
- Node.js (v16 o superior)
- npm o yarn

### Pasos

1. **Navega al directorio del proyecto**
```bash
cd landingPage
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador**
```
http://localhost:3000
```

## 🎨 Paleta de Colores

- **Primary**: `#006BFF` - Azul principal
- **Secondary**: `#2D83FA` - Azul secundario
- **Dark**: `#232233` - Negro oscuro
- **Gray**: `#6C6C72` - Gris
- **White**: `#FFFFFF` - Blanco
- **Black**: `#000000` - Negro puro

## 📝 Tipografía

### Familias de Fuentes
- **Títulos**: Josefin Sans (Bold, SemiBold)
- **Cuerpo**: Inter (Regular)
- **Logo**: Poppins

### Tamaños
- **H1**: 48.83px (Bold)
- **H2**: 31.25px (Bold)
- **H3**: 25px (SemiBold)
- **H4**: 20px (SemiBold)
- **Body**: 16px (Regular)

## 🖼️ Rutas de Imágenes

Las imágenes se cargan desde la carpeta `assets/`:

```javascript
// Ejemplo en componentes
<img src="/assets/heroSection/phone.png" alt="KIBO App" />
```

### Estructura de Assets
```
assets/
├── heroSection/
│   ├── background.png
│   ├── phone.png
│   └── vectors/
├── aboutSection/
│   └── phone.png
├── featureSection/
│   ├── background.png
│   ├── phone.png
│   └── videoThumbnail.png
├── appScreenSection/
│   ├── screen1.png
│   ├── screen2.png
│   ├── screen3.png
│   ├── screen4.png
│   └── screen5.png
├── teamSection/
│   ├── karolina.png
│   ├── jereminth.png
│   └── background.png
└── footer/
    ├── demo.png
    └── api.png
```

## 🔧 Scripts Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo con hot reload.

### Build para Producción
```bash
npm run build
```
Crea una versión optimizada para producción en la carpeta `dist`.

### Preview
```bash
npm run preview
```
Visualiza la versión de producción localmente.

## 📱 Responsividad

El proyecto incluye breakpoints para:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ⚙️ Configuración de Vite

El archivo `vite.config.js` está configurado con:
- Plugin de React
- Puerto 3000 por defecto
- Auto-open en navegador

## 🚀 Despliegue

### Para Vercel
```bash
vercel
```

### Para Netlify
```bash
npm run build
# Sube la carpeta dist a Netlify
```

### Para GitHub Pages
```bash
npm run build
# Sube el contenido de dist a gh-pages
```

## 📞 Contacto

Para más información sobre KIBO, contacta a:
- Email: info@aventiscali.com
- Instagram: [@kibo.app](https://instagram.com)
- LinkedIn: [Aventis Cali](https://linkedin.com)

## 📄 Licencia

© 2025 Aventis Cali. Todos los derechos reservados.

---

**Desarrollado por:**
- Karolina Otero - Project Management & UI/UX Design
- Jereminth Muñoz - Full Stack Developer & UI/UX Design
