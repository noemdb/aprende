# Principios Rectores: Reglas Operativas

Este documento establece las restricciones conscientes y reglas de negocio obligatorias que rigen el desarrollo y operación de la aplicación del estudiante.

## 1. Integridad Pedagógica sobre Engagement
* **Vinculación Curricular**: Ningún ejercicio o actividad puede existir sin una relación explícita con:
  * Asignatura (`asignaturas.id`)
  * Grado (`grados.id`)
  * Lapso activo (`lapsos.status_active = 1`)
* **Subordinación de Gamificación**: La gamificación nunca modifica ni sustituye las notas oficiales. Su función es exclusivamente motivacional y de acompañamiento.
* **Explicación Obligatoria**: Toda respuesta (correcta o incorrecta) debe incluir una explicación pedagógica para evitar el aprendizaje superficial por refuerzo positivo.

## 2. Progresión Determinística
* **Transparencia en XP**: Toda fórmula de cálculo de puntos de experiencia (XP) debe estar versionada, ser auditable y producir resultados consistentes basados estrictamente en los inputs definidos.
* **Prohibición de Aleatoriedad**: Se prohíbe el uso de RNG (Generadores de Números Aleatorios), multiplicadores ocultos o ajustes automáticos de dificultad que no dejen un log claro de su justificación.

## 3. Fuente de Verdad: Contexto Académico
* **Acceso a SAEFL (s2526)**: El sistema institucional es de **solo lectura** para esta aplicación. 
* **Prioridad de Consistencia**: En caso de conflicto de datos, prevalece la información del SAEFL. La aplicación debe contar con mecanismos de reconciliación para alinearse con la verdad institucional.
* **Estructura Estricta**: No se permiten materias "extra", lapsos simulados o grados que no existan formalmente en la configuración académica vigente.

## 4. Esquema de Base de Datos Inmutable
* **Respeto al Legado**: No se renombran tablas ni columnas existentes en el esquema académico.
* **Extensión Segura**: Las nuevas tablas para gamificación deben integrarse mediante extensión, manteniendo siempre referencias (Foreign Keys) explícitas hacia el esquema `s2526`.

## 5. Privacidad y Protección Infantil (RGPD/LOPD)
* **Limitación de Alcance**: Los datos académicos y de progreso no se utilizarán para rankings globales o comparaciones externas a la institución.
* **Fragmentación de Leaderboards**: Las clasificaciones se limitan a la sección o grupo académico del estudiante; nunca al nivel de la institución completa.
* **Cifrado de Extremo a Extremo**: Los datos sensibles de rendimiento están cifrados en tránsito, en reposo y en sus respectivos respaldos.

## 6. Límites de Gamificación (Anti-Dopamina)
* **Cap de Actividad**: Se establece un límite máximo diario (hard cap) de XP para evitar comportamientos obsesivos o el "farmeo" de puntos en detrimento del descanso.
* **Prohibición de Mecánicas de Azar**: Están prohibidas las loot boxes (cajas de botín), recompensas sorpresa con valor lúdico excesivo o timers manipulativos que fuercen la conexión.
* **Feedback Positivo**: Los errores se tratan como oportunidades de aprendizaje; el feedback nunca será punitivo ni generará ansiedad en el estudiante.
