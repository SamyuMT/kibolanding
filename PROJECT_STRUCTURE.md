# 📊 Estructura y Diagrama del Proyecto KIBO Landing Page

## 🗂️ Árbol de Directorios Completo

```
landingPage/
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📄 HeroSection.jsx
│   │   ├── 🎨 HeroSection.css
│   │   ├── 📄 AboutSection.jsx
│   │   ├── 🎨 AboutSection.css
│   │   ├── 📄 FeatureSection.jsx
│   │   ├── 🎨 FeatureSection.css
│   │   ├── 📄 AppScreenSection.jsx
│   │   ├── 🎨 AppScreenSection.css
│   │   ├── 📄 VideoSection.jsx
│   │   ├── 🎨 VideoSection.css
│   │   ├── 📄 TeamSection.jsx
│   │   ├── 🎨 TeamSection.css
│   │   ├── 📄 Footer.jsx
│   │   └── 🎨 Footer.css
│   │
│   ├── 📁 styles/
│   │   └── 🎨 global.css (Variables CSS, Reset, Utilidades)
│   │
│   ├── 📁 constants/
│   │   └── 📄 images.js (Rutas de imágenes y colores)
│   │
│   ├── 📄 App.jsx (Componente raíz)
│   └── 📄 main.jsx (Punto de entrada)
│
├── 📁 assets/
│   ├── 📁 heroSection/
│   │   ├── 🖼️ background.png
│   │   ├── 🖼️ phone.png
│   │   └── 📁 vectors/
│   │
│   ├── 📁 aboutSection/
│   │   └── 🖼️ phone.png
│   │
│   ├── 📁 featureSection/
│   │   ├── 🖼️ background.png
│   │   ├── 🖼️ phone.png
│   │   └── 🖼️ videoThumbnail.png
│   │
│   ├── 📁 appScreenSection/
│   │   ├── 🖼️ screen1.png
│   │   ├── 🖼️ screen2.png
│   │   ├── 🖼️ screen3.png
│   │   ├── 🖼️ screen4.png
│   │   └── 🖼️ screen5.png
│   │
│   ├── 📁 teamSection/
│   │   ├── 🖼️ karolina.png
│   │   ├── 🖼️ jereminth.png
│   │   └── 🖼️ background.png
│   │
│   └── 📁 footer/
│       ├── 🖼️ demo.png
│       └── 🖼️ api.png
│
├── 📄 index.html (Archivo principal HTML)
├── 📄 vite.config.js (Configuración de Vite)
├── 📄 package.json (Dependencias)
├── 📄 .gitignore (Archivos a ignorar en Git)
├── 📄 README.md (Documentación principal)
├── 📄 GETTING_STARTED.md (Guía de inicio rápido)
└── 📄 CUSTOMIZATION.md (Guía de personalización)
```

## 🔄 Flujo de Componentes

```
┌─────────────────────────────────────┐
│         App.jsx                     │
│  (Componente raíz)                  │
└─────────────────────────────────────┘
              │
       ┌──────┴──────┬──────────┬──────────┬──────────┬──────────┐
       ▼              ▼          ▼          ▼          ▼          ▼
    Hero         About       Features    AppScreen   Video      Team
   Section      Section     Section     Section     Section    Section
       │              │          │          │          │          │
       │              │          │          │          │          │
       ▼              ▼          ▼          ▼          ▼          ▼
   Navbar       Features    Features   Carousel    Player    Team Cards
   + Banner       Cards       List     + Dots    + Overlay    + Social
                                                                 │
                                                                 ▼
                                                              Footer
```

## 🎨 Arquitectura de Estilos

```
global.css (Punto central)
    ├── CSS Reset y normalize
    ├── Variables CSS (:root)
    │   ├── Colores
    │   ├── Tipografía
    │   ├── Espaciado
    │   └── Sombras
    ├── Tipografía global (h1-h5, p)
    ├── Botones
    ├── Cards
    └── Utilidades + Responsive
        ├── @media (max-width: 1024px)
        ├── @media (max-width: 768px)
        └── @media (max-width: 480px)

Componentes CSS (Específicos)
    ├── HeroSection.css
    ├── AboutSection.css
    ├── FeatureSection.css
    ├── AppScreenSection.css
    ├── VideoSection.css
    ├── TeamSection.css
    └── Footer.css
```

## 📱 Responsive Design

