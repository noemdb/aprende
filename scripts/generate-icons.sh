#!/bin/bash

# Script para generar íconos PWA para Kainos Academy
# Este script crea íconos temporales SVG que deben ser reemplazados con diseño profesional

ICON_DIR="public/icons"
mkdir -p "$ICON_DIR"

# Crear ícono SVG base
cat > "$ICON_DIR/icon.svg" << 'EOF'
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#4a7c59;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1b3c2e;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background circle -->
  <circle cx="256" cy="256" r="240" fill="url(#bgGradient)" stroke="#2e5c4a" stroke-width="8" filter="url(#glow)"/>
  
  <!-- Text "KA" -->
  <text x="256" y="320" font-family="Arial, sans-serif" font-size="200" font-weight="bold" 
        fill="white" text-anchor="middle">KA</text>
</svg>
EOF

echo "✅ Ícono SVG base creado en $ICON_DIR/icon.svg"

# Crear placeholder README
cat > "$ICON_DIR/README.md" << 'EOF'
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
EOF

echo "✅ README creado en $ICON_DIR/README.md"
echo ""
echo "📝 SIGUIENTE PASO:"
echo "   Generar íconos PNG desde icon.svg usando ImageMagick o herramienta online"
echo "   Ver instrucciones en $ICON_DIR/README.md"
