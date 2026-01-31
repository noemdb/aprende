## 0. PRINCIPIOS RECTORES (obligatorios)  

Antes de cualquier línea de código, el equipo debe operar bajo estas reglas:  

**Integridad pedagógica sobre engagement**  
- La gamificación refuerza el aprendizaje, no lo reemplaza  
- Todo ejercicio debe alinearse con el pensum académico institucional  
- Los algoritmos de adaptación respetan el ritmo cognitivo del estudiante  

**Progresión determinística**  
- El sistema de XP se calcula mediante fórmulas transparentes y auditables  
- Las insignias requieren cumplimiento objetivo de criterios predefinidos  
- Cero aleatoriedad en la evaluación del desempeño académico  

**Contexto académico como fuente de verdad**  
- El perfil del estudiante se sincroniza con el sistema institucional (SAEFL)  
- Las materias, grados y lapsos provienen del ciclo académico vigente  
- Las prácticas se generan según el avance curricular real del estudiante  

**Esquema de base de datos inmutable**  
- No se renombran tablas existentes  
- No se renombran columnas existentes  
- No se simplifican relaciones establecidas  
- Toda nueva funcionalidad se integra respetando la estructura actual  

**Privacidad y protección infantil**  
- Cumplimiento RGPD/Ley de Protección de Datos para menores  
- Datos sensibles de rendimiento académico cifrados en tránsito y reposo  
- Sin publicidad ni recolección de datos no académicos  

 **Stack Tecnológico
| Capa | Tecnología | Justificación |
|------|------------|---------------|
| **Frontend** | Next.js (Mobile First) | PWA instalable, acceso universal |
| **Frontend web** | Next.js + Tailwind | Dashboard docentes/padres |
| **Backend** | Node.js + Express | Ecosistema robusto, escalable |
| **Base de datos** | MySQL MariaDB | Relacional para datos estructurados|
| **Notificaciones** | Firebase Cloud Messaging | Push inteligentes |
| **Analytics** | Mixpanel/Amplitude | Tracking de engagement |


---

## FASE 1 — FUNDACIÓN TÉCNICA (Infraestructura Web)  

**Objetivo**  
Establecer base técnica robusta para la aplicación web con diseño modular en `src/estudiants`.  

### 1.1 Inicialización del proyecto móvil  
**Resultado esperado**  
- Aplicación Next.js configurada con módulo `src/estudiants`
- Diseño Mobile First responsivo
- Sistema de build y distribución para iOS/Android  

**Acciones**  
- Crear proyecto con Expo SDK 50+ y TypeScript  
- Configurar estructura: `src/estudiants/{components,services,hooks,types}`
- Implementar Layout específico para estudiantes (sin navegación de admin)
- Configurar ESLint/Prettier con reglas pedagógicas (ej.: prohibir `any` en tipos académicos)  

**Prompt LLM tipo**  
> Inicializa módulo de estudiantes en Next.js con arquitectura limpia y diseño mobile-first.

### 1.2 Conexión a sistemas académicos existentes  
**Resultado esperado**  
- Sincronización segura con SAEFL (base de datos `s2526`)  
- Sincronización segura con SAEFL (base de datos `s2526`)  

**Acciones**  
- Diseñar adaptador de API REST para SAEFL con endpoints específicos  
- Implementar servicio de sincronización incremental con timestamps  
- Establecer protocolo de autenticación OAuth 2.0 con el SGA  

**Checkpoint**  
✅ Perfil académico del estudiante cargado al iniciar sesión  
✅ Materias y grado actual disponibles tras primera sincronización  

### 1.3 Sistema de autenticación y contexto académico  
**Resultado esperado**  
- Login único con credenciales institucionales  
- Contexto de período escolar y lapso activo persistente  
- Gestión de sesiones con expiración académica (fin de lapso)  

**Roles soportados**  
- ESTUDIANTE (acceso completo a gamificación)  
- PROFESOR (vista de progreso de sus secciones)  
- PADRE/REPRESENTANTE (dashboard de logros y áreas de mejora)  

**Checkpoint**  
✅ Transición entre roles sin cerrar sesión  
✅ Contexto de lapso académico visible en todo el flujo de usuario  

---

## FASE 2 — MODELADO DEL DOMINIO PEDAGÓGICO-GAMIFICADO  

**Objetivo**  
Definir el modelo de datos unificado que conecta el currículo académico con mecánicas de juego, basado en el esquema existente de la base de datos `s2526`.  

