---
title: 'Propuesta de solución cloud'
description: 'Arquitectura cloud propuesta para modernizar los canales digitales de FINCA Honduras.'
order: 4
updatedAt: '2026-09-24'
---

En esta sección se diseña la solución tecnológica propuesta para FINCA Honduras, con énfasis en la automatización gradual de las operaciones de mayor demanda y menor riesgo.

## Proveedor cloud seleccionado

**Amazon Web Services (AWS)** es el proveedor seleccionado por su soporte para servicios de migración e integración, así como por la disponibilidad de un modelo de costos basado en el uso. Este modelo resulta adecuado para el escalamiento gradual de la solución y para el tamaño de la operación de FINCA.

## Arquitectura propuesta

Tomando en cuenta la existencia de diferentes tipos de clientes y el manejo actual de módulos, se recomienda implementar una arquitectura serverless con microservicios.

El flujo principal propuesto es:

`Cliente -> CloudFront -> API Gateway -> Cognito (autenticación) -> Lambda -> Aurora MySQL`

La solución también incluye una conexión híbrida hacia la infraestructura local. La nube consultará las bases de datos MySQL que ya alimentan el Sistema de Novedades, sin conectarse directamente al sistema AS400.

## Frontend

El portal web se desarrollará con React y se alojará en Amazon S3, distribuido mediante CloudFront. También se contempla una aplicación móvil desarrollada con React Native. Ambos canales consumirán las mismas APIs para mantener una experiencia consistente y facilitar la evolución de la plataforma.

## Backend

Los microservicios se distribuirán según el tipo de procesamiento requerido:

- **AWS Lambda:** funciones ligeras y de alta frecuencia, como consulta de saldos, políticas y productos.
- **Amazon ECS Fargate:** procesos más pesados o que requieren un flujo de operación más amplio, como pagos y acuerdos de pago.

Esta distribución prioriza las actividades con mayor volumen y porcentaje de automatización identificado en el análisis de demanda.

## Servicios disponibles

La solución contempla los siguientes servicios para el portal web y la aplicación móvil. La presentación pública se limita a las capacidades funcionales, sin exponer la estructura técnica de las interfaces de integración.

| Servicio                          | Descripción                                                                                               |
| --------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Autenticación y acceso seguro** | Inicio y renovación de sesión para clientes individuales, clientes organizacionales y empleados internos. |
| **Saldos y movimientos**          | Consulta de saldos y revisión del historial de operaciones de las cuentas.                                |
| **Productos financieros**         | Consulta de los productos y servicios financieros disponibles.                                            |
| **Información y políticas**       | Consulta de información institucional, políticas y condiciones aplicables.                                |
| **Depósitos**                     | Registro, confirmación y consulta de operaciones de depósito.                                             |
| **Pagos**                         | Registro y consulta del estado de operaciones de pago, con validación según corresponda.                  |
| **Acuerdos de pago**              | Gestión de solicitudes y seguimiento de acuerdos que requieren análisis del personal.                     |
| **Gestión de reclamos**           | Registro y seguimiento de reclamos, con intervención humana para su resolución.                           |
| **Sucursales**                    | Consulta de las agencias y sucursales disponibles.                                                        |

## Bases de datos

Se propone utilizar **Amazon Aurora MySQL** como réplica de lectura sincronizada desde las bases de datos MySQL existentes. Este enfoque permite exponer información al portal sin convertir al nuevo canal en el sistema principal de registro.

![Esquema de la réplica de datos hacia Aurora MySQL](/image4.png)

## Seguridad

La arquitectura utilizará una VPC con subredes privadas para proteger los componentes internos. El monitoreo, la detección de amenazas y la auditoría se apoyarán en:

- **Amazon GuardDuty** para la detección de amenazas.
- **AWS CloudTrail** para el registro y la auditoría de actividades.

## Autenticación

La autenticación se implementará con **Amazon Cognito**, utilizando autenticación multifactor (MFA) y OAuth 2.0. Se definirán roles diferenciados para:

- Clientes individuales.
- Clientes organizacionales.
- Empleados internos.

## Integración con los sistemas actuales

La conexión con la infraestructura interna se realizará mediante una **VPN Site-to-Site** sobre la red institucional. La solución cloud leerá de las bases de datos MySQL y, opcionalmente, del sistema ODA.

El sistema principal AS400 permanecerá aislado como sistema oficial de registro. La propuesta agrega un canal digital sobre réplicas y servicios de integración, sin reemplazar el núcleo operativo existente.

## Diagrama de la solución

El siguiente diagrama resume los componentes principales, los canales de acceso, los servicios cloud y la integración con la infraestructura actual de FINCA.

![Diagrama de arquitectura cloud propuesta para FINCA Honduras](/image5.png)
