export default function Hero() {
  return (
    <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Gamificación Educativa con IA
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="block">Transforma el Aprendizaje</span>
            <span className="block gradient-text mt-2">
              con Gamificación Inteligente
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            StudentQwen es una plataforma educativa que combina el currículo académico institucional con mecánicas de juego y diagnósticos asistidos por IA, motivando a los estudiantes a aprender de forma autónoma y efectiva.
          </p>

          <div className="mt-10 flex justify-center space-x-4">
            <a
              href="#cta"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-lg text-white gradient-bg hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Comenzar Gratis
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-base font-medium rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Ver Demo
            </a>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Prácticas Adaptativas</h3>
                  <p className="text-gray-600 mt-2">Ejercicios personalizados según tu nivel y avance curricular</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Sistema de XP e Insignias</h3>
                  <p className="text-gray-600 mt-2">Motivación continua con recompensas y reconocimientos</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Diagnósticos con IA</h3>
                  <p className="text-gray-600 mt-2">Reportes inteligentes que identifican fortalezas y áreas de mejora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}