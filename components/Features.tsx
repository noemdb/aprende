export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Prácticas Adaptativas Inteligentes',
      description: 'Ejercicios generados automáticamente según tu pensum académico, nivel actual y áreas que necesitan refuerzo. El sistema aprende de tu progreso y ajusta la dificultad en tiempo real.',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Gamificación con Propósito Pedagógico',
      description: 'Sistema de XP, insignias y streaks diseñado por expertos educativos. Cada mecánica refuerza el aprendizaje real, no solo el engagement. Progresión determinística y transparente.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Diagnósticos Asistidos por IA',
      description: 'Reportes automáticos que analizan tu rendimiento y generan insights pedagógicos. Los docentes reciben borradores inteligentes para optimizar la evaluación y planificación.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      title: 'Integración con EduSys',
      description: 'Sincronización automática con el sistema académico institucional. Materias, grados, lapsos y evaluaciones siempre actualizados según el ciclo académico real.',
      color: 'from-rose-500 to-orange-600',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Sesiones de Estudio Guiadas',
      description: 'Experiencias estructuradas de 5-20 minutos con retroalimentación inmediata. Modos de refuerzo rápido, dominio profundo, repaso de lapso y desafíos semanales.',
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Dashboards para Todos',
      description: 'Vistas personalizadas para estudiantes (progreso y logros), profesores (insights de rendimiento) y padres (áreas de mejora y celebraciones).',
      color: 'from-amber-500 to-yellow-600',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Características que Transforman el Aprendizaje
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada funcionalidad está diseñada con integridad pedagógica y validada por teoría del aprendizaje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-indigo-200"
            >
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-indigo-50 rounded-lg p-6">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">30%</div>
                <div className="text-gray-700 mt-2">Aumento en práctica autónoma</div>
              </div>
              <div className="border-l-2 border-gray-200 h-12"></div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">20%</div>
                <div className="text-gray-700 mt-2">Reducción en brecha de rendimiento</div>
              </div>
              <div className="border-l-2 border-gray-200 h-12"></div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">4.2/5</div>
                <div className="text-gray-700 mt-2">Satisfacción estudiantil</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}