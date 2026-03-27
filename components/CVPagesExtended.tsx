'use client';

import MagazinePage from '@/components/MagazinePage';
import cvDataEs from '@/data/cv-data.json';
import cvDataEn from '@/data/cv-data-en.json';
import { useMagazineStore } from '@/store/magazineStore';

function useLocalizedCvData() {
  const { language } = useMagazineStore();
  const cvData = language === 'es' ? cvDataEs : cvDataEn;

  return { language, cvData };
}

export function SkillsPage() {
  const { language, cvData } = useLocalizedCvData();

  return (
    <MagazinePage
      pageNumber={8}
      title={language === 'es' ? 'Habilidades' : 'Skills'}
      subtitle={language === 'es' ? 'Competencias Tecnicas I' : 'Technical Competencies I'}
      theme="colored"
      columns={2}
    >
      <div className="space-y-4">
        <section>
          <h3 className="text-2xl font-bold mb-4 text-blue-600">Frontend</h3>
          <div className="space-y-3">
            {cvData.habilidades.frontend.map((skill) => (
              <div key={skill.nombre} className="break-inside-avoid">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{skill.nombre}</span>
                  <span className="text-sm text-gray-600">{skill.años} {language === 'es' ? 'anos' : 'years'}</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 
                               transition-all duration-1000"
                    style={{ width: `${skill.nivel}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="break-inside-avoid">
          <h3 className="text-2xl font-bold mb-4 text-green-600">Backend</h3>
          <div className="space-y-3">
            {cvData.habilidades.backend.map((skill) => (
              <div key={skill.nombre}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{skill.nombre}</span>
                  <span className="text-sm text-gray-600">{skill.años} {language === 'es' ? 'anos' : 'years'}</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-teal-500"
                    style={{ width: `${skill.nivel}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="space-y-4">
        <section className="break-inside-avoid">
          <h3 className="text-2xl font-bold mb-4 text-purple-600">{language === 'es' ? 'Bases de Datos' : 'Databases'}</h3>
          <div className="space-y-3">
            {cvData.habilidades.databases.map((skill) => (
              <div key={skill.nombre}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{skill.nombre}</span>
                  <span className="text-sm text-gray-600">{skill.años} {language === 'es' ? 'anos' : 'years'}</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${skill.nivel}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="break-inside-avoid bg-white/60 p-4 rounded-lg border border-purple-100">
          <h3 className="text-xl font-bold mb-2 text-purple-700">{language === 'es' ? 'Resumen' : 'Summary'}</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {language === 'es'
              ? 'Esta hoja concentra las habilidades de desarrollo de software: frontend, backend y bases de datos.'
              : 'This page summarizes software development skills across frontend, backend, and databases.'}
          </p>
        </section>
      </div>

    </MagazinePage>
  );
}

export function SkillsPage2() {
  const { language, cvData } = useLocalizedCvData();

  return (
    <MagazinePage
      pageNumber={9}
      title={language === 'es' ? 'Habilidades' : 'Skills'}
      subtitle={language === 'es' ? 'Competencias Tecnicas II' : 'Technical Competencies II'}
      theme="colored"
      columns={2}
    >
      <div className="space-y-4">
        <section className="break-inside-avoid">
          <h3 className="text-2xl font-bold mb-4 text-orange-600">{language === 'es' ? 'DevOps y Herramientas' : 'DevOps & Tools'}</h3>
          <div className="space-y-3">
            {cvData.habilidades.devops.map((skill) => (
              <div key={skill.nombre}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{skill.nombre}</span>
                  <span className="text-sm text-gray-600">{skill.años} {language === 'es' ? 'anos' : 'years'}</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                    style={{ width: `${skill.nivel}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="space-y-4">
        <section className="break-inside-avoid">
          <h3 className="text-2xl font-bold mb-4 text-cyan-600">{language === 'es' ? 'Infraestructura y Telecomunicaciones' : 'Infrastructure & Telecommunications'}</h3>
          <div className="space-y-3">
            {cvData.habilidades.infraestructura.map((skill) => (
              <div key={skill.nombre}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{skill.nombre}</span>
                  <span className="text-sm text-gray-600">{skill.años} {language === 'es' ? 'anos' : 'years'}</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    style={{ width: `${skill.nivel}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="break-inside-avoid bg-white/50 p-4 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">{language === 'es' ? 'Habilidades Blandas' : 'Soft Skills'}</h3>
          <ul className="space-y-2">
            {cvData.habilidades.blandas.map((skill, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="break-inside-avoid bg-gradient-to-br from-blue-500 to-purple-500 text-white p-4 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">{language === 'es' ? 'Idiomas' : 'Languages'}</h3>
          <ul className="space-y-2">
            {cvData.habilidades.idiomas.map((idioma, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <span className="font-semibold">{idioma.idioma}</span>
                <span className="text-sm">{idioma.nivel}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </MagazinePage>
  );
}

export function ProjectsPage1() {
  const { language, cvData } = useLocalizedCvData();
  const featuredProject = cvData.proyectos[0];

  return (
    <MagazinePage
      pageNumber={10}
      title={language === 'es' ? 'Proyectos' : 'Projects'}
      subtitle={language === 'es' ? 'Portfolio de Trabajos Destacados' : 'Featured Work Portfolio'}
      theme="dark"
      hotspots={featuredProject.hotspots}
      columns={1}
    >
      <article className="space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl shadow-lg border border-white/20">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-4xl font-bold">{featuredProject.nombre}</h2>
            <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
              {language === 'es' ? '⭐ Destacado' : '⭐ Featured'}
            </span>
          </div>
          <p className="text-xl mb-6 opacity-90">{featuredProject.descripcion}</p>
          
          <div className="mb-6 grid grid-cols-2 md:grid-cols-3 gap-2">
            {featuredProject.tecnologias.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center justify-center bg-white/20 px-3 py-2 rounded-lg backdrop-blur text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {featuredProject.url && (
              <a
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-5 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                {language === 'es' ? 'Ver Proyecto →' : 'View Project →'}
              </a>
            )}
            <a
              href={cvData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black/20 border border-white/35 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-black/30 transition-colors"
            >
              {language === 'es' ? 'Ver GitHub' : 'View GitHub'}
            </a>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-xl backdrop-blur border border-white/20">
          <h3 className="text-xl font-bold mb-4">{language === 'es' ? 'Detalle del Proyecto' : 'Project Detail'}</h3>
          <div className="space-y-3 text-white/90 leading-relaxed">
            <p>
              {language === 'es'
                ? 'Plataforma disenada con arquitectura modular y componentes reutilizables, permitiendo adaptacion rapida a diferentes necesidades de gestion.'
                : 'Platform designed with modular architecture and reusable components, enabling fast adaptation to different management needs.'}
            </p>
            <p>
              {language === 'es'
                ? 'Sistema de estado optimizado para dashboards interactivos y flujos de trabajo complejos, enfocado en escalabilidad y mantenibilidad del codigo.'
                : 'Optimized state system for interactive dashboards and complex workflows, focused on scalability and maintainable code.'}
            </p>
          </div>
        </div>
      </article>
    </MagazinePage>
  );
}

export function ProjectsPage2() {
  const { language, cvData } = useLocalizedCvData();
  const otherProjects = cvData.proyectos.slice(1);

  return (
    <MagazinePage
      pageNumber={11}
      theme="light"
      columns={2}
    >
      <div className="space-y-6">
        {otherProjects.map((project) => (
          <article
            key={project.id}
            className="break-inside-avoid bg-gradient-to-br from-gray-50 to-white 
                     p-6 rounded-lg border-2 border-gray-200 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">{project.nombre}</h3>
            <p className="mb-4 text-gray-700">{project.descripcion}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tecnologias.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {language === 'es' ? 'Ver mas →' : 'View more →'}
              </a>
            )}
          </article>
        ))}
      </div>

      <div className="break-inside-avoid">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white 
                     p-8 rounded-lg h-full flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4">{language === 'es' ? 'Mas Proyectos' : 'More Projects'}</h3>
          <p className="text-lg mb-6 opacity-90">
            {language === 'es'
              ? 'Quieres ver mas trabajos? Visita mi GitHub para explorar el codigo fuente de estos y otros proyectos open source.'
              : 'Want to see more work? Visit my GitHub to explore the source code for these and other open source projects.'}
          </p>
          <a
            href={cvData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg 
                     font-bold hover:bg-gray-100 transition-colors text-center"
          >
            {language === 'es' ? 'Ver GitHub →' : 'View GitHub →'}
          </a>
        </div>
      </div>
    </MagazinePage>
  );
}

export function ContactPage() {
  const { language, cvData } = useLocalizedCvData();

  return (
    <MagazinePage
      pageNumber={12}
      title={language === 'es' ? 'Contacto' : 'Contact'}
      subtitle={language === 'es' ? 'Trabajemos Juntos' : "Let's Work Together"}
      theme="colored"
      columns={1}
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <p className="text-xl leading-relaxed">
            {language === 'es'
              ? 'Tienes un proyecto en mente? Buscas un desarrollador para tu equipo? Me encantaria escuchar de ti!'
              : "Do you have a project in mind? Looking for a developer for your team? I'd love to hear from you!"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href={`mailto:${cvData.personal.email}`}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white 
                     p-6 rounded-lg hover:shadow-xl transition-all group"
          >
            <div className="text-4xl mb-2">📧</div>
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <p className="group-hover:underline text-sm">{cvData.personal.email}</p>
          </a>

          <a
            href={cvData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-800 to-gray-900 text-white 
                     p-6 rounded-lg hover:shadow-xl transition-all group"
          >
            <div className="text-4xl mb-2">💻</div>
            <h3 className="font-bold text-xl mb-2">GitHub</h3>
            <p className="group-hover:underline">@Gaboozc →</p>
          </a>

          <a
            href={`tel:${cvData.personal.telefono}`}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white 
                     p-6 rounded-lg hover:shadow-xl transition-all group col-span-2"
          >
            <div className="text-4xl mb-2 text-center">📱</div>
            <h3 className="font-bold text-xl mb-2 text-center">{language === 'es' ? 'Telefono' : 'Phone'}</h3>
            <p className="group-hover:underline text-center">{cvData.personal.telefono}</p>
          </a>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg text-center">
          <p className="font-bold text-2xl mb-3">📍 {cvData.personal.ubicacion}</p>
          <p className="text-lg">{cvData.personal.disponibilidad}</p>
        </div>
      </div>
    </MagazinePage>
  );
}

export function BackCoverPage() {
  const { language, cvData } = useLocalizedCvData();

  return (
    <div className="relative w-full h-full overflow-hidden text-slate-900">
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-50 via-white to-blue-50" />
      <div className="absolute inset-0 opacity-15"
           style={{
             backgroundImage: `repeating-linear-gradient(
               45deg,
               rgba(148,163,184,0.2) 0,
               rgba(148,163,184,0.2) 2px,
               transparent 2px,
               transparent 10px
             )`
           }} />

      <div
        className="relative z-10 h-full w-full max-w-[94%] mx-auto flex flex-col justify-between text-center"
        style={{
          boxSizing: 'border-box',
          maxWidth: 'calc(100% - 56px)',
          padding: 'clamp(28px, 4vw, 56px)',
        }}
      >
        <div />

        <div className="max-w-3xl mx-auto space-y-7">
          <h2 className="text-5xl md:text-6xl font-black">{language === 'es' ? 'Gracias' : 'Thank You'}</h2>
          <p className="text-2xl text-slate-700">
            {language === 'es' ? 'por revisar mi portfolio' : 'for reviewing my portfolio'}
          </p>

          <div className="pt-4 space-y-4">
            <p className="text-base uppercase tracking-[0.16em] text-slate-600">Stack</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-slate-800 text-white px-4 py-2 rounded-lg">Next.js</span>
              <span className="bg-slate-800 text-white px-4 py-2 rounded-lg">React</span>
              <span className="bg-slate-800 text-white px-4 py-2 rounded-lg">react-pageflip</span>
              <span className="bg-slate-800 text-white px-4 py-2 rounded-lg">Framer Motion</span>
              <span className="bg-slate-800 text-white px-4 py-2 rounded-lg">Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} {cvData.personal.nombre}
        </div>
      </div>
    </div>
  );
}
