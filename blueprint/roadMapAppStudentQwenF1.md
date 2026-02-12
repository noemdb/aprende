# FASE 1 — FUNDACIÓN TÉCNICA

## Desglose por DECISIONES IRREVERSIBLES

> Regla de oro:
> **en FASE 1 no se optimiza, se fija dirección**.

---

## DECISIÓN 1 — Mobile-first real vs. “web con wrapper”

### Opción A (correcta para este roadmap)

**Aplicación Web Adaptativa (Mobile First)**

- Next.js + TailwindCSS
- Módulo aislado en `src/estudiants`
- Acceso inmediato sin instalación

### Opción B (tentadora pero errónea)

Web app + PWA + wrapper móvil

### Por qué es irreversible

- Dependencia de stores de aplicaciones (Apple/Google)
- Barrera de entrada (instalación)
- Complejidad de mantenimiento de dos codebases

### Decisión recomendada

**Opción A obligatoria**

> La web permite iterar rápido y eliminar barreras de acceso.

---

## DECISIÓN 2 — PWA para Móviles vs. Aplicaciones Nativas (Postergar a v2.0)

### Opción A (DECISIÓN ACTUAL)

**Progressive Web App (PWA) con Next.js**

- Instalable desde navegador (sin app stores)
- Funcionamiento offline básico
- Notificaciones push (Android completo, iOS limitado)
- Desarrollo único para web y móvil

### Opción B (ROADMAP FUTURO v2.0)

**Aplicaciones Nativas (React Native / Flutter)**

- Acceso completo a APIs nativas
- Publicación en App Store / Play Store
- Funcionalidades avanzadas: cámara, sensores, NFC

### Impacto irreversible de elegir PWA primero

- **Ventajas**:
  - Cero fricción de instalación (no stores)
  - Iteración rápida sin aprobaciones de tiendas
  - Un código para web + móvil
  - Migrar a nativo luego es posible con Capacitor

- **Limitaciones actuales**:
  - Sin funcionalidades nativas avanzadas (cámara, sensores)
  - Notificaciones push limitadas en iOS
  - Experiencia ligeramente inferior vs. app nativa

### Análisis crítico

- No hay requisitos nativos exóticos para MVP (Bluetooth, sensores críticos)
- El roadmap prioriza velocidad institucional y estabilidad
- Estudiantes pueden usar desde cualquier dispositivo sin instalar

### Decisión recomendada

**Next.js PWA** con regla explícita:

> Todo componente debe ser responsive y touch-friendly.  
> La infraestructura móvil nativa se desarrollará en **versión 2.0** si el engagement valida la necesidad.

---

---

## DECISIÓN 3 — Contexto académico como estado global obligatorio

### Opción A

Contexto académico global (grado, lapso, rol)

### Opción B

Contexto inferido por pantalla

### Impacto irreversible

- Servicios
- Cache
- Validaciones
- Seguridad

### Regla irreversible

> Ninguna vista se renderiza sin contexto académico explícito.

Esto obliga a:

- errores visibles
- estados claros
- menos bugs “silenciosos”

---

## DECISIÓN 4 — Multi-rol en una sola app vs. apps separadas

### Opción A

Una app, múltiples roles

### Opción B

App estudiante / app profesor / app padre

### Análisis sin romanticismo

- Apps separadas:
  - duplican lógica
  - fragmentan contexto
  - rompen sincronización familiar

### Riesgo real

Complejidad de permisos

### Decisión recomendada

**Una sola app, roles dinámicos**, con:

- feature flags
- navegación contextual

> Separar por rol es cómodo hoy, caro mañana.

---

---

## DECISIÓN 5 — Sin lógica de negocio en UI (tolerancia cero)

### Opción A

UI pasiva + servicios

### Opción B

“Un poquito de lógica en el componente”

### Impacto irreversible

- Testing
- Auditoría
- Escalabilidad

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

- Los tipos definen el dominio
- El dominio académico **no es flexible**

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

- Datos de menores
- Fugas de contexto
- Migraciones dolorosas

### Decisión recomendada

**Auth Local (Credenciales) para Fase 1**.

> Se ha decidido posponer OAuth 2.0 institucional.
> Se prioriza login funcional seguro via credenciales (`src/auth.ts`).

---

## DECISIÓN 8 — Qué NO entra en FASE 1 (igual de importante)

Se decide explícitamente **no construir**:

- Gamificación visible
- XP
- Insignias
- Rankings
- IA
- Adaptatividad avanzada

> FASE 1 es suelo, no edificio.

---

## Criterio de salida de FASE 1 (GO / NO-GO)

FASE 1 solo se considera completa si:

- [ ] Contexto académico persistente
- [x] Login funcional (Credenciales locales)
- [ ] Cambio de rol sin reinstalar
- [ ] Cero lógica pedagógica en UI

---

## Juicio final (sin suavizar)

Si FASE 1 se hace bien:

- FASES 2–7 fluyen casi solas.

Si FASE 1 se hace “rápida”:

- El proyecto **no muere**, pero se vuelve:
  - frágil
  - in-auditable
  - políticamente inviable en una institución escolar.
