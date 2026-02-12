# PWA Icons - Kainos Academy

## ⚠️ Íconos Temporales

Los íconos actuales son SVG placeholder. Se deben reemplazar con diseño profesional.

## Tamaños Requeridos

Para PWA completo, generar en PNG:
- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png (Android)
- icon-384x384.png
- icon-512x512.png (Android)
- apple-touch-icon.png (180x180 para iOS)

## Generación con ImageMagick o herramienta online

### Opción 1: ImageMagick (si está instalado)
```bash
for size in 72 96 128 144 152 192 384 512; do
  convert icon.svg -resize ${size}x${size} icon-${size}x${size}.png
done

# Apple touch icon
convert icon.svg -resize 180x180 apple-touch-icon.png
```

### Opción 2: Herramienta Online
1. Ir a https://realfavicongenerator.net/
2. Subir icon.svg o diseño personalizado
3. Generar todos los tamaños
4. Descargar y reemplazar en esta carpeta

## Diseño Recomendado

- **Letras**: "KA" (Kainos Academy) en blanco bold
- **Fondo**: Gradiente verde institucional (#4a7c59 → #1b3c2e)
- **Borde**: Verde claro (#2e5c4a)
- **Estilo**: Moderno, profesional, limpio
