# FASE 1 — FUNDACIÓN TÉCNICA

## Desglose por DECISIONES IRREVERSIBLES

> Regla de oro:
> **en FASE 1 no se optimiza, se fija dirección**.

---

## DECISIÓN 1 — Mobile-first real vs. “web con wrapper”

### Opción A (correcta para este roadmap)

**Aplicación Web Adaptativa (Mobile First)**

* Next.js + TailwindCSS
* Módulo aislado en `src/estudiants`
* Acceso inmediato sin instalación

### Opción B (tentadora pero errónea)

Web app + PWA + wrapper móvil

### Por qué es irreversible

* Dependencia de stores de aplicaciones (Apple/Google)
* Barrera de entrada (instalación)
* Complejidad de mantenimiento de dos codebases

### Decisión recomendada

**Opción A obligatoria**

> La web permite iterar rápido y eliminar barreras de acceso.

---

## DECISIÓN 2 — Expo Managed vs. Bare / Custom Native

### Opción A

Single Page Application (SPA / PWA)

### Opción B

Next.js (App Router)

### Impacto irreversible

* Expo fija:

  * pipeline de build
  * ciclo de upgrades
  * compatibilidad de librerías nativas
* Migrar a móvil nativo luego es posible con Capacitor/Expo

### Análisis crítico

* No hay requisitos nativos exóticos (Bluetooth, sensores críticos)
* El roadmap prioriza velocidad institucional y estabilidad

### Decisión recomendada

**Next.js PWA** con regla explícita:

> Todo componente debe ser responsive y touch-friendly.

---

---

## DECISIÓN 3 — Contexto académico como estado global obligatorio

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

## DECISIÓN 4 — Multi-rol en una sola app vs. apps separadas

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

---

## DECISIÓN 5 — Sin lógica de negocio en UI (tolerancia cero)

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

## DECISIÓN 6 — Tipado estricto como contrato pedagógico

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

## DECISIÓN 7 — Autenticación institucional como frontera dura

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

## DECISIÓN 8 — Qué NO entra en FASE 1 (igual de importante)

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

* [ ] Contexto académico persistente
* [ ] Login institucional real
* [ ] Cambio de rol sin reinstalar
* [ ] Cero lógica pedagógica en UI

---

## Juicio final (sin suavizar)

Si FASE 1 se hace bien:

* FASES 2–7 fluyen casi solas.

Si FASE 1 se hace “rápida”:

* El proyecto **no muere**, pero se vuelve:

  * frágil
  * in-auditable
  * políticamente inviable en una institución escolar.