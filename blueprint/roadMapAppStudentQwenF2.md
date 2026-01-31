# FASE 2 — MODELADO DEL DOMINIO

## Decisiones que no se pueden deshacer

> Regla central:
> **el dominio académico manda; la gamificación se subordina**.

---

## DECISIÓN 1 — El dominio académico es soberano (no negociable)

### Opción A (correcta)

El modelo académico **es un espejo semántico** de `s2526`.

* Nombres conceptuales alineados a tablas reales
* Campos equivalentes (aunque se adapten a TS)
* Relaciones idénticas

### Opción B (error común)

“Limpiar” el dominio para hacerlo más bonito:

* `Student`
* `Course`
* `Subject`
* `Enrollment`

### Por qué es irreversible

* Auditorías
* Debug en producción
* Trazabilidad legal

Una abstracción bonita hoy =
una investigación imposible mañana.

### Decisión final

**El lenguaje del dominio es el del sistema académico**, incluso si es incómodo.

---

## DECISIÓN 2 — Dominio académico y dominio gamificado NO se mezclan

### Opción A

Dos dominios explícitos con frontera dura:

* `academic/*`
* `gamification/*`

Comunicación solo vía:

* IDs académicos
* eventos explícitos
* servicios orquestadores

### Opción B

Campos gamificados dentro de entidades académicas
(`xp` en `Estudiante`, por ejemplo)

### Impacto irreversible

* Corrupción del historial académico
* Dependencias circulares
* Imposibilidad de auditar

### Decisión final

**Cero campos gamificados en entidades académicas.**

---

## DECISIÓN 3 — El progreso académico NO es un número

### Opción A

Progreso académico = conjunto de evidencias:

* actividades
* logros
* diagnósticos
* lapsos

### Opción B

Progreso como porcentaje único (0–100%)

### Por qué es irreversible

* Un porcentaje borra contexto
* La pedagogía no es lineal
* Las decisiones docentes se vuelven opacas

### Decisión final

El dominio **no expone “progreso” agregado**;
solo **hechos académicos**.

---

## DECISIÓN 4 — Invariantes como código futuro, no como comentario

### Opción A

Invariantes definidas ahora y reflejadas luego en:

* validaciones
* servicios
* transacciones

### Opción B

“Invariantes mentales” del equipo

### Impacto irreversible

* Inconsistencias silenciosas
* Bugs que parecen UX
* Violaciones pedagógicas no detectadas

### Decisión final

Las invariantes **son parte del dominio**, no documentación opcional.

---

## DECISIÓN 5 — El tiempo académico es discreto, no continuo

### Opción A

El tiempo se modela en:

* períodos
* lapsos
* ventanas activas

### Opción B

Timestamp libre + filtros

### Por qué no se puede deshacer

* El cierre de lapso es un evento institucional
* El “antes/después” importa legalmente

### Decisión final

Todo estado académico **existe dentro de un lapso** o no existe.

---

## DECISIÓN 6 — Diagnóstico ≠ Evaluación ≠ Gamificación

### Opción A

Tres conceptos distintos:

* Evaluación (activities, achievements)
* Diagnóstico (diag_*)
* Gamificación (XP, badges)

### Opción B

Unificarlos bajo “performance”

### Impacto irreversible

* Confusión docente
* Uso indebido de IA
* Riesgos éticos

### Decisión final

**Separación conceptual absoluta**, aunque compartan datos.

---

## DECISIÓN 7 — IA nunca escribe “verdad académica”

### Opción A

IA = borrador asistido, siempre humano-in-the-loop

### Opción B

IA genera diagnósticos finales

### Por qué es irreversible

* Responsabilidad institucional
* Sesgos
* Defensa ante padres/autoridades

### Decisión final

El dominio **marca explícitamente** qué es:

* humano
* asistido
* generado

---

## DECISIÓN 8 — El estudiante no es una entidad autónoma

### Opción A

El estudiante **siempre existe en contexto**:

* grado
* sección
* lapso
* pensum

### Opción B

Estudiante como entidad central aislada

### Impacto irreversible

* Reglas ambiguas
* Errores de asignación
* Historias académicas incoherentes

### Decisión final

No hay estudiante “fuera del contexto académico”.

---

## DECISIÓN 9 — Las relaciones importan más que los atributos

### Opción A

Modelar relaciones explícitas y navegables

### Opción B

Aplanar entidades para “simplicidad”

### Por qué no se puede revertir fácilmente

* Queries complejas
* Auditoría

### Decisión final

Preferir **relaciones claras** aunque el modelo sea más grande.

---

## DECISIÓN 10 — Qué NO se modela todavía (disciplina)

Se decide explícitamente NO modelar:

* Emociones del estudiante
* Motivación subjetiva
* Comparaciones entre estudiantes
* Predicciones académicas

> El dominio describe **hechos**, no interpretaciones.

---

## Criterio de salida de FASE 2

FASE 2 solo se aprueba si:

* [ ] El dominio académico es trazable 1:1 a `s2526`
* [ ] La gamificación no contamina entidades académicas
* [ ] Las invariantes están definidas y revisadas
* [ ] El tiempo académico está modelado explícitamente
* [ ] La IA está claramente limitada conceptualmente

---

## Veredicto PM (sin anestesia)

FASE 2 define **qué tipo de institución eres**:

* Si modelas mal → haces una app “divertida”
* Si modelas bien → construyes un **sistema educativo confiable**