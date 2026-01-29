import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Resplandores de fondo (Igual que en la referencia) */}
      <div className="glow-effect top-[-10%] right-[-10%]" />
      <div className="glow-effect bottom-[-20%] left-[-10%]" />

      {/* NAVBAR CLONADO */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
              Q
            </div>
            <span className="text-xl font-bold tracking-tight">StudentQwen</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-slate-400">
            <Link href="#" className="hover:text-white transition-colors">Características</Link>
            <Link href="#" className="hover:text-white transition-colors">Metodología</Link>
            <Link href="#" className="hover:text-white transition-colors">Roadmap</Link>
            <Link href="#" className="hover:text-white transition-colors">Soporte</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-[13px] font-medium text-slate-400 hover:text-white">Acceso</Link>
            <button className="bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-bold px-6 py-2.5 rounded-lg shadow-lg shadow-blue-600/30 transition-all">
              Solicitar Demo
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION (Basado en landingBueno.png) */}
      <section className="relative pt-48 pb-32 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">Integración s2526 Activa</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-[1.05] tracking-tighter">
              StudentQwen <br />
              Motor de <br />
              <span className="text-gradient">Aprendizaje y Gamificación</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Transforma tu pensum académico en una aventura inmersiva. 
              Sincroniza tus notas, supera retos de IA y ofrece una experiencia de aprendizaje moderna a tus estudiantes.
            </p>

            <div className="flex items-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold text-sm shadow-xl shadow-blue-600/30 transition-all">
                Empezar Ahora
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-[12px] font-medium text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Sincronización en tiempo real
              </div>
              <div className="flex items-center gap-2 text-[12px] font-medium text-slate-500">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> Reportes con IA
              </div>
            </div>
          </div>

          {/* ELEMENTO VISUAL (La tarjeta oscura con profundidad) */}
          <div className="relative z-10 hidden lg:block">
            <div className="bg-[#0b1121] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              {/* Fake Dashboard Content */}
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">profile_master_v2.0</div>
              </div>

              <div className="space-y-6">
                <div className="h-16 w-full bg-white/5 rounded-xl border border-white/5 flex items-center px-6 justify-between group-hover:bg-white/10 transition-colors">
                  <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-blue-500" />
                  </div>
                  <div className="w-12 h-6 bg-blue-500/20 rounded border border-blue-500/40" />
                </div>
                <div className="h-16 w-full bg-white/5 rounded-xl border border-white/5 flex items-center px-6 justify-between group-hover:bg-white/10 transition-colors">
                  <div className="w-40 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-emerald-500" />
                  </div>
                  <div className="w-12 h-6 bg-emerald-500/20 rounded border border-emerald-500/40" />
                </div>
                <div className="h-16 w-full bg-white/5 rounded-xl border border-white/5 flex items-center px-6 justify-between group-hover:bg-white/10 transition-colors">
                  <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-purple-500" />
                  </div>
                  <div className="w-12 h-6 bg-purple-500/20 rounded border border-purple-500/40" />
                </div>
              </div>

              {/* El efecto de brillo en la esquina que tiene la imagen buena */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
            </div>
            
            {/* Pequeña tarjeta flotante extra para dar profundidad */}
            <div className="absolute -bottom-8 -left-8 bg-[#1e293b] border border-white/10 p-4 rounded-2xl shadow-2xl z-20 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500">
                  🏆
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Nuevo Logro</div>
                  <div className="text-xs font-bold text-white">Maestro de Física</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE FASES (Bento Grid estilo Moderno) --- */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black tracking-tighter italic">Roadmap de <br/><span className="text-blue-500">Implementación</span></h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { f: "F1", t: "Fundación Técnica", d: "Arquitectura modular React Native SDK 50+ orientada a dominio educativo." },
            { f: "F2", t: "Modelado s2526", d: "Sincronización profunda con planes de estudio, lapsos y matrícula institucional." },
            { f: "F5", t: "Motor de XP", d: "Algoritmos determinísticos para cálculo de experiencia basado en dificultad." },
          ].map((item, i) => (
            <div key={i} className="bg-[#0b1121] border border-white/5 p-8 rounded-2xl hover:border-blue-500/50 transition-all cursor-default group">
              <div className="text-blue-500 font-black text-xl mb-4 group-hover:scale-110 transition-transform">{item.f}</div>
              <h3 className="text-white font-bold text-lg mb-2">{item.t}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}