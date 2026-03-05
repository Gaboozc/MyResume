export default function ProyectosPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8 newspaper-border p-6">
        <h1 className="newspaper-heading text-4xl md:text-6xl mb-2">
          PROYECTOS DESTACADOS
        </h1>
        <p className="newspaper-subheading text-lg">
          Portfolio de Trabajos y Logros Notables
        </p>
      </div>

      <div className="space-y-6">
        {/* Featured Project */}
        <article className="newspaper-border p-6 bg-gray-50">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h2 className="article-title text-3xl">
              🏆 Proyecto Principal: [Nombre del Proyecto]
            </h2>
            <span className="font-serif font-bold text-newspaper-accent text-lg">
              2024
            </span>
          </div>
          <div className="section-divider"></div>
          <div className="newspaper-column">
            <p className="mb-4 font-medium">
              Descripción completa del proyecto más importante o reciente. 
              Explica el problema que resolvió, las tecnologías utilizadas y el impacto logrado.
            </p>
            <p className="mb-4">
              Detalles sobre la arquitectura, decisiones técnicas clave y desafíos superados. 
              Incluye métricas o resultados cuantificables si están disponibles.
            </p>
            <div className="break-inside-avoid mt-4">
              <h3 className="font-serif font-bold mb-2">Stack Tecnológico:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-newspaper-border text-white text-sm">React</span>
                <span className="px-3 py-1 bg-newspaper-border text-white text-sm">Next.js</span>
                <span className="px-3 py-1 bg-newspaper-border text-white text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-newspaper-border text-white text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-newspaper-border text-white text-sm">AWS</span>
              </div>
            </div>
          </div>
        </article>

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="newspaper-border p-5">
            <h3 className="font-serif font-bold text-xl mb-2">
              [Nombre del Proyecto 2]
            </h3>
            <p className="text-sm text-newspaper-accent mb-3">Aplicación Web | 2023</p>
            <div className="section-divider"></div>
            <p className="text-sm mb-3">
              Breve descripción del proyecto, su propósito y los resultados obtenidos. 
              Menciona las tecnologías clave utilizadas.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-newspaper-border text-xs">Vue.js</span>
              <span className="px-2 py-1 border border-newspaper-border text-xs">Node.js</span>
              <span className="px-2 py-1 border border-newspaper-border text-xs">MongoDB</span>
            </div>
          </article>

          <article className="newspaper-border p-5">
            <h3 className="font-serif font-bold text-xl mb-2">
              [Nombre del Proyecto 3]
            </h3>
            <p className="text-sm text-newspaper-accent mb-3">API REST | 2023</p>
            <div className="section-divider"></div>
            <p className="text-sm mb-3">
              API robusta para [propósito]. Implementa autenticación, autorización 
              y manejo eficiente de datos.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-newspaper-border text-xs">Python</span>
              <span className="px-2 py-1 border border-newspaper-border text-xs">FastAPI</span>
              <span className="px-2 py-1 border border-newspaper-border text-xs">Docker</span>
            </div>
          </article>

          <article className="newspaper-border p-5">
            <h3 className="font-serif font-bold text-xl mb-2">
              [Nombre del Proyecto 4]
            </h3>
            <p className="text-sm text-newspaper-accent mb-3">Dashboard | 2022</p>
            <div className="section-divider"></div>
            <p className="text-sm mb-3">
              Panel de control interactivo para visualización de datos en tiempo real. 
              Mejora la toma de decisiones empresariales.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-newspaper-border text-xs">React</span>
              <span className="px-2 py-1 border border-newspaper-border text-xs">D3.js</span>
              <span className="px-2 py-1 border border-newspaper-border text-xs">Firebase</span>
            </div>
          </article>

          <article className="newspaper-border p-5">
            <h3 className="font-serif font-bold text-xl mb-2">
              [Nombre del Proyecto 5]
            </h3>
            <p className="text-sm text-newspaper-accent mb-3">Mobile App | 2022</p>
            <div className="section-divider"></div>
            <p className="text-sm mb-3">
              Aplicación móvil multiplataforma para [propósito]. Interfaz intuitiva 
              y rendimiento optimizado.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-newspaper-border text-xs">React Native</span>
              <span className="px-2 py-1 border border-newspaper-border text-xs">Redux</span>
              <span className="px-2 py-1 border border-newspaper-border text-xs">Expo</span>
            </div>
          </article>
        </div>

        {/* Side Projects */}
        <article className="newspaper-border p-6">
          <h2 className="font-serif font-bold text-2xl mb-4 border-b-2 border-newspaper-border pb-2">
            PROYECTOS PERSONALES Y OPEN SOURCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-newspaper-border p-4">
              <h3 className="font-bold mb-2">📦 [Librería/Paquete]</h3>
              <p className="text-sm mb-2">
                Herramienta útil para desarrolladores. Publicada en npm con X descargas.
              </p>
              <a href="#" className="text-sm text-newspaper-accent hover:underline">
                Ver en GitHub →
              </a>
            </div>
            <div className="border border-newspaper-border p-4">
              <h3 className="font-bold mb-2">🔧 [Herramienta CLI]</h3>
              <p className="text-sm mb-2">
                Automatización de tareas comunes. Mejora la productividad del equipo.
              </p>
              <a href="#" className="text-sm text-newspaper-accent hover:underline">
                Ver en GitHub →
              </a>
            </div>
            <div className="border border-newspaper-border p-4">
              <h3 className="font-bold mb-2">💻 [Proyecto Experimental]</h3>
              <p className="text-sm mb-2">
                Exploración de nuevas tecnologías y patrones de diseño.
              </p>
              <a href="#" className="text-sm text-newspaper-accent hover:underline">
                Ver en GitHub →
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
