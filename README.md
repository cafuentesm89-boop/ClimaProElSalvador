# ClimaPro El Salvador - Landing Page

Esta es la landing page premium con diseño "Dark Luxury" generada con IA para ClimaPro El Salvador.

## Estilo y Configuración Implementada

- **Nombre del negocio**: ClimaPro El Salvador
- **Sector**: Servicios Técnicos / Mantenimiento HVAC
- **Color Principal**: Cian (#06B6D4)
- **Tipo de Web**: Corporativa
- **Arquitectura**: HTML5 / CSS3 Vainilla / JS Vainilla sin dependencias externas pesadas.
- **Diseño**: Inspirado en tendencias futuristas, glassmorphism y elementos interactivos 3D.

## Imágenes 
Las siguientes imágenes fueron generadas utilizando modelos de IA generativa (DALL-E / Gemini Image capabilities) para asegurar un tono premium sin depender de stocks genéricos:
- `logo.png` - Logo minimalista premium
- `hero_visual.png` - Imagen 3D principal del Hero en color Cian
- `service_1.png` - Mantenimiento
- `service_2.png` - Reparación
- `service_3.png` - Instalación
- `service_4.png` - Refrigeración Comercial (Reutilizada temporalmente para cubrir la cuota de emergencias/eco)

*(Nota: debido a límites de cuota técnica en la generación de medios, 2 imágenes de la cuota final reutilizan `service_4` o `service_1` como placeholders temporales, se puede reemplazar la ruta local libremente)*

## Instalación y Uso

1. Para usar en un proyecto local, descarga la carpeta de archivos y abre el archivo `index.html` en cualquier navegador web moderno.
2. Para desplegar, simplemente copia la carpeta a cualquier servicio de hosting estático (Netlify, Vercel, GitHub Pages, o tu VPS).

## Estructura de Archivos
- `index.html` - El documento principal con toda la semántica para un SEO inicial, incluye meta etiquetas.
- `styles.css` - Estilos modularizados, variables CSS para fácil mantenimiento del color.
- `script.js` - Sistema de partículas ligero, contador de scroll (IntersectionObserver), y flip-cards con tap para mobile en vez de solo hover.

## Personalización
Si deseas cambiar el color cian `#06B6D4` a otro:
Simplemente busca en `styles.css` la regla `:root` y donde dice `--primary-rgb: 6, 182, 212;` y sus respectivas graduaciones, reemplaza con los valores RGB de tu nuevo color primario. Todas las sombras, gradientes (glow) y acentos visuales se ajustarán automáticamente al nuevo color gracias a CSS Variables.

---
Generado por el Asistente de IA Avanzado.