### 2.1 Definición de tablas académicas existentes  

#### Tablas principales de estudiantes y matrícula

| Tabla | Descripción | Campos clave | Relaciones |
|-------|-------------|--------------|------------|
| **estudiants** | Información personal y académica del estudiante | `id`, `ci_estudiant`, `name`, `lastname`, `grado_inicial_id`, `seccion_inicial`, `representant_id`, `status_active` | ← `users`, `representants`, `planpagos` |
| **inscripcions** | Inscripciones activas por período escolar | `id`, `estudiant_id`, `seccion_id`, `tipo_id`, `programacion_id`, `grupo_estable_id` | → `estudiants`, `seccions`, `tinscripcions` |
| **representants** | Datos de padres/representantes | `id`, `ci_representant`, `name`, `lastname`, `email`, `phone` | ← `estudiants` |

#### Tablas de estructura académica

| Tabla | Descripción | Campos clave | Relaciones |
|-------|-------------|--------------|------------|
| **pestudios** | Planes de estudio institucionales | `id`, `code`, `name`, `mention`, `scale`, `status_active`, `status_build_promotion` | → `peducativos`, ← `grados`, `pensums` |
| **grados** | Grados educativos por plan de estudio | `id`, `pestudio_id`, `name`, `code`, `order`, `status_active` | → `pestudios`, ← `seccions`, `pensums` |
| **seccions** | Secciones por grado | `id`, `grado_id`, `name`, `amount_student`, `status_active` | → `grados`, ← `inscripcions` |
| **pensums** | Asignaturas por grado y plan de estudio | `id`, `pestudio_id`, `grado_id`, `asignatura_id`, `status_active`, `status_active_diagnostic` | → `pestudios`, `grados`, `asignaturas` |
| **asignaturas** | Materias/áreas curriculares | `id`, `code`, `name`, `area_id`, `status_active` | ← `pensums` |

#### Tablas de evaluación y actividades

| Tabla | Descripción | Campos clave | Relaciones |
|-------|-------------|--------------|------------|
| **activities** | Actividades de evaluación planificadas | `id`, `pevaluacion_id`, `finicial`, `ffinal`, `topic`, `thematic`, `status` | → `pevaluacions`, ← `achievements` |
| **achievements** | Logros/indicadores dentro de actividades | `id`, `activity_id`, `name`, `weighting`, `status_quantitative_weighting` | → `activities` |
| **pevaluacions** | Planes de evaluación por lapso | `id`, `asignatura_id`, `lapso_id`, `profesor_id` | → `asignaturas`, `lapsos`, ← `activities` |
| **lapsos** | Períodos de evaluación dentro del año escolar | `id`, `periodo_escolar_id`, `name`, `finicial`, `ffinal`, `status_active` | → `periodo_escolars` |

#### Tablas de diagnóstico y reportes (IA)

| Tabla | Descripción | Campos clave | Relaciones |
|-------|-------------|--------------|------------|
| **diag_referents** | Referentes teóricos para diagnósticos | `id`, `pestudio_id`, `name`, `code`, `version`, `active` | → `pestudios`, ← `diag_mains`, `diag_reports` |
| **diag_mains** | Diagnósticos principales configurados | `id`, `referent_id`, `lapso_id`, `pestudio_id`, `name`, `token`, `active` | → `diag_referents`, `lapsos`, `pestudios` |
| **diag_reports** | Reportes de diagnóstico por estudiante | `id`, `estudiant_id`, `diag_main_id`, `referent_id`, `lapso_id`, `status`, `global` | → `estudiants`, `diag_mains`, `diag_referents`, `lapsos` |
| **diag_report_ai_drafts** | Borradores generados por IA para reportes | `id`, `report_id`, `llm_provider`, `llm_model`, `system_prompt_id`, `user_prompt_id`, `output_text`, `status` | → `diag_reports`, `ai_prompts` |

### 2.2 Tipos TypeScript para el dominio híbrido  

**Resultado esperado**  
- Interfaces que fusionan conceptos académicos y gamificados  
- Enums para escalas de dificultad, tipos de insignias y estados de progreso  

