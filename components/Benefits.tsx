export default function Benefits() {
  const roles = [
    {
      role: 'Estudiantes',
      icon: '🎓',
      color: 'from-indigo-500 to-purple-600',
      benefits: [
        'Motivación constante con sistema de XP y recompensas',
        'Aprendizaje adaptado a tu ritmo y nivel cognitivo',
        'Retroalimentación inmediata con explicaciones pedagógicas',
        'Celebración de logros con insignias y reconocimientos',
        'Acceso offline para zonas con conectividad limitada',
      ],
    },
    {
      role: 'Profesores',
      icon: '👨‍🏫',
      color: 'from-purple-500 to-pink-600',
      benefits: [
        'Dashboard con insights de rendimiento por estudiante',
        'Identificación temprana de estudiantes en riesgo',
        'Diagnósticos asistidos por IA para optimizar evaluaciones',
        'Correlación entre engagement digital y notas académicas',
        'Planificación pedagógica basada en datos reales',
      ],
    },
    {
      role: 'Padres/Representantes',
      icon: '👨‍👩‍👧‍👦',
      color: 'from-pink-500 to-rose-600',
      benefits: [
        'Visibilidad clara del progreso académico de sus hijos',
        'Notificaciones de logros y áreas que requieren atención',
        'Reportes semanales con avance por materia',
        'Celebración de esfuerzos y constancia, no solo resultados',
        'Tranquilidad con privacidad y protección infantil garantizada',
      ],
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Beneficios para Toda la Comunidad Educativa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una plataforma diseñada para estudiantes, profesores y familias
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="card-hover relative bg-white rounded-2xl p-8 shadow-xl overflow-hidden border-2 border-transparent"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-10" style={{
                backgroundImage: `linear-gradient(var(--tw-gradient-stops))`,
                '--tw-gradient-from': role.color.split(' ')[0],
                '--tw-gradient-to': role.color.split(' ')[2],
              }}></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-4">{role.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{role.role}</h3>
                
                <ul className="space-y-3">
                  {role.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium mb-4">
              Principios Rectores
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Integridad Pedagógica sobre Engagement
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              La gamificación refuerza el aprendizaje, no lo reemplaza. Todo ejercicio se alinea con el pensum académico institucional y los algoritmos respetan el ritmo cognitivo de cada estudiante.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-indigo-50 text-indigo-800 rounded-full text-sm font-medium">Progresión Determinística</span>
              <span className="px-4 py-2 bg-purple-50 text-purple-800 rounded-full text-sm font-medium">Privacidad Infantil</span>
              <span className="px-4 py-2 bg-pink-50 text-pink-800 rounded-full text-sm font-medium">Sin Publicidad</span>
              <span className="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Cero Aleatoriedad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}