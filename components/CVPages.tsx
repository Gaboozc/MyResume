'use client';

import MagazinePage from '@/components/MagazinePage';
import cvData from '@/data/cv-data.json';
import Image from 'next/image';

export function CoverPage() {
  const techLogos = [
    { 
      name: 'React', 
      url: 'https://cdn-icons-png.flaticon.com/512/1183/1183672.png',
    },
    { 
      name: 'Next.js', 
      url: 'https://freepng.com/uploads/images/202512/ext-js-logo-vector-png_1020x.jpg',
    },
    { 
      name: 'Node.js', 
      url: 'https://www.nicepng.com/png/detail/383-3839776_node-js-icon-png.png',
    },
    { 
      name: 'Python', 
      url: 'https://image.pngaaa.com/118/5486118-middle.png',
    },
    { 
      name: 'Flask', 
      url: 'https://www.codesubmit.io/images/cms/a3aaa6c3eef6.svg',
    },
    { 
      name: 'JavaScript', 
      url: 'https://img.freepik.com/premium-photo/javascript-website-3d-icon-isolated-white-background_1108860-2391.jpg',
    },
    { 
      name: 'HTML', 
      url: 'https://t4.ftcdn.net/jpg/00/75/92/23/360_F_75922341_EQ5ir4801xHK00ysm5YhZ8nta9jGjNto.jpg',
    },
    { 
      name: 'CSS', 
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResZMtAC7U1fme0xZf7WJyk0FKVAQEXmQATg&s',
    },
    { 
      name: 'Bootstrap', 
      url: 'https://img.freepik.com/premium-vector/bootstrap-flat-logo-vector-illustration_582637-461.jpg',
    },
    { 
      name: 'Supabase', 
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsC9Zl9jYsLYXA9lhxDCiJD0Y_PQakXzpzMA&s',
    },
    { 
      name: 'GitHub', 
      url: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png',
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden text-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-100" />
      <div className="absolute inset-0 opacity-45"
           style={{
             backgroundImage: `radial-gradient(circle at 15% 18%, rgba(245,158,11,0.15), transparent 32%),
                               radial-gradient(circle at 84% 72%, rgba(59,130,246,0.12), transparent 38%)`
           }} />

      <div
        className="relative z-10 h-full w-full max-w-[94%] mx-auto flex flex-col justify-between"
        style={{
          boxSizing: 'border-box',
          maxWidth: 'calc(100% - 56px)',
          padding: 'clamp(28px, 4vw, 56px)',
        }}
      >
        <div className="inline-flex items-center gap-2 self-start bg-white/70 border border-amber-300 rounded-full px-4 py-1.5 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span className="text-xs tracking-[0.2em] uppercase text-amber-900">Portfolio</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            {cvData.personal.nombre}
          </h1>
          <p className="text-xl md:text-3xl text-slate-700 font-light">
            {cvData.personal.titulo}
          </p>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            {cvData.personal.descripcion}
          </p>
        </div>

        {/* Logos de tecnologías */}
        <div className="flex items-center justify-center gap-5" style={{ maxWidth: '560px', margin: '0 auto' }}>
          {techLogos.map((tech, idx) => (
            <div 
              key={idx}
              style={{
                padding: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                display: 'inline-block',
                width: '68px',
                height: '68px',
                overflow: 'hidden'
              }}
            >
              <img 
                src={tech.url} 
                alt={tech.name}
                style={{
                  width: '52px',
                  height: '52px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>

        {/* Footer con ubicación e instrucción */}
        <div className="flex items-center justify-between text-sm text-slate-600 pt-4 border-t border-slate-200/50">
          <span>{cvData.personal.ubicacion}</span>
          <span className="flex items-center gap-1">
            Voltea la página para comenzar 
            <span className="inline-block animate-bounce">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function IntroPage() {
  return (
    <MagazinePage
      pageNumber={2}
      title="Sobre Mí"
      subtitle="Pasión por la tecnología y la innovación"
      theme="light"
      columns={2}
    >
      <div className="space-y-4">
        <p className="text-lg first-letter:text-5xl first-letter:font-bold 
                     first-letter:mr-2 first-letter:float-left">
          {cvData.personal.descripcion}
        </p>
        <p>
          Con sede en {cvData.personal.ubicacion}, me especializo en crear 
          experiencias digitales que no solo cumplen con los requisitos técnicos, 
          sino que superan las expectativas de los usuarios.
        </p>
        <p>
          Mi enfoque combina diseño moderno, código limpio y las mejores prácticas 
          de la industria para entregar proyectos que realmente hacen la diferencia.
        </p>
      </div>

      <div className="mt-8 p-6 bg-white/50 rounded-lg border-l-4 border-blue-600">
        <h3 className="font-bold text-xl mb-4">Datos de Contacto</h3>
        <div className="space-y-2 text-sm">
          <p><strong>Email:</strong> {cvData.personal.email}</p>
          <p><strong>Teléfono:</strong> {cvData.personal.telefono}</p>
          <p><strong>Ubicación:</strong> {cvData.personal.ubicacion}</p>
        </div>
      </div>
    </MagazinePage>
  );
}

export function ExperiencePage1() {
  const exp = cvData.experiencia[0];
  
  return (
    <MagazinePage
      pageNumber={3}
      title="Experiencia"
      subtitle="Trayectoria Profesional"
      theme="colored"
      hotspots={exp.hotspots}
      columns={2}
    >
      <article className="break-inside-avoid mb-8">
        <h2 className="text-3xl font-bold mb-2">{exp.puesto}</h2>
        <h3 className="text-xl text-blue-600 font-semibold mb-1">{exp.empresa}</h3>
        <p className="text-sm opacity-70 mb-4">{exp.periodo}</p>
        
        <p className="mb-4 text-lg leading-relaxed">
          {exp.descripcion}
        </p>

        <div className="bg-white/70 p-4 rounded-lg">
          <h4 className="font-bold mb-3">Logros Destacados:</h4>
          <ul className="space-y-2">
            {exp.logros.map((logro, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-blue-600 font-bold">▸</span>
                <span>{logro}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="break-inside-avoid">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-lg">
          <h4 className="font-bold mb-4 text-lg">Stack Tecnológico</h4>
          <div className="flex flex-wrap gap-2">
            {exp.tecnologias.map((tech) => (
              <span key={tech} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-600 rounded">
          <p className="text-sm">
            💡 <strong>Tip:</strong> Haz clic en los puntos brillantes para ver 
            detalles técnicos de proyectos específicos.
          </p>
        </div>
      </div>
    </MagazinePage>
  );
}

export function ExperiencePage2() {
  const exp = cvData.experiencia[1];
  
  return (
    <MagazinePage
      pageNumber={4}
      theme="light"
      hotspots={exp.hotspots}
      columns={2}
    >
      <article className="break-inside-avoid mb-8">
        <h2 className="text-3xl font-bold mb-2">{exp.puesto}</h2>
        <h3 className="text-xl text-blue-600 font-semibold mb-1">{exp.empresa}</h3>
        <p className="text-sm opacity-70 mb-4">{exp.periodo}</p>
        
        <p className="mb-4 leading-relaxed">
          {exp.descripcion}
        </p>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-bold mb-3">Logros Clave:</h4>
          <ul className="space-y-2 text-sm">
            {exp.logros.map((logro, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>{logro}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="break-inside-avoid">
        <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-6 rounded-lg">
          <h4 className="font-bold mb-4">Tecnologías</h4>
          <div className="grid grid-cols-2 gap-2">
            {exp.tecnologias.map((tech) => (
              <div key={tech} className="bg-white/20 px-3 py-2 rounded text-center text-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MagazinePage>
  );
}

export function EducationPage() {
  return (
    <MagazinePage
      pageNumber={9}
      title="Educación"
      subtitle="Formación Académica y Certificaciones"
      theme="light"
      columns={1}
    >
      <div className="space-y-8">
        {cvData.educacion.map((edu) => (
          <article
            key={edu.id}
            className={`p-6 rounded-lg border-2 ${
              edu.destacado
                ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-600'
                : 'bg-gray-50 border-gray-300'
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{edu.titulo}</h3>
            <p className="text-lg text-blue-600 font-semibold mb-1">{edu.institucion}</p>
            <p className="text-sm opacity-70 mb-3">{edu.periodo}</p>
            <p className="leading-relaxed">{edu.descripcion}</p>
          </article>
        ))}

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Certificaciones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cvData.certificaciones.map((cert, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-gray-300 shadow">
                <h4 className="font-bold">{cert.nombre}</h4>
                <p className="text-sm text-gray-600">{cert.emisor}</p>
                <p className="text-sm font-semibold text-blue-600">{cert.año}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MagazinePage>
  );
}

export function ExperiencePage3() {
  const exp = cvData.experiencia[2];
  
  return (
    <MagazinePage
      pageNumber={5}
      theme="colored"
      hotspots={exp.hotspots}
      columns={2}
    >
      <article className="break-inside-avoid mb-8">
        <h2 className="text-3xl font-bold mb-2">{exp.puesto}</h2>
        <h3 className="text-xl text-blue-600 font-semibold mb-1">{exp.empresa}</h3>
        <p className="text-sm opacity-70 mb-4">{exp.periodo}</p>
        
        <p className="mb-4 leading-relaxed">
          {exp.descripcion}
        </p>

        <div className="bg-white/70 p-4 rounded-lg">
          <h4 className="font-bold mb-3">Logros Destacados:</h4>
          <ul className="space-y-2">
            {exp.logros.map((logro, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-blue-600 font-bold">▸</span>
                <span>{logro}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="break-inside-avoid">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-lg">
          <h4 className="font-bold mb-4 text-lg">Stack Tecnológico</h4>
          <div className="flex flex-wrap gap-2">
            {exp.tecnologias.map((tech) => (
              <span key={tech} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MagazinePage>
  );
}

export function ExperiencePage4() {
  const exp = cvData.experiencia[3];
  
  return (
    <MagazinePage
      pageNumber={6}
      theme="light"
      hotspots={exp.hotspots}
      columns={2}
    >
      <article className="break-inside-avoid mb-8">
        <h2 className="text-3xl font-bold mb-2">{exp.puesto}</h2>
        <h3 className="text-xl text-green-600 font-semibold mb-1">{exp.empresa}</h3>
        <p className="text-sm opacity-70 mb-4">{exp.periodo}</p>
        
        <p className="mb-4 leading-relaxed">
          {exp.descripcion}
        </p>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border-2 border-green-300">
          <h4 className="font-bold mb-3 text-green-700">Responsabilidades:</h4>
          <ul className="space-y-2 text-sm">
            {exp.logros.map((logro, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>{logro}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="break-inside-avoid">
        <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-6 rounded-lg">
          <h4 className="font-bold mb-4">Tecnologías</h4>
          <div className="flex flex-wrap gap-2">
            {exp.tecnologias.map((tech) => (
              <span key={tech} className="bg-white/20 px-3 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MagazinePage>
  );
}

export function ExperiencePage5() {
  const exp = cvData.experiencia[4];
  
  return (
    <MagazinePage
      pageNumber={7}
      theme="dark"
      hotspots={exp.hotspots}
      columns={2}
    >
      <article className="break-inside-avoid mb-8">
        <h2 className="text-3xl font-bold mb-2">{exp.puesto}</h2>
        <h3 className="text-xl text-cyan-400 font-semibold mb-1">{exp.empresa}</h3>
        <p className="text-sm opacity-70 mb-2">{exp.ubicacion}</p>
        <p className="text-sm opacity-60 mb-4">{exp.periodo}</p>
        
        <p className="mb-4 leading-relaxed opacity-90">
          {exp.descripcion}
        </p>

        <div className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/20">
          <h4 className="font-bold mb-3">Logros Técnicos:</h4>
          <ul className="space-y-2 text-sm">
            {exp.logros.map((logro, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-cyan-400 font-bold">⚡</span>
                <span>{logro}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="break-inside-avoid">
        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white p-6 rounded-lg">
          <h4 className="font-bold mb-4 text-lg">Tecnologías de Infraestructura</h4>
          <div className="flex flex-wrap gap-2">
            {exp.tecnologias.map((tech) => (
              <span key={tech} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/20 border-l-4 border-yellow-400 rounded">
          <p className="text-sm">
            💡 <strong>Nota:</strong> Esta experiencia combina habilidades técnicas 
            de infraestructura física con conocimiento en redes y telecomunicaciones.
          </p>
        </div>
      </div>
    </MagazinePage>
  );
}
