# Invariantes Pedagógicas: Contrato de Dominio

Este documento define las reglas de negocio inmutables que deben ser aplicadas en las validaciones de servicios y lógica de dominio. Estas reglas garantizan la integridad del proceso educativo.

## 1. Integridad de los Puntos de Experiencia (XP)
* **Actividad Real**: Un estudiante **solo** puede ganar XP si completa una actividad académica real validada por el motor de contenido.
* **Anti-Farmeo**: No se permite la repetición indefinida del mismo ejercicio o tema con el único fin de acumular puntos. El sistema detectará y limitará recompensas por repetición tras alcanzar el objetivo de refuerzo.

## 2. Contextualización del Contenido
* **Pensum Activo**: Toda práctica o sesión de estudio debe pertenecer a un `pensum` marcado como activo en el sistema institucional.
* **Intención Pedagógica**: Cada actividad generada debe tener un objetivo cognitivo explícito (ej: refuerzo de [tema], diagnóstico de [habilidad]).

## 3. Mérito e Insignias
* **Reconocimiento Objetivo**: Ninguna insignia se otorga por meras micro-interacciones o tiempo de conexión pasivo. Cada logro debe estar ligado a hitos académicos o hábitos de estudio verificables.
* **Consistencia del Streak**: El sistema de rachas (streaks) debe basarse en días de práctica efectiva, no en el simple ingreso a la aplicación.

## 4. Diagnóstico de Rendimiento
* **Validez Técnica**: No se puede generar un reporte de diagnóstico (`diag_reports`) si no cuenta con un referente teórico configurado (`diag_referents`) que sustente la evaluación.
* **Evidencia**: Los reportes de diagnóstico deben basarse en evidencias acumuladas de sesiones de estudio, no en inferencias aisladas.

---
> [!IMPORTANT]
> Estas invariantes son el "contrato" bajo el cual opera el sistema. Cualquier cambio en estas reglas requiere una revisión institucional completa.
