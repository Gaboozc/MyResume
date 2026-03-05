export default function HabilidadesPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8 newspaper-border p-6">
        <h1 className="newspaper-heading text-4xl md:text-6xl mb-2">
          HABILIDADES Y COMPETENCIAS
        </h1>
        <p className="newspaper-subheading text-lg">
          Herramientas del Oficio y Capacidades Profesionales
        </p>
      </div>

      <div className="space-y-6">
        {/* Technical Skills */}
        <article className="newspaper-border p-6">
          <h2 className="article-title text-2xl mb-4 border-b-2 border-newspaper-border pb-2">
            HABILIDADES TÉCNICAS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-serif font-bold text-lg mb-3">Lenguajes de Programación</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>JavaScript/TypeScript</span>
                  <div className="flex space-x-1">
                    <span className="text-newspaper-accent">★★★★★</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Python</span>
                  <div className="flex space-x-1">
                    <span className="text-newspaper-accent">★★★★☆</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Java</span>
                  <div className="flex space-x-1">
                    <span className="text-newspaper-accent">★★★☆☆</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg mb-3">Frameworks y Librerías</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-newspaper-border text-white text-sm">React</span>
                <span className="px-3 py-1 bg-newspaper-border text-white text-sm">Next.js</span>
                <span className="px-3 py-1 bg-newspaper-border text-white text-sm">Node.js</span>
                <span className="px-3 py-1 bg-newspaper-border text-white text-sm">Express</span>
                <span className="px-3 py-1 bg-newspaper-border text-white text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-newspaper-border text-white text-sm">Django</span>
                <span className="px-3 py-1 bg-newspaper-border text-white text-sm">Tailwind CSS</span>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg mb-3">Bases de Datos</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border-2 border-newspaper-border text-sm">PostgreSQL</span>
                <span className="px-3 py-1 border-2 border-newspaper-border text-sm">MongoDB</span>
                <span className="px-3 py-1 border-2 border-newspaper-border text-sm">MySQL</span>
                <span className="px-3 py-1 border-2 border-newspaper-border text-sm">Redis</span>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg mb-3">Herramientas y Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border-2 border-newspaper-border text-sm">Git</span>
                <span className="px-3 py-1 border-2 border-newspaper-border text-sm">Docker</span>
                <span className="px-3 py-1 border-2 border-newspaper-border text-sm">AWS</span>
                <span className="px-3 py-1 border-2 border-newspaper-border text-sm">Vercel</span>
                <span className="px-3 py-1 border-2 border-newspaper-border text-sm">CI/CD</span>
              </div>
            </div>
          </div>
        </article>

        {/* Soft Skills */}
        <article className="newspaper-border p-6">
          <h2 className="article-title text-2xl mb-4 border-b-2 border-newspaper-border pb-2">
            HABILIDADES BLANDAS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-newspaper-border p-4 text-center">
              <div className="text-4xl mb-2">🤝</div>
              <h3 className="font-serif font-bold mb-2">Trabajo en Equipo</h3>
              <p className="text-sm">Colaboración efectiva con equipos multidisciplinarios</p>
            </div>
            <div className="border border-newspaper-border p-4 text-center">
              <div className="text-4xl mb-2">💡</div>
              <h3 className="font-serif font-bold mb-2">Resolución de Problemas</h3>
              <p className="text-sm">Enfoque analítico y soluciones creativas</p>
            </div>
            <div className="border border-newspaper-border p-4 text-center">
              <div className="text-4xl mb-2">📢</div>
              <h3 className="font-serif font-bold mb-2">Comunicación</h3>
              <p className="text-sm">Clara comunicación técnica y no técnica</p>
            </div>
            <div className="border border-newspaper-border p-4 text-center">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-serif font-bold mb-2">Gestión de Proyectos</h3>
              <p className="text-sm">Planificación y entrega de proyectos a tiempo</p>
            </div>
            <div className="border border-newspaper-border p-4 text-center">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="font-serif font-bold mb-2">Aprendizaje Continuo</h3>
              <p className="text-sm">Adaptación rápida a nuevas tecnologías</p>
            </div>
            <div className="border border-newspaper-border p-4 text-center">
              <div className="text-4xl mb-2">👥</div>
              <h3 className="font-serif font-bold mb-2">Liderazgo</h3>
              <p className="text-sm">Mentoría y guía de equipos junior</p>
            </div>
          </div>
        </article>

        {/* Methodologies */}
        <article className="newspaper-border p-6 bg-gray-100">
          <h2 className="article-title text-2xl mb-4 text-center">
            METODOLOGÍAS Y PRÁCTICAS
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white border-2 border-newspaper-border font-medium">Agile/Scrum</span>
            <span className="px-4 py-2 bg-white border-2 border-newspaper-border font-medium">TDD</span>
            <span className="px-4 py-2 bg-white border-2 border-newspaper-border font-medium">Clean Code</span>
            <span className="px-4 py-2 bg-white border-2 border-newspaper-border font-medium">RESTful APIs</span>
            <span className="px-4 py-2 bg-white border-2 border-newspaper-border font-medium">Microservicios</span>
            <span className="px-4 py-2 bg-white border-2 border-newspaper-border font-medium">DevOps</span>
          </div>
        </article>
      </div>
    </div>
  );
}
