# FASE 3 — REPOSITORIOS

## Decisiones que no se pueden deshacer

> Regla central:
> **si algo cruza un repositorio, deja rastro institucional**.

---

## DECISIÓN 1 — El repositorio es frontera de poder, no helper técnico

### Opción A (correcta)

Repositorio = **único punto autorizado** de acceso a datos académicos/gamificados.

* UI no conoce SQL
* Servicios no hacen joins
* Nada toca la BD sin pasar por repositorio

### Opción B (error clásico)

Repositorio como “wrapper liviano” alrededor de queries sueltas

### Impacto irreversible

* Auditoría imposible
* Duplicación de lógica
* Bugs no rastreables

### Decisión final

**Repositorio como frontera dura** entre dominio y persistencia.

---

## DECISIÓN 2 — Un repositorio por agregado, no por tabla

### Opción A

Repositorio por **agregado semántico**:

* Estudiante
* Inscripción
* Plan de evaluación
* Sesión de estudio

### Opción B

Repositorio 1:1 con tablas

### Por qué no se puede deshacer

* Las transacciones reales cruzan tablas
* El dominio no piensa en tablas

### Decisión final

Un repositorio **representa una unidad de consistencia**, no una tabla.

---

## DECISIÓN 3 — Repositorios académicos ≠ repositorios gamificados

### Opción A

Separación explícita:

* `academic/*`
* `evaluation/*`
* `gamification/*`

### Opción B

Repositorios híbridos (“StudentProgressRepository”)

### Impacto irreversible

* Contaminación conceptual
* Cambios imposibles sin romper contratos

### Decisión final

La separación del dominio **se refleja exactamente en los repositorios**.

---

## DECISIÓN 4 — Read models y write models NO son simétricos

### Opción A

* Reads optimizados para UX
* Writes estrictos y validados

### Opción B

Mismo método para leer y escribir

### Por qué es irreversible

* Performance
* Seguridad

### Decisión final

Aceptar **asimetría** desde el inicio.

---

## DECISIÓN 5 — Transacciones como política, no como excepción

### Opción A

Toda operación que:

* afecte historial
* calcule XP
* otorgue insignias
  → **siempre transaccional**

### Opción B

Transacciones solo “cuando falle algo”

### Impacto irreversible

* XP duplicado
* Streaks rotos
* Conflictos legales

### Decisión final

Si hay efecto académico o gamificado, **hay transacción**.

---

## DECISIÓN 6 — Idempotencia obligatoria en operaciones sensibles

### Opción A

Toda escritura crítica es idempotente:

* sync
* XP
* insignias
* diagnósticos

### Opción B

Confiar en que “no se va a repetir”

### Por qué no se puede revertir luego

* Latencia móvil
* Fallos intermitentes

### Decisión final

**Idempotencia por diseño**, no como parche.

---

## DECISIÓN 7 — El repositorio NO contiene lógica pedagógica

### Opción A

Repositorio:

* valida invariantes estructurales
* ejecuta transacciones
* persiste hechos

### Opción B

Repositorio “inteligente” que decide reglas

### Impacto irreversible

* Dominio disperso
* Reglas invisibles
* Servicios inútiles

### Decisión final

El repositorio **no decide**, solo **hace cumplir**.

---

## DECISIÓN 8 — Cache local es un repositorio, no un hack

### Opción A

Repositorio local con:

* mismo contrato
* misma semántica
* reconciliación explícita

### Opción B

Cache como almacenamiento informal

### Por qué es irreversible

* Conflictos de estado
* Debug infernal

### Decisión final

Local y remoto **implementan la misma interfaz conceptual**.

---

## DECISIÓN 9 — Fallar ruidosamente > fallar silenciosamente

### Opción A

Errores explícitos:

* contexto inválido
* lapso cerrado
* inscripción inexistente

### Opción B

Devolver arrays vacíos / nulls

### Impacto irreversible

* Datos corruptos
* Experiencias pedagógicas falsas

### Decisión final

El repositorio **grita cuando algo no cuadra**.

---

## DECISIÓN 10 — Qué NO hace un repositorio (límites claros)

Se decide explícitamente que un repositorio:

❌ No:

* calcula XP
* decide insignias
* adapta dificultad
* interpreta rendimiento

✅ Sí:

* persiste hechos
* garantiza consistencia
* expone datos confiables

---

## Criterio de salida de FASE 3

FASE 3 se aprueba solo si:

* [ ] Ningún componente UI toca SQL
* [ ] Ningún servicio construye queries
* [ ] Transacciones cubren todos los efectos críticos
* [ ] Repositorios respetan fronteras de dominio

---

## Veredicto PM

FASE 3 es donde muchos proyectos educativos **se vuelven frágiles sin saberlo**.
Un repositorio mal concebido no explota hoy; **explota en cierre de lapso**, cuando ya es tarde.