**Estructura**  
```
types/
├── academic/
│   ├── Estudiante.ts           // Basado en tabla `estudiants`
│   ├── Inscripcion.ts          // Basado en tabla `inscripcions`
│   ├── PlanEstudio.ts          // Basado en tabla `pestudios`
│   ├── Grado.ts                // Basado en tabla `grados`
│   ├── Seccion.ts              // Basado en tabla `seccions`
│   ├── Pensum.ts               // Basado en tabla `pensums`
│   ├── Asignatura.ts           // Basado en tabla `asignaturas`
│   └── Lapso.ts                // Basado en tabla `lapsos`
├── evaluation/
│   ├── Actividad.ts            // Basado en tabla `activities`
│   ├── Logro.ts                // Basado en tabla `achievements`
│   ├── PlanEvaluacion.ts       // Basado en tabla `pevaluacions`
│   └── Diagnostico.ts          // Basado en tablas `diag_*`
├── gamification/
│   ├── XPSystem.ts             // Fórmulas de cálculo: base + bonos + streaks
│   ├── Badge.ts                // Tipos: Conquistador, Veloz, Coleccionista, etc.
│   ├── Streak.ts               // Racha de días consecutivos de estudio
│   └── LeaderboardEntry.ts     // Posición en ranking por sección/materia
└── practice/
    ├── Ejercicio.ts            // Metadata: tipo, dificultad, tema, tiempo estimado
    ├── Practica.ts             // Colección estructurada de ejercicios
    └── SesionEstudio.ts        // Flujo adaptativo con retroalimentación en tiempo real
```

### 2.3 Definición de invariantes pedagógicas  

**Reglas críticas**  
- Un estudiante solo puede tener una inscripción activa por período escolar (`inscripcions.estudiant_id` es UNIQUE)  
- Las prácticas se generan solo para asignaturas activas en el pensum del grado actual (`pensums.status_active = 1`)  
- Los diagnósticos solo se generan para lapsos activos con referentes configurados (`diag_mains.active = 1`)  
- El XP mínimo por ejercicio garantiza esfuerzo cognitivo real (no "spam de respuestas")  
- Las insignias de dominio requieren mínimo 80% de aciertos en 3 sesiones consecutivas  
- El sistema de streaks se reinicia tras 48h de inactividad (evita manipulación)  

**Documento vivo**  
`/docs/invariants-pedagogical.md` — Referenciado en validaciones de servicios  

---

## FASE 3 — REPOSITORIOS DE DATOS ACADÉMICOS  

**Objetivo**  
Encapsular COMPLEJIDAD SQL y sincronización con SAEFL fuera de los componentes UI.  

### 3.1 Repositories por agregado académico  

**Estructura**  
```
repositories/
├── academic/
│   ├── EstudianteRepository.ts         // CRUD + sincronización con `estudiants`
│   ├── InscripcionRepository.ts        // Inscripciones activas + historial
│   ├── PlanEstudioRepository.ts        // Planes de estudio vigentes
│   ├── GradoRepository.ts              // Grados por plan de estudio
│   ├── SeccionRepository.ts            // Secciones con cupo actual
│   ├── PensumRepository.ts             // Asignaturas por grado (filtro status_active)
│   └── AsignaturaRepository.ts         // Materias con áreas curriculares
├── evaluation/
│   ├── ActividadRepository.ts          // Actividades por plan de evaluación
│   ├── LogroRepository.ts              // Indicadores/achievements por actividad
│   ├── PlanEvaluacionRepository.ts     // Planes de evaluación por lapso/asignatura
│   ├── LapsoRepository.ts              // Lapsos activos del período escolar
│   └── DiagnosticoRepository.ts        // Reportes y referentes de diagnóstico
├── gamification/
│   ├── XPRepository.ts                 // Historial de XP por estudiante
│   ├── BadgeRepository.ts              // Insignias otorgadas y disponibles
│   ├── StreakRepository.ts             // Racha de estudio diaria
│   └── LeaderboardRepository.ts        // Rankings por sección/materia
└── practice/
    ├── EjercicioRepository.ts          // Banco de ejercicios por tema/dificultad
    ├── PracticaRepository.ts           // Prácticas asignadas y completadas
    └── SesionEstudioRepository.ts      // Sesiones con métricas de rendimiento
```

### 3.2 Transacciones para operaciones críticas  

**Casos que requieren transacción**  
- Sincronización inicial de estudiante (múltiples tablas: `estudiants`, `inscripcions`, `seccions`)  
- Registro de práctica completada + cálculo de XP + verificación de insignias  
- Generación de reporte de diagnóstico con borrador de IA  
- Cierre de lapso académico + actualización de reportes  

**Regla**  
Si afecta historial académico o gamificación → TRANSACTION  

---

