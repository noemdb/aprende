# FASE 0 — PRINCIPIOS RECTORES (GATE INSTITUCIONAL)

## Rol de esta fase

Esta fase **no agrega funcionalidades**.
Agrega **restricciones conscientes** que evitan:

* Gamificación tóxica
* Sesgos pedagógicos ocultos
* Refactors imposibles por violar el esquema académico
* Riesgos legales con datos de menores

Si esta fase falla, **todo lo demás es técnicamente brillante pero institucionalmente inválido**.

---

## 0.1 Declaración formal de principios (Documento vinculante)

### Objetivo

Convertir los principios rectores en **reglas operativas**, no en valores decorativos.

### Entregable

`/docs/principios-rectores.md`

### Contenido mínimo obligatorio

#### 1. Integridad pedagógica sobre engagement

Reglas ejecutables:

* Ningún ejercicio existe sin:

  * asignatura (`asignaturas.id`)
  * grado (`grados.id`)
  * lapso activo (`lapsos.status_active = 1`)
* La gamificación **no modifica notas**, solo acompaña.
* Toda explicación pedagógica debe existir **aunque la respuesta sea correcta**
  (evita aprendizaje superficial por refuerzo positivo).

#### 2. Progresión determinística

Reglas ejecutables:

* Toda fórmula XP:

  * está versionada
  * es auditable
  * produce el mismo resultado con los mismos inputs
* Prohibido:

  * RNG
  * multiplicadores ocultos
  * ajustes “automáticos” sin log

#### 3. Contexto académico como fuente de verdad

Reglas ejecutables:

* SAEFL (`s2526`) es **read-only** desde la app gamificada.
* Si hay conflicto:

  * SAEFL gana
  * la app se reconcilia
* No existen:

  * materias “extra”
  * lapsos simulados
  * grados inferidos

#### 4. Esquema de BD inmutable

Reglas ejecutables:

* No se renombran tablas ni columnas
* Nuevas tablas:

  * solo por extensión
  * siempre con FK explícitas a s2526
* Cualquier PR que viole esto → rechazado

#### 5. Privacidad y protección infantil

Reglas ejecutables:

* Ningún dato académico se usa para:

  * rankings globales
  * comparaciones inter-institucionales
* Leaderboards:

  * siempre por sección o grupo
  * nunca por colegio completo
* Cifrado obligatorio:

  * en tránsito
  * en reposo
  * en backups

---

## 0.2 Documento de invariantes pedagógicas (contrato de dominio)

### Objetivo

Definir **qué NO puede pasar nunca**, incluso si el producto “crece”.

### Entregable

`/docs/invariants-pedagogical.md`

### Invariantes críticas (ejecutables)

* Un estudiante:

  * no puede ganar XP sin actividad académica real
  * no puede repetir indefinidamente el mismo ejercicio para farmear
* Una práctica:

  * siempre pertenece a un pensum activo
  * siempre tiene objetivo cognitivo explícito
* Una insignia:

  * nunca se otorga solo por tiempo de uso
* Un streak:

  * no puede forzarse con micro-interacciones vacías
* Un diagnóstico:

  * no se genera sin referente (`diag_referents`)

> Estas invariantes deben reflejarse luego en validaciones de servicios.

---

## 0.3 Definición de límites de gamificación (anti-dopamina)

### Objetivo

Evitar diseño adictivo incompatible con contexto escolar.

### Entregable

Sección específica en principios rectores

### Límites explícitos

* XP diario máximo (hard cap)
* Prohibido:

  * loot boxes
  * recompensas sorpresa
  * timers manipulativos
* Feedback negativo siempre constructivo, nunca punitivo

---

## 0.4 Mapa de responsabilidades por rol

### Objetivo

Evitar que la app invada competencias docentes.

### Entregable

`/docs/roles-y-limites.md`

| Rol           | Puede                              | No puede                       |
| ------------- | ---------------------------------- | ------------------------------ |
| Estudiante    | Practicar, ver progreso            | Ver notas oficiales            |
| Profesor      | Ver insights, validar diagnósticos | Editar XP                      |
| Representante | Ver logros y alertas               | Comparar con otros estudiantes |
| Sistema       | Recomendar                         | Evaluar formalmente            |

---

## 0.5 Checklist de salida (GO / NO-GO)

### La fase 0 **solo se aprueba si**:

* [ ] Principios rectores firmados (producto + pedagogía + legal)
* [ ] Invariantes validadas contra esquema `s2526`
* [ ] Límites de gamificación documentados
* [ ] Riesgos RGPD infantil identificados y mitigados
* [ ] Aprobación institucional para avanzar

> ❌ Sin este GO, **no se escribe una sola línea de código**.