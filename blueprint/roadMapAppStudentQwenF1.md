# FASE 1 — FUNDACIÓN TÉCNICA

## Desglose por DECISIONES IRREVERSIBLES

> Regla de oro:
> **en FASE 1 no se optimiza, se fija dirección**.

---

## DECISIÓN 1 — Mobile-first real vs. “web con wrapper”

### Opción A (correcta para este roadmap)

**Aplicación móvil nativa como producto primario**

* React Native (Expo Managed)
* UX diseñada para sesiones cortas (5–15 min)
* Offline como requisito, no como mejora futura

### Opción B (tentadora pero errónea)

Web app + PWA + wrapper móvil

### Por qué es irreversible

* La arquitectura offline-first **no se injerta después**
* Los patrones de UX cognitivo cambian completamente
* El motor de prácticas depende del tiempo y contexto móvil

### Decisión recomendada

**Opción A obligatoria**

> Si el mobile no es first-class, la app fracasa como herramienta pedagógica cotidiana.

---

## DECISIÓN 2 — Expo Managed vs. Bare / Custom Native

### Opción A

Expo Managed Workflow

### Opción B

Bare workflow / RN CLI puro

### Impacto irreversible

* Expo fija:

  * pipeline de build
  * ciclo de upgrades
  * compatibilidad de librerías nativas
* Migrar **fuera** de Expo después es costoso y doloroso

### Análisis crítico

* No hay requisitos nativos exóticos (Bluetooth, sensores críticos)
* El roadmap prioriza velocidad institucional y estabilidad

### Decisión recomendada

**Expo Managed** con regla explícita:

> Cualquier dependencia nativa debe justificar por qué Expo no basta.

---

## DECISIÓN 3 — Offline-first como arquitectura, no como feature

### Opción A

Offline-first desde el día 1

### Opción B

Offline “cuando tengamos tiempo”

### Por qué no es reversible

* Los modelos de datos
* Las colisiones de estado
* La semántica de “verdad” (SAEFL vs local)

Si se ignora ahora, luego:

* XP se duplica
* Streaks se rompen
* Confianza institucional se pierde

### Decisión recomendada

Offline-first **obligatorio**, incluso con:

* funcionalidades limitadas
* datos parciales

---

## DECISIÓN 4 — Contexto académico como estado global obligatorio

### Opción A

Contexto académico global (grado, lapso, rol)

### Opción B

Contexto inferido por pantalla

### Impacto irreversible

* Servicios
* Cache
* Validaciones
* Seguridad

### Regla irreversible

> Ninguna vista se renderiza sin contexto académico explícito.

Esto obliga a:

* errores visibles
* estados claros
* menos bugs “silenciosos”

---

## DECISIÓN 5 — Multi-rol en una sola app vs. apps separadas

### Opción A

Una app, múltiples roles

### Opción B

App estudiante / app profesor / app padre

### Análisis sin romanticismo

* Apps separadas:

  * duplican lógica
  * fragmentan contexto
  * rompen sincronización familiar

### Riesgo real

Complejidad de permisos

### Decisión recomendada

**Una sola app, roles dinámicos**, con:

* feature flags
* navegación contextual

> Separar por rol es cómodo hoy, caro mañana.

---

## DECISIÓN 6 — Cache académico local como “mini-sistema”

### Opción A

SQLite estructurado (espejo parcial de s2526)

### Opción B

AsyncStorage / key-value suelto

### Por qué es irreversible

* Queries complejas offline
* Reconciliación posterior
* Consistencia pedagógica

### Decisión recomendada

**SQLite desde el inicio**, aunque duela un poco más.

---

## DECISIÓN 7 — Sin lógica de negocio en UI (tolerancia cero)

### Opción A

UI pasiva + servicios

### Opción B

“Un poquito de lógica en el componente”

### Impacto irreversible

* Testing
* Auditoría
* Escalabilidad

En educación institucional:

> Lo que no se puede auditar, no existe.

### Decisión recomendada

**Tolerancia cero** a lógica pedagógica en UI.

---

## DECISIÓN 8 — Tipado estricto como contrato pedagógico

### Opción A

TypeScript estricto (sin `any`)

### Opción B

Flexibilidad inicial

### Por qué es irreversible

* Los tipos definen el dominio
* El dominio académico **no es flexible**

Un `any` hoy =
un bug pedagógico mañana

### Decisión recomendada

Strict TS desde el día 1.

---

## DECISIÓN 9 — Autenticación institucional como frontera dura

### Opción A

OAuth2 institucional desde el inicio

### Opción B

Auth temporal “para probar”

### Riesgo real

* Datos de menores
* Fugas de contexto
* Migraciones dolorosas

### Decisión recomendada

Auth institucional **desde la primera build usable**.

---

## DECISIÓN 10 — Qué NO entra en FASE 1 (igual de importante)

Se decide explícitamente **no construir**:

* Gamificación visible
* XP
* Insignias
* Rankings
* IA
* Adaptatividad avanzada

> FASE 1 es suelo, no edificio.

---

## Criterio de salida de FASE 1 (GO / NO-GO)

FASE 1 solo se considera completa si:

* [ ] App móvil usable offline
* [ ] Contexto académico persistente
* [ ] Login institucional real
* [ ] Cambio de rol sin reinstalar
* [ ] Cero lógica pedagógica en UI
* [ ] Cache local coherente con SAEFL

---

## Juicio final (sin suavizar)

Si FASE 1 se hace bien:

* FASES 2–7 fluyen casi solas.

Si FASE 1 se hace “rápida”:

* El proyecto **no muere**, pero se vuelve:

  * frágil
  * in-auditable
  * políticamente inviable en una institución escolar.