## FASE 4 — MOTOR DE GENERACIÓN DE CONTENIDO ACADÉMICO  

**Objetivo**  
Construir sistema inteligente que transforma el pensum en ejercicios personalizados.  

### 4.1 Algoritmo de generación adaptativa  

**Flujo**  
1. Consultar pensum activo del estudiante:  
   ```sql
   SELECT p.asignatura_id, a.name, a.code
   FROM pensums p
   JOIN asignaturas a ON p.asignatura_id = a.id
   JOIN grados g ON p.grado_id = g.id
   JOIN inscripcions i ON g.id = i.seccion_id
   WHERE i.estudiant_id = ? AND p.status_active = 1
   ```
2. Evaluar brechas de conocimiento del estudiante (últimas evaluaciones + sesiones previas)  
3. Seleccionar ejercicios del banco con:  
   - 60% refuerzo de temas débiles  
   - 30% consolidación de temas medianos  
   - 10% desafío en temas fuertes  
4. Ajustar dificultad en tiempo real durante la sesión según tasa de aciertos  

**Checkpoint**  
✅ Generación de práctica de 10 ejercicios en < 800ms  
✅ Ejercicios alineados 100% con el avance curricular institucional  

---

## FASE 5 — SISTEMA DE GAMIFICACIÓN (XP + INSIGNIAS)  

**Objetivo**  
Implementar mecánicas de motivación basadas en psicología del aprendizaje.  

### 5.1 Motor de cálculo de XP  

**Fórmula base**  
```
XP_total = XP_base(ejercicio) 
          + XP_bono_dificultad 
          + XP_streak(días_consecutivos) 
          + XP_velocidad(tiempo < umbral) 
          - XP_correccion_intentos_extra
```

**Reglas**  
- XP_base: 10 puntos por ejercicio correcto (mínimo garantizado)  
- Bono dificultad: +5 (Intermedio), +15 (Avanzado)  
- Streak: +3 puntos/día consecutivo (máx. 7 días = +21)  
- Velocidad: +5 si responde en < 50% del tiempo estimado  
- Corrección: -2 puntos por cada intento fallido adicional  

### 5.2 Sistema de insignias progresivo  

**Tipología basada en actividades existentes**  
| Categoría | Ejemplos | Disparador | Tabla de origen |
|-----------|----------|------------|-----------------|
| **Dominio** | Maestro de [Asignatura] | 90% aciertos en 5 sesiones seguidas | `asignaturas` |
| **Constancia** | Estudiante Diligente (7 días streak) | 7 días consecutivos de práctica | - |
| **Velocidad** | Rayo del Conocimiento | Completar práctica en < 60% tiempo | - |
| **Evaluación** | Campeón de Actividades | Completar todas las `activities` de un lapso | `activities` |
| **Diagnóstico** | Reportero Destacado | Generar 3 `diag_reports` validados | `diag_reports` |

**Checkpoint**  
✅ XP calculado transaccionalmente (sin duplicados por retries)  
✅ Insignias desbloqueadas con animación celebratoria y notificación push  

---

## FASE 6 — SERVICIOS DE CASOS DE USO PEDAGÓGICOS  

**Objetivo**  
Orquestar lógica de negocio que transforma datos académicos en experiencias de aprendizaje.  

### 6.1 Servicios principales  

```
services/
├── practice/
│   ├── GenerateAdaptivePracticeService.ts    // Genera práctica según brechas
│   ├── EvaluatePracticeService.ts            // Corrige y calcula XP
│   └── RecommendNextTopicService.ts          // Sugiere próximo tema a reforzar
├── gamification/
│   ├── CalculateXPService.ts                 // Motor de cálculo con auditoría
│   ├── AwardBadgeService.ts                  // Evalúa y otorga insignias
│   ├── ManageStreakService.ts                // Gestiona rachas diarias
│   └── GenerateLeaderboardService.ts         // Rankings por sección/materia
├── study/
│   ├── CreateGuidedSessionService.ts         // Sesión con retroalimentación paso a paso
│   ├── AdaptSessionDifficultyService.ts      // Ajusta en tiempo real
│   └── GenerateStudyReportService.ts         // Resumen post-sesión con insights
├── diagnostic/
│   ├── GenerateDiagReportService.ts          // Crea reporte basado en `diag_reports`
│   ├── RequestAIDraftService.ts              // Solicita borrador IA para diagnóstico
│   └── ValidateDiagReportService.ts          // Aprueba/firma reporte de diagnóstico
└── academic/
    ├── SyncStudentProfileService.ts          // Sincroniza con `estudiants` + `inscripcions`
    ├── GetActiveCurriculumService.ts         // Obtiene `pensums` activos por estudiante
    └── CheckLapsoStatusService.ts            // Verifica `lapsos` activos
```

