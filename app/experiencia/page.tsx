export default function ExperienciaPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8 newspaper-border p-6">
        <h1 className="newspaper-heading text-4xl md:text-6xl mb-2">
          EXPERIENCIA PROFESIONAL
        </h1>
        <p className="newspaper-subheading text-lg">
          Una Trayectoria de Éxito y Logros
        </p>
      </div>

      <div className="space-y-6">
        {/* Experience Item 1 */}
        <article className="newspaper-border p-6">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h2 className="article-title text-2xl">
              Título del Puesto | Nombre de la Empresa
            </h2>
            <span className="font-serif font-bold text-newspaper-accent">
              Enero 2022 - Presente
            </span>
          </div>
          <div className="section-divider"></div>
          <div className="newspaper-column">
            <p className="mb-3">
              Descripción detallada de tus responsabilidades y logros en este puesto. 
              Incluye proyectos importantes, tecnologías utilizadas y resultados obtenidos.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>Logro importante número 1</li>
              <li>Logro importante número 2</li>
              <li>Logro importante número 3</li>
              <li>Tecnologías y herramientas utilizadas</li>
            </ul>
          </div>
        </article>

        {/* Experience Item 2 */}
        <article className="newspaper-border p-6">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h2 className="article-title text-2xl">
              Título del Puesto Anterior | Otra Empresa
            </h2>
            <span className="font-serif font-bold text-newspaper-accent">
              Junio 2019 - Diciembre 2021
            </span>
          </div>
          <div className="section-divider"></div>
          <div className="newspaper-column">
            <p className="mb-3">
              Descripción de tu experiencia en este rol. Destaca los proyectos 
              más relevantes y el impacto de tu trabajo.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>Responsabilidad clave 1</li>
              <li>Proyecto destacado 2</li>
              <li>Mejora o innovación implementada</li>
            </ul>
          </div>
        </article>

        {/* Experience Item 3 */}
        <article className="newspaper-border p-6">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h2 className="article-title text-2xl">
              Primer Puesto | Empresa Inicial
            </h2>
            <span className="font-serif font-bold text-newspaper-accent">
              Marzo 2017 - Mayo 2019
            </span>
          </div>
          <div className="section-divider"></div>
          <div className="newspaper-column">
            <p className="mb-3">
              Descripción de tus primeras experiencias profesionales y cómo 
              contribuyeron a tu desarrollo.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Aprendizajes y habilidades desarrolladas</li>
              <li>Proyectos en los que participaste</li>
              <li>Contribuciones al equipo</li>
            </ul>
          </div>
        </article>
      </div>

      {/* Summary Box */}
      <div className="mt-8 newspaper-border p-6 bg-gray-100">
        <h3 className="font-serif font-bold text-xl mb-4 text-center">
          EN RESUMEN
        </h3>
        <p className="text-center">
          Más de X años de experiencia en el sector, con un historial probado 
          de éxito en proyectos desafiantes y equipos diversos.
        </p>
      </div>
    </div>
  );
}
