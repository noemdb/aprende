export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Sincronización con SAEFL',
      description: 'Al iniciar sesión con tus credenciales institucionales, EduQuest se conecta automáticamente con el sistema SAEFL para obtener tu perfil académico, materias actuales y avance curricular.',
      icon: '🔐',
    },
    {
      number: '2',
      title: 'Generación de Práctica Adaptativa',
      description: 'El sistema analiza tu rendimiento y genera ejercicios personalizados: 60% refuerzo de temas débiles, 30% consolidación de temas medianos y 10% desafío en temas fuertes.',
      icon: '🎯',
    },
    {
      number: '3',
      title: 'Sesión de Estudio Guiada',
      description: 'Completa tu sesión con retroalimentación inmediata. El sistema ajusta la dificultad en tiempo real según tu tasa de aciertos y te proporciona explicaciones pedagógicas.',
      icon: '📚',
    },
    {
      number: '4',
      title: 'Recompensas y Progreso',
      description: 'Gana XP por cada ejercicio correcto, acumula streaks por constancia diaria y desbloquea insignias al alcanzar logros significativos. Tu progreso es visible y motivador.',
      icon: '🏆',
    },
    {
      number: '5',
      title: 'Diagnóstico con IA',
      description: 'Al finalizar el lapso, el sistema genera reportes automáticos con insights pedagógicos asistidos por IA, ayudando a docentes y padres a comprender tu evolución.',
      icon: '🤖',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cómo Funciona EduQuest
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un ciclo completo de aprendizaje gamificado en 5 pasos simples
          </p>
        </div>

        <div className="relative">
          {/* Línea vertical conectando los pasos */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 to-purple-200"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'
                  }`}
              >
                {/* Número del paso */}
                <div className="absolute -left-12 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Contenido del paso */}
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    } card-hover`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    <div className="text-5xl mb-4">{step.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="text-5xl font-bold gradient-text mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Listo para Transformar tu Aprendizaje?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Únete a miles de estudiantes que ya están mejorando sus resultados académicos con EduQuest
            </p>
            <a
              href="#cta"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-lg text-white gradient-bg hover:opacity-90 transition-opacity"
            >
              Comenzar Ahora - Es Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}