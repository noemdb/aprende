export default function Testimonials() {
  const testimonials = [
    {
      quote: "Kainos Academy ha revolucionado la forma en que mis estudiantes practican fuera del aula. La correlación entre el engagement en la app y el rendimiento académico es impresionante.",
      author: "Prof. Carmen",
      role: "Docente de Matemáticas",
      image: "👩‍🏫",
    },
    {
      quote: "Mi hijo ahora estudia voluntariamente todos los días. Las insignias y el sistema de XP lo motivan de una manera que nunca había visto antes. Además, puedo ver exactamente en qué necesita ayuda.",
      author: "Dra. Nelly",
      role: "Madre de estudiante",
      image: "👩‍💼",
    },
    {
      quote: "Me encanta cómo la app se adapta a mi nivel. No me siento abrumado ni aburrido. Las explicaciones después de cada ejercicio realmente me ayudan a entender mis errores.",
      author: "Miguel",
      role: "Estudiante de 9no grado",
      image: "👦",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium mb-4">
            Lo que dicen nuestros usuarios
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experiencias que Transforman
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias reales de estudiantes, profesores y padres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl">
                  {testimonial.image}
                </div>
              </div>

              <div className="pt-8">
                <div className="text-6xl text-indigo-200 mb-4">"</div>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-2xl font-bold text-gray-900 max-w-3xl mx-auto mb-6">
              "El 65% de los docentes incorporan insights de Kainos Academy en su planificación pedagógica"
            </blockquote>
            <p className="text-gray-600">
              Estudio realizado con 500+ docentes de instituciones educativas que utilizan la plataforma
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}