# iOS Splash Screens

Para una experiencia PWA completa en iOS (standalone), se requieren "Splash Screens" (imágenes de inicio) para cada resolución de dispositivo Apple.

## Resoluciones Requeridas

| Dispositivo       | Resolución (px) | Orientación |
| ----------------- | --------------- | ----------- |
| iPhone SE         | 640 x 1136      | Portrait    |
| iPhone 8/SE 2     | 750 x 1334      | Portrait    |
| iPhone 8 Plus     | 1242 x 2208     | Portrait    |
| iPhone 11/XR      | 828 x 1792      | Portrait    |
| iPhone 12/13/14   | 1170 x 2532     | Portrait    |
| iPhone 14 Pro Max | 1290 x 2796     | Portrait    |
| iPad Air/Pro 9.7" | 1536 x 2048     | Portrait    |
| iPad Pro 10.5"    | 1668 x 2224     | Portrait    |
| iPad Pro 11"      | 1668 x 2388     | Portrait    |
| iPad Pro 12.9"    | 2048 x 2732     | Portrait    |

## Generación Manual (Recomendado)

Usar el archivo `splash-base.svg` y un conversor online o herramienta de diseño para exportar los PNGs con las dimensiones exactas.

## Generación Automática (si ImageMagick está instalado)

```bash
# Ejemplo para iPhone SE
convert splash-base.svg -resize 640x1136^ -gravity center -extent 640x1136 apple-splash-640-1136.png
```

## Configuración en _document.tsx_ o layout.tsx

Agregar links para cada tamaño generado:

```html
<link
  rel="apple-touch-startup-image"
  href="/aprende/splash/apple-splash-640-1136.png"
  media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
/>
<!-- Repetir para cada dispositivo -->
```

> **Nota**: Existen herramientas automatizadas como `pwa-asset-generator` que hacen esto automáticamente.
