export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-2 text-xl font-bold gradient-text">
                StudentQwen
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Plataforma educativa gamificada con diagnósticos asistidos por IA, integrada con EduSys.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Características</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Cómo Funciona</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonios</a></li>
            </ul>
          </div>

          {/* Technology */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Tecnología</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">React Native</span></li>
              <li><span className="text-gray-400">Next.js + Tailwind</span></li>
              <li><span className="text-gray-400">Node.js + Express</span></li>
              <li><span className="text-gray-400">MySQL/MariaDB</span></li>
              <li><span className="text-gray-400">Firebase Cloud Messaging</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 noemdb@github.com</li>
              <li>🔗 github.com/noemdb/aprende</li>
              <li className="mt-4 text-sm">
                © {new Date().getFullYear()} StudentQwen. Todos los derechos reservados.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            Desarrollado con ❤️ para la comunidad educativa | Integración con EduSys (s2526)
          </p>
        </div>
      </div>
    </footer>
  )
}