**Responsabilidad crítica**  
Cada servicio debe validar:  
- Contexto académico vigente (lapso activo, materia inscrita)  
- Integridad del historial (no permitir retroceder en progreso)  
- Límites anti-manipulación (máx. 200 XP/día para evitar grinding)  

---

## FASE 7 — MVP: NÚCLEO DE APRENDIZAJE PERSONALIZADO  

**Objetivo**  
Entregar versión mínima viable con ciclo completo: práctica → feedback → recompensa.  

### 7.1 Funcionalidades incluidas  
- Dashboard inicial con materias del lapso actual (desde `pensums` + `asignaturas`)  
- Generación de práctica diaria (5 ejercicios por materia)  
- Retroalimentación inmediata post-ejercicio (explicación pedagógica)  
- Sistema XP básico con progreso visual en barra de nivel  
- 5 insignias fundamentales (Bienvenido, Primer Acierto, 3 Días Streak, 50 XP, Tema Completado)  
- Sincronización automática con SAEFL al iniciar sesión  

### 7.2 UX/UI crítica para estudiantes  
- Interfaz minimalista con colores institucionales  
- Microinteracciones celebratorias (confeti al desbloquear insignia)  
- Indicador de progreso académico vs. progreso de juego (diferenciado claramente)  
- Botón de "Ayuda pedagógica" en cada ejercicio (no solo respuesta correcta)  

### 7.3 Criterios de éxito MVP  
✅ 85% de estudiantes completan al menos 1 práctica en los primeros 3 días  
✅ Tiempo promedio por sesión: 8-12 minutos (óptimo cognitivo)  
✅ Tasa de retención D7 > 60%  
✅ Correlación positiva entre XP acumulado y notas institucionales (p > 0.05)  

---

## FASE 8 — SESIONES DE ESTUDIO GUIADAS  

**Objetivo**  
Evolucionar de práctica aislada a experiencias de aprendizaje estructuradas.  

### 8.1 Tipos de sesiones  

| Tipo | Duración | Enfoque | Gamificación |
|------|----------|---------|--------------|
| **Refuerzo Rápido** | 5 min | 3 ejercicios de tema débil | XP acelerado (+20%) |
| **Dominio Profundo** | 15 min | 10 ejercicios + explicaciones | Insignia garantizada |
| **Repaso Lapso** | 20 min | Mix de temas del lapso | XP doble al completar |
| **Desafío Semanal** | 10 min | Ejercicios avanzados | Ranking por sección |

### 8.2 Flujo adaptativo en tiempo real  
1. Ejercicio inicial de diagnóstico  
2. Si acierto > 80%: subir dificultad  
3. Si acierto < 50%: insertar ejercicio de apoyo + explicación  
4. Si streak de 3 aciertos: desbloquear "modo desafío" (+50% XP)  

**Checkpoint**  
✅ 95% de sesiones completadas sin abandono prematuro  
✅ Estudiantes reportan mayor confianza en temas practicados (encuesta post-sesión)  

---

## FASE 9 — INTEGRACIÓN CON DIAGNÓSTICOS DE IA  

**Objetivo**  
Conectar gamificación con sistema de reportes de diagnóstico asistidos por IA.  

### 9.1 Flujo de generación de reportes  

```
Estudiante completa prácticas → Datos de rendimiento → 
Generación de diag_report → Solicitud de AI draft (diag_report_ai_drafts) → 
Revisión docente → Validación y firma
```

### 9.2 Tablas involucradas  

| Tabla | Rol en el flujo |
|-------|-----------------|
| `diag_mains` | Configuración del diagnóstico principal por lapso |
| `diag_referents` | Marco teórico de referencia para el diagnóstico |
| `diag_reports` | Reporte consolidado por estudiante |
| `diag_report_ai_drafts` | Borrador generado por IA con proveedor (openai, gemini, local) |

### 9.3 Servicio de IA para diagnósticos  

**Acciones**  
- Obtener datos de rendimiento del estudiante (prácticas, XP, insignias)  
- Formatear payload para LLM según `system_prompt_id` y `user_prompt_id`  
- Registrar borrador en `diag_report_ai_drafts` con hash de input para idempotencia  
- Permitir edición manual antes de aprobación final  

