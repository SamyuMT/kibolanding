# Diseño - Reglas del Sistema

Este documento recoge tokens y reglas para implementar componentes consistentes (colores, tipografía, sombras y componentes clave).

## Tokens principales
- Color principal: `--color-primary: #006BFF` (KIBO blue)
- Blanco: `--color-white: #FFFFFF`
- Texto principal: `--color-text: rgba(255,255,255,0.92)`
- Fondo oscuro/transparente: `--color-bg-weak: rgba(0,107,255,0.08)`

## Sombras
- Drop shadow principal: `0 1px 10px rgba(0,0,0,0.1)` — usar para mockups y elevación de tarjetas.

## Esquinas y elevación
- Border radius general de componentes: `--radius-lg: 26px`.
- Elevación 3D: combinar `transform: translateY(-6px) scale(1.02)` con la sombra principal.

## Tipografía (base)
- Family: `Josefin Sans, sans-serif` (usar la misma que el proyecto)
- Title large: 42px
- Headline / component title: 25px (en componentes compactos bajar a 14–18px según breakpoint)
- Body: 14–18px

## Spacing
- Espaciado base: 8px
- Escala: 8, 12, 16, 20, 24, 32, 40, 64

## Componente: Carrusel Widget (reglas)
- Layout: slot central activo + dos slides laterales parcialmente visibles con opacidad reducida.
- Lateral: aplicar `opacity: 0.45` y `transform: scale(0.86) translateX(...) rotateY(-8deg)` para efecto 3D.
- Centro: `transform: translateY(-8px) scale(1.02)` + `box-shadow: 0 14px 40px rgba(0,0,0,0.18)` para sensación elevada.
- Transiciones suaves: `transition: transform 450ms cubic-bezier(.2,.9,.3,1), opacity 300ms ease`.
- Controles: flechas circulares con fondo `--color-primary`, sombra leve y hover con `box-shadow` más fuerte.
- Accesibilidad: foco visible, `aria-hidden` en slides no activos y `aria-roledescription="carousel"` con `aria-live="polite"` si autoplay.

## Assets
- Guardar imágenes en `assets/...` y exportar desde `src/constants/images.js` si se reutilizan.

## Notas de integración
- Evitar Tailwind a menos que el proyecto lo requiera — usar CSS por componente.
- Mantener el componente desacoplado, aceptar `items` como prop y permitir `renderItem` para personalización.

---
Archivo: `DESIGN_SYSTEM.md`
