# Portfolio 3D Interactivo - CV tipo Revista

## Gabriel Zavarse - Ingeniero de Software Full Stack

Project type: Next.js 14+ with TypeScript, Framer Motion, Tailwind CSS
Deployment target: Vercel
Status: ✅ COMPLETO Y PERSONALIZADO CON DATOS REALES

## 🎯 Arquitectura del Proyecto

Este es un portfolio interactivo con efecto de revista 3D que incluye:
- **Magazine3D**: Componente principal con efecto de volteo físico de páginas
- **TabSystem**: Sistema de pestañas laterales tipo carpeta de oficina
- **Hotspots**: Puntos interactivos que revelan información detallada
- **MagazinePage**: Template con layout editorial (columnas, tipografía grande)
- **NavigationControls**: Controles de teclado, touch y click
- **CVPages**: 14 páginas de contenido cargadas desde JSON

## 📦 Stack Tecnológico

- Next.js 14 (App Router)
- TypeScript
- Framer Motion (animaciones 3D)
- Tailwind CSS
- Zustand (state management)
- Lucide React (iconos)
- React Swipeable (gestos touch)

## 🗂️ Estructura de Archivos

```
app/
├── layout.tsx              # Layout principal sin header/footer
├── page.tsx                # Magazine3D + navegación
└── globals.css             # Utilidades 3D y editoriales

components/
├── Magazine3D.tsx          # Efecto de volteo 3D
├── MagazinePage.tsx        # Template de página editorial
├── TabSystem.tsx           # Pestañas laterales con iconos
├── Hotspot.tsx             # Puntos interactivos animados
├── HotspotModal.tsx        # Modal de detalles
├── NavigationControls.tsx  # Keyboard + touch controls
├── CVPages.tsx             # Páginas 1-9 (Cover, Intro, 5 Experiencias, Educación)
└── CVPagesExtended.tsx     # Páginas 10-14 (Skills, 2 Proyectos, Contacto, BackCover)

store/
└── magazineStore.ts        # Estado global (Zustand)

data/
└── cv-data.json            # Datos del CV
```

## ✅ Estado Actual

✅ Proyecto Next.js scaffolded
✅ Dependencias instaladas (Framer Motion, Zustand, etc.)
✅ Magazine3D con efecto de volteo implementado 
✅ Sistema de pestañas laterales funcional
✅ Hotspots interactivos con modals
✅ 14 páginas de contenido con layout editorial
✅ Controles de teclado (← →) y touch/swipe
✅ JSON con datos del CV cargado
✅ Experiencias: Fenix Group, Sean LeCreatif, AlphaDev, 4Geeks Academy, Wiring Technologies
✅ Habilidades: Frontend, Backend, Databases, DevOps, Infraestructura
✅ Proyectos: ATHENEA, Kzair Services, CFNmx, Barbería Imperial, MoneyTracker
✅ Responsive con escala automática
✅ README completo actualizado
✅ Servidor de desarrollo corriendo en http://localhost:3001

## 🚀 Próximos Pasos

1. **Personalizar imágenes**: Añadir fotos de proyectos en `/public/projects/`
2. **Ajustar colores**: Modificar `tailwind.config.ts` si deseas cambiar colores
3. **Añadir más hotspots**: Editar `data/cv-data.json` para agregar puntos interactivos
4. **Testear**: Probar en diferentes dispositivos y navegadores
5. **Deploy**: Push a GitHub y conectar con Vercel

## 💡 Comandos Útiles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

## 🎨 Customización Rápida

### Cambiar colores de pestañas
Edita `components/TabSystem.tsx`:
```typescript
const tabs = [
  { id: 'inicio', label: 'Inicio', icon: Home, page: 0, color: 'bg-red-600' },
  // Cambia los colores aquí
];
```

### Añadir hotspots
En `data/cv-data.json`:
```json
"hotspots": [
  {
    "id": "hs1",
    "titulo": "Mi Logro",
    "descripcion": "Detalles...",
    "icono": "box",
    "posicion": { "x": 20, "y": 30 }
  }
]
```

### Ajustar número de columnas
En componentes de página:
```tsx
<MagazinePage columns={2}> {/* 1, 2, o 3 */}
```

## 🔧 Troubleshooting

- **Páginas no voltean**: Verificar que `totalPages` en store coincida con número de páginas
- **Hotspots no aparecen**: Validar estructura JSON y posiciones (x, y en %)
- **Responsive issues**: Ajustar max-width en Magazine3D.tsx
- **Iconos no cargan**: Instalar `lucide-react` y verificar nombres de iconos

## 📝 Notas de Desarrollo

- Layout editorial usa CSS columns para texto fluido
- Efecto 3D usa `rotateY` de Framer Motion, no Three.js directamente
- Estado global en Zustand evita prop drilling
- JSON permite actualizar CV sin tocar código
- Backface-visibility oculta páginas durante volteo
