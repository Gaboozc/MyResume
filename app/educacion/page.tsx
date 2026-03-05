export default function EducacionPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8 newspaper-border p-6">
        <h1 className="newspaper-heading text-4xl md:text-6xl mb-2">
          EDUCACIÓN Y FORMACIÓN
        </h1>
        <p className="newspaper-subheading text-lg">
          Fundamentos Académicos y Desarrollo Continuo
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Formal Education */}
        <div className="space-y-6">
          <h2 className="font-serif font-bold text-2xl border-b-2 border-newspaper-border pb-2">
            FORMACIÓN ACADÉMICA
          </h2>

          <article className="newspaper-border p-5">
            <h3 className="font-serif font-bold text-xl mb-2">
              Máster/Grado en [Tu Especialidad]
            </h3>
            <p className="font-medium text-newspaper-accent mb-2">
              Universidad [Nombre] | 2018 - 2020
            </p>
            <div className="section-divider"></div>
            <p className="text-sm">
              Especialización en [área específica]. Proyecto final sobre [tema]. 
              Promedio: [nota si es relevante].
            </p>
          </article>

          <article className="newspaper-border p-5">
            <h3 className="font-serif font-bold text-xl mb-2">
              Grado en [Tu Carrera]
            </h3>
            <p className="font-medium text-newspaper-accent mb-2">
              Universidad [Nombre] | 2014 - 2018
            </p>
            <div className="section-divider"></div>
            <p className="text-sm">
              Formación en fundamentos de [área]. Participación en [actividades relevantes].
            </p>
          </article>
        </div>

        {/* Certifications & Courses */}
        <div className="space-y-6">
          <h2 className="font-serif font-bold text-2xl border-b-2 border-newspaper-border pb-2">
            CERTIFICACIONES Y CURSOS
          </h2>

          <article className="newspaper-border p-5">
            <h3 className="font-serif font-bold text-lg mb-2">
              Certificación Profesional [Nombre]
            </h3>
            <p className="font-medium text-newspaper-accent mb-2">
              Plataforma/Institución | 2023
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Tema o habilidad 1</li>
              <li>Tema o habilidad 2</li>
            </ul>
          </article>

          <article className="newspaper-border p-5">
            <h3 className="font-serif font-bold text-lg mb-2">
              Curso Avanzado de [Tecnología]
            </h3>
            <p className="font-medium text-newspaper-accent mb-2">
              Plataforma Online | 2022
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Concepto avanzado 1</li>
              <li>Proyecto práctico desarrollado</li>
            </ul>
          </article>

          <article className="newspaper-border p-5">
            <h3 className="font-serif font-bold text-lg mb-2">
              Workshop/Bootcamp en [Área]
            </h3>
            <p className="font-medium text-newspaper-accent mb-2">
              Organización | 2021
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Metodología o framework aprendido</li>
              <li>Práctica intensiva en [herramienta]</li>
            </ul>
          </article>
        </div>
      </div>

      {/* Additional Training */}
      <div className="mt-8 newspaper-border p-6">
        <h2 className="font-serif font-bold text-2xl mb-4 text-center border-b-2 border-newspaper-border pb-2">
          FORMACIÓN ADICIONAL
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 border border-newspaper-border">
            <p className="font-bold mb-1">Idiomas</p>
            <p className="text-sm">Español (Nativo)</p>
            <p className="text-sm">Inglés (Avanzado)</p>
          </div>
          <div className="p-4 border border-newspaper-border">
            <p className="font-bold mb-1">Conferencias</p>
            <p className="text-sm">Asistencia a [evento]</p>
            <p className="text-sm">Ponente en [evento]</p>
          </div>
          <div className="p-4 border border-newspaper-border">
            <p className="font-bold mb-1">Mentoría</p>
            <p className="text-sm">Programa de mentoría</p>
            <p className="text-sm">Formación de equipos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