**Checkpoint**  
✅ 70% de docentes utilizan borradores de IA como base para reportes  
✅ Tiempo de generación de reporte reducido en 60%  

---

## FASE 10 — SISTEMA DE INSIGNIAS AVANZADO  

**Objetivo**  
Profundizar engagement mediante reconocimiento significativo de logros.  

### 10.1 Jerarquía de insignias  

```
Nivel 1: Bronce   → Logros iniciales (completar 5 prácticas)
Nivel 2: Plata    → Constancia (15 días streak)
Nivel 3: Oro      → Dominio (90% aciertos en materia completa)
Nivel 4: Diamante → Excelencia institucional (top 5% sección)
```

### 10.2 Insignias coleccionables por materia  
- Cada materia (`asignaturas`) tiene set de 12 insignias (3 por lapso)  
- Coleccionar todas en una materia desbloquea "Maestría en [Materia]"  
- Visualización en perfil tipo "álbum de cromos" con progreso parcial  

### 10.3 Insignias sociales (opt-in)  
- **Alianza de Estudio**: Completar sesión con compañero vía código QR  
- **Mentor**: Compartir explicación útil que reciba +5 "me gusta"  
- **Embajador**: Invitar a 3 compañeros que completen su primera práctica  

**Checkpoint**  
✅ 40% de estudiantes activos coleccionan al menos 1 set completo por materia  
✅ Insignias sociales aumentan engagement en 25% (vs. solo individuales)  

---

## FASE 11 — INTEGRACIÓN CON CICLO ACADÉMICO INSTITUCIONAL  

**Objetivo**  
Sincronizar gamificación con evaluaciones formales del SAEFL.  

### 11.1 Puentes pedagógicos críticos  

| Evento SAEFL | Acción en app gamificada | Valor XP |
|---------------|--------------------------|----------|
| Cierre de lapso (`lapsos.status_active = 0`) | Generar "Repaso Final" obligatorio | 200 XP |
| Nota < 12/20 en `activities` | Activar modo "Refuerzo Prioritario" | +30% XP |
| Nota ≥ 18/20 en `activities` | Desbloquear "Desafío de Excelencia" | 150 XP |
| Nueva inscripción (`inscripcions`) | Tour interactivo + práctica diagnóstico | 50 XP |

### 11.2 Reporte de insights para docentes  
- Dashboard en portal profesor:  
  - Estudiantes con bajo engagement en app → posible riesgo académico  
  - Temas con mayor tasa de error en prácticas → necesidad de reforzar en aula  
  - Correlación entre XP semanal y evolución de notas en `activities`  

**Checkpoint**  
✅ 70% de docentes utilizan insights de la app para planificar refuerzos  
✅ Reducción del 15% en reprobación en materias con uso intensivo de la app  

---

## FASE 12 — HARDENING Y ESCALABILIDAD  

**Objetivo**  
Garantizar estabilidad, seguridad y capacidad para toda la institución.  

### 12.1 Auditoría académica  
- Log inmutable de:  
  - Todos los ejercicios generados/resueltos  
  - Cálculo de XP con fórmula aplicada  
  - Otorgamiento de insignias con criterios cumplidos  
- Reporte de auditoría descargable para autoridades educativas  

### 12.3 Performance  
- Tiempo de carga inicial < 2s en dispositivos gama media  
- Generación de práctica < 1s incluso con 10k+ ejercicios en banco  
- Soporte para 5,000+ usuarios concurrentes (pico en cierre de lapso)  

---

## CIERRE DEL ROADMAP  

Este roadmap está diseñado para:  
✅ **Priorizar impacto pedagógico** — Cada mecánica de juego está validada por teoría del aprendizaje  
✅ **Respetar el ecosistema institucional** — Integración profunda con SAEFL (base de datos `s2526`)  
✅ **Escalar progresivamente** — MVP funcional en 12 semanas, madurez completa en 9 meses  
✅ **Garantizar equidad** — Diseño inclusivo, sin paywalls para funcionalidades core  

**Criterios de éxito institucional**  
- 📈 30% aumento en práctica autónoma fuera del aula  
- 📉 20% reducción en brecha de rendimiento entre estudiantes  
- 😊 4.2/5 satisfacción estudiantil en encuestas de engagement  
- 👨‍🏫 65% de docentes incorporan insights de la app en planificación pedagógica  