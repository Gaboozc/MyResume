export default function ContactoPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8 newspaper-border p-6">
        <h1 className="newspaper-heading text-4xl md:text-6xl mb-2">
          CONTACTO
        </h1>
        <p className="newspaper-subheading text-lg">
          Conectemos y Trabajemos Juntos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <article className="newspaper-border p-6">
          <h2 className="font-serif font-bold text-2xl mb-4 border-b-2 border-newspaper-border pb-2">
            INFORMACIÓN DE CONTACTO
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <a href="mailto:tu.email@ejemplo.com" className="text-newspaper-accent hover:underline">
                  tu.email@ejemplo.com
                </a>
              </div>
            </div>

            <div className="section-divider"></div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="font-bold mb-1">Teléfono</h3>
                <a href="tel:+34123456789" className="text-newspaper-accent hover:underline">
                  +34 123 456 789
                </a>
              </div>
            </div>

            <div className="section-divider"></div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-bold mb-1">Ubicación</h3>
                <p>Madrid, España</p>
                <p className="text-sm text-gray-600">(Disponible para remoto)</p>
              </div>
            </div>

            <div className="section-divider"></div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">💼</span>
              <div>
                <h3 className="font-bold mb-1">Disponibilidad</h3>
                <p>Abierto a nuevas oportunidades</p>
              </div>
            </div>
          </div>
        </article>

        {/* Social Media Links */}
        <article className="newspaper-border p-6">
          <h2 className="font-serif font-bold text-2xl mb-4 border-b-2 border-newspaper-border pb-2">
            PRESENCIA ONLINE
          </h2>
          <div className="space-y-3">
            <a 
              href="https://github.com/tu-usuario" 
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border-2 border-newspaper-border hover:bg-newspaper-border hover:text-white transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">GitHub</h3>
                  <p className="text-sm">Proyectos y código abierto</p>
                </div>
                <span className="text-2xl">→</span>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/tu-perfil" 
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border-2 border-newspaper-border hover:bg-newspaper-border hover:text-white transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">LinkedIn</h3>
                  <p className="text-sm">Red profesional</p>
                </div>
                <span className="text-2xl">→</span>
              </div>
            </a>

            <a 
              href="https://twitter.com/tu-usuario" 
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border-2 border-newspaper-border hover:bg-newspaper-border hover:text-white transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">Twitter/X</h3>
                  <p className="text-sm">Pensamientos y actualizaciones</p>
                </div>
                <span className="text-2xl">→</span>
              </div>
            </a>

            <a 
              href="https://tu-portfolio.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border-2 border-newspaper-border hover:bg-newspaper-border hover:text-white transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">Portfolio Personal</h3>
                  <p className="text-sm">Más sobre mi trabajo</p>
                </div>
                <span className="text-2xl">→</span>
              </div>
            </a>
          </div>
        </article>
      </div>

      {/* Contact Form */}
      <article className="newspaper-border p-6 mt-6">
        <h2 className="font-serif font-bold text-2xl mb-4 text-center border-b-2 border-newspaper-border pb-2">
          ENVÍA UN MENSAJE
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          (Este es un formulario de ejemplo. Integra con tu plataforma preferida: Formspree, EmailJS, etc.)
        </p>
        <form className="space-y-4 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-bold mb-2">
                Nombre *
              </label>
              <input 
                type="text" 
                id="name"
                className="w-full p-3 border-2 border-newspaper-border focus:outline-none focus:border-newspaper-accent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold mb-2">
                Email *
              </label>
              <input 
                type="email" 
                id="email"
                className="w-full p-3 border-2 border-newspaper-border focus:outline-none focus:border-newspaper-accent"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block font-bold mb-2">
              Asunto
            </label>
            <input 
              type="text" 
              id="subject"
              className="w-full p-3 border-2 border-newspaper-border focus:outline-none focus:border-newspaper-accent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-bold mb-2">
              Mensaje *
            </label>
            <textarea 
              id="message"
              rows={6}
              className="w-full p-3 border-2 border-newspaper-border focus:outline-none focus:border-newspaper-accent resize-none"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button 
              type="submit"
              className="px-8 py-3 bg-newspaper-border text-white font-bold hover:bg-newspaper-accent transition-colors"
            >
              ENVIAR MENSAJE
            </button>
          </div>
        </form>
      </article>

      {/* Call to Action */}
      <div className="mt-8 newspaper-border p-6 bg-gray-100 text-center">
        <h3 className="font-serif font-bold text-xl mb-2">
          ¿Listo para Colaborar?
        </h3>
        <p className="mb-4">
          Estoy disponible para proyectos freelance, colaboraciones y oportunidades de empleo.
        </p>
        <p className="text-sm text-gray-600">
          Tiempo de respuesta típico: 24-48 horas
        </p>
      </div>
    </div>
  );
}
