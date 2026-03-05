# � Portfolio 3D - CV Interactivo tipo Libro

## Gabriel Zavarse - Ingeniero de Software Full Stack

Un portfolio único e interactivo que simula un libro físico abriéndose, con efecto 3D realista. Construido con Next.js 14, Framer Motion, y Tailwind CSS.

## ✨ Características Principales

- **Efecto de Libro 3D Realista**: Libro que se abre con animación inicial, mostrando 2 páginas simultáneamente
- **Vista Spread**: Páginas izquierda y derecha visibles al mismo tiempo, como un libro real
- **Lomo del Libro**: Centro visible con textura y etiqueta profesional
- **Animación de Apertura**: El libro comienza cerrado y se abre suavemente al cargar
- **Perspectiva 3D**: Vista en ángulo con profundidad y sombras realistas
- **Textura de Papel**: Grano realista y efecto de papel en cada página
- **Sistema de Navegación**:
  - ⌨️ Navegación por teclado (flechas izquierda/derecha)
  - 👆 Gestos touch/swipe en móvil y tablet
  - 🖱️ Click en botones de navegación
  - 🏷️ Sistema de pestañas laterales con saltos directos
- **Responsive**: Escala automáticamente manteniendo proporciones
- **Carga Dinámica**: Contenido cargado desde JSON para fácil actualización
- **14 Páginas Completas**:
  0. Página en blanco (contraportada interior)
  1. Portada
  2. Introducción/Sobre Mí
  3-7. Experiencia Profesional (5 trabajos destacados)
  8. Educación y Certificaciones
  9. Habilidades Técnicas completas
  10-11. Proyectos Destacados (5 proyectos principales)
  12. Contacto
  13. Contraportada

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3001](http://localhost:3001) para ver el libro interactivo.

### Producción

```bash
npm run build
npm start
```

## 📝 Personalización

### 1. Actualiza tus Datos

Edita el archivo `data/cv-data.json` con tu información personal:

```json
{
  "personal": {
    "nombre": "Tu Nombre",
    "titulo": "Tu Puesto",
    "email": "tu@email.com",
    ...
  },
  "experiencia": [...],
  "educacion": [...],
  "habilidades": {...},
  "proyectos": [...]
}
```

### 2. Añade Hotspots

Los hotspots son puntos interactivos que revelan información adicional. Añádelos en tu JSON:

```json
"hotspots": [
  {
    "id": "hs1",
    "titulo": "Arquitectura Microservicios",
    "descripcion": "Detalles técnicos...",
    "icono": "box",
    "posicion": { "x": 20, "y": 30 }
  }
]
```

### 3. Personaliza Colores y Temas

Edita `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
colors: {
  // Tus colores personalizados
}
```

### 4. Ajusta Pestañas

Modifica `components/TabSystem.tsx` para cambiar pestañas, colores e iconos:

```typescript
const tabs = [
  { id: 'inicio', label: 'Inicio', icon: Home, page: 0, color: 'bg-red-600' },
  // Añade más pestañas...
];
```

## 🛠️ Stack Tecnológico

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety
- **Framer Motion** - Animaciones fluidas y efecto 3D
- **Tailwind CSS** - Estilos utilitarios
- **Zustand** - Gestión de estado global
- **Lucide React** - Iconos modernos
- **React Swipeable** - Gestos táctiles

## 📦 Estructura del Proyecto

```
CV/
├── app/
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página principal con Magazine3D
│   └── globals.css          # Estilos globales y utilidades 3D
├── components/
│   ├── Magazine3D.tsx       # Componente principal 3D
│   ├── MagazinePage.tsx     # Template de página editorial
│   ├── TabSystem.tsx        # Sistema de pestañas lateral
│   ├── Hotspot.tsx          # Puntos interactivos
│   ├── HotspotModal.tsx     # Modal de detalles
│   ├── NavigationControls.tsx  # Controles de navegación
│   ├── CVPages.tsx          # Páginas del CV (1-5)
│   └── CVPagesExtended.tsx  # Páginas del CV (6-10)
├── store/
│   └── magazineStore.ts     # Estado global con Zustand
├── data/
│   └── cv-data.json         # Tu información en JSON
└── public/                  # Recursos estáticos
```

## 🌐 Deployment en Vercel

1. **Push a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Conecta con Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio
   - Vercel detectará Next.js automáticamente
   - Click en "Deploy"

O usa Vercel CLI:
```bash
npm i -g vercel
vercel
```

## ⌨️ Controles

- **← →** Flechas del teclado para navegar entre páginas
- **👆 Swipe** Desliza izquierda/derecha en móvil
- **🖱️ Click** En botones de navegación laterales
- **🏷️ Pestañas** Click en pestañas de colores para saltar a secciones
- **✨ Hotspots** Click en puntos brillantes para ver detalles

## 🎨 Características Avanzadas

### Efecto 3D Físico
- Rotación en eje Y con profundidad real
- Sombras ambientales dinámicas
- Backface culling para realismo
- Animaciones suaves con easing personalizado

### Sistema de Hotspots
- Animación de pulso continua
- Tooltips informativos en hover
- Modals con información detallada
- Carga dinámica de iconos

### Responsive Design
- Escala automática con `transform: scale()`
- Layout adaptativo de columnas
- Touch gestures optimizados
- Navegación simplificada en móvil

## 📄 Licencia

Libre para uso personal en tu portfolio.

## 🤝 Contribuciones

¡Siéntete libre de hacer fork y personalizar!

---

**Creado con ❤️ usando Next.js, Three.js y Framer Motion**
