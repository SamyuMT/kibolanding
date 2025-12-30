/* ==================== VARIABLES CSS PERSONALIZABLES ==================== */

/*
  Este archivo documenta todas las variables CSS disponibles para personalizar
  el diseño de la landing page de KIBO. Puedes modificarlas directamente en
  src/styles/global.css o en :root
*/

/* COLOR VARIABLES */
--primary-color: #006BFF;           /* Color principal (azul) */
--secondary-color: #2D83FA;         /* Color secundario */
--dark-color: #232233;              /* Color oscuro principal */
--white-color: #FFFFFF;             /* Blanco */
--gray-color: #6C6C72;              /* Gris para textos */
--black-color: #000000;             /* Negro puro */
--light-gray: #F5F5F5;              /* Gris claro */

/* DESIGN TOKENS */
--border-radius: 20px;              /* Radio de bordes predeterminado */
--transition-speed: 0.3s;           /* Velocidad de transiciones */

/* SHADOWS */
--shadow-light: 0px 1px 10px rgba(0, 0, 0, 0.1);
--shadow-medium: 0px 10px 100px rgba(0, 0, 0, 0.24);

/* ==================== EJEMPLO DE PERSONALIZACIÓN ==================== */

/*
  Para cambiar todos los colores primarios a un nuevo color, por ejemplo morado:

  :root {
    --primary-color: #7C3AED;
    --secondary-color: #9F7AEA;
  }

  Para hacer la landing page más oscura:

  :root {
    --dark-color: #1A1A1A;
    --white-color: #F0F0F0;
    --gray-color: #888888;
  }

  Para cambiar el radio de bordes globalmente:

  :root {
    --border-radius: 10px;
  }

  Para hacer transiciones más lentas:

  :root {
    --transition-speed: 0.6s;
  }
*/

/* ==================== VARIABLES DE TIPOGRAFÍA ==================== */

/* 
  Las familias de fuentes se definen en los selectores h1-h5 y p
  en src/styles/global.css

  Para cambiar la familia de fuentes globalmente, modifica:
  - font-family: 'Josefin Sans', sans-serif;
  a tu fuente preferida en cada selector.

  Fuentes recomendadas compatibles:
  - Poppins (para headers)
  - Montserrat (para headers)
  - Raleway (para body)
  - Source Sans Pro (para body)
*/

/* ==================== MEDIA QUERIES ==================== */

/*
  Los breakpoints actuales son:
  - Desktop: 1024px+
  - Tablet: 768px - 1024px
  - Mobile: < 768px
  - Small Mobile: < 480px

  Para agregar un nuevo breakpoint personalizado, usa:

  @media (max-width: 1200px) {
    /* estilos para pantallas grandes */
  }

  @media (max-width: 900px) {
    /* estilos para pantallas medianas */
  }
*/