```
Desktop (1024px+)
┌─────────────────────────────────────────┐
│ Navbar Completo  |  Grid 2 columnas     │
│ Máximo contenido |  Hero side-by-side   │
│ 2-3 columnas     │  Full features       │
└─────────────────────────────────────────┘

Tablet (768px - 1024px)
┌──────────────────────────────┐
│ Navbar ajustado              │
│ Grid 1-2 columnas            │
│ Contenido apilado            │
│ Fuentes más pequeñas         │
└──────────────────────────────┘

Mobile (< 768px)
┌─────────────────┐
│ Navbar hamburguesa
│ Layout vertical │
│ Imágenes pequeñas
│ Texto responsive │
└─────────────────┘
```

## 🎯 Flujo de Datos

```
constants/images.js
    │
    ├── Rutas de assets
    ├── Colores
    └── Tamaños de fuente
        │
        ▼
   Componentes
    │
    ├── HeroSection
    │   ├── Hero navbar
    │   └── Hero content + phone
    │
    ├── AboutSection
    │   ├── About header
    │   ├── Phone image
    │   └── Features cards
    │
    ├── FeatureSection
    │   ├── Feature header
    │   ├── Center feature
    │   ├── Left features
    │   ├── Phone mockup
    │   └── Right features
    │
    ├── AppScreenSection
    │   ├── Title
    │   ├── Carousel
    │   │   ├── Prev button
    │   │   ├── Slides
    │   │   └── Next button
    │   └── Dots indicator
    │
    ├── VideoSection
    │   ├── Title
    │   └── Video container
    │
    ├── TeamSection
    │   ├── Header
    │   └── Team cards
    │       ├── Image
    │       ├── Info
    │       └── Social links
    │
    └── Footer
        ├── Demo links
        └── Footer bottom
```

## 🎨 Paleta de Colores

```
PRIMARY
┌────────────────────────────────┐
│ #006BFF (Azul Principal)       │
│ Uso: Botones, links, destacado │
└────────────────────────────────┘

SECONDARY
┌────────────────────────────────┐
│ #2D83FA (Azul Secundario)      │
│ Uso: Gradientes, hover         │
└────────────────────────────────┘

NEUTRAL
┌────────────────────────────────┐
│ #FFFFFF - Blanco               │
│ #F5F5F5 - Gris claro           │
│ #6C6C72 - Gris (textos)        │
│ #232233 - Oscuro               │
│ #000000 - Negro                │
└────────────────────────────────┘
```

## 📐 Spacing y Sizing

```
Espaciado estándar (Basado en 8px)
├── xs:   4px
├── sm:   8px
├── md:  16px
├── lg:  24px
├── xl:  32px
├── 2xl: 40px
├── 3xl: 60px
├── 4xl: 80px
└── 5xl: 100px

Border Radius
└── Predeterminado: 20px (--border-radius)

Sombras
├── Light:   0px 1px 10px rgba(0,0,0,0.1)
└── Medium: 0px 10px 100px rgba(0,0,0,0.24)
```

## 🔤 Tipografía

```
Josefin Sans
├── Bold (700)    - H1, H2, Titles
├── SemiBold (600) - H3, H4, Subtitles
└── Medium (500)  - Logo

Inter
├── Regular (400) - Body text

Poppins
└── Medium (500)  - Logo alternative

Tamaños
├── H1: 48.83px
├── H2: 31.25px
├── H3: 25px
├── H4: 20px
├── H5: 18px
└── Body: 16px
```

## 🔌 Dependencias

```
package.json
├── react@18.2.0
├── react-dom@18.2.0
└── DevDependencies:
    ├── @vitejs/plugin-react@4.2.1
    └── vite@5.0.8
```

## 🚀 Scripts npm

```
npm run dev       → Inicia servidor de desarrollo (port 3000)
npm run build     → Compila para producción
npm run preview   → Vista previa de producción
```

## 📦 Estructura de Componentes

### Template Pattern
Cada componente sigue este patrón:

```
ComponenteName.jsx
├── imports
├── data/props (si aplica)
├── función component
│   ├── estado (useState si es necesario)
│   ├── handlers (onClick, onChange, etc.)
│   ├── JSX
│   └── className references
└── export default

ComponenteName.css
├── Comentario header
├── Estilos base
├── Media queries
└── Responsive variants
```

---

**Última actualización**: 2025  
**Versión**: 1.0.0  
**Estado**: ✅ Completado
