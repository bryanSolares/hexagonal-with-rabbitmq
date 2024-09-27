# Parking Management System

Este proyecto es un sistema de backend para administrar parqueos utilizando arquitectura hexagonal y microservicios. El sistema incluye dos microservicios principales: uno para la gestión de parqueos y asignaciones, y otro para el manejo de notificaciones.

## Tecnologías Utilizadas

- **Node.js**
- **TypeScript**
- **RabbitMQ**
- **Nodemailer**
- **Express**

## Estructura del Proyecto

### Microservicio de Gestión de Parqueos y Asignaciones

```plaintext
services/
main-service/
├── src/
│   ├── domain/
│   │   ├── entities/
│   │   │   ├── person.ts
│   │   │   ├── parking.ts
│   │   │   └── assignment.ts
│   │   ├── services/
│   │   │   └── parking-service.ts
│   │   ├── ports/
│   │   │   ├── iparking-repository.ts
│   │   │   └── ievent-publisher.ts
│   ├── infrastructure/
│   │   ├── adapters/
│   │   │   ├── in/
│   │   │   │   └── parking-controller.ts
│   │   │   ├── out/
│   │   │   │   ├── parking-repository.ts
│   │   │   │   └── rabbitmq-publisher.ts
│   ├── application/
│   │   └── parking-app.ts
├── package.json
└── tsconfig.json
notification-service/
├── src/
│   ├── infrastructure/
│   │   ├── rabbitmq-listener.ts
│   │   └── email-service.ts
│   ├── application/
│   │   └── parking-app.ts
├── package.json
└── tsconfig.json
```

### Instala las dependencias para ambos microservicios:

```bash
cd main-service
yarn
cd ../notification-service
yarn
```

### Configura RabbitMQ y Nodemailer:

```bash
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 -d rabbitmq:3.13-management
```

## Ejecución del Proyecto

```bash
cd main-service
yarn start
cd ../notification-service
yarn start
```

## Uso

- URL: /asignar-parqueo
- Método: POST
- Body:
  - personId: string
  - parkingId: string
  - assignmentDate: string

## Ejemplo de uso

```bash
curl -X POST http://localhost:3000/parking -H "Content-Type: application/json" -d '{"personId": "1", "parkingId": "1", "assignmentDate": "2023-06-01"}'
```

## Ejemplo de respuesta

```json
{
  "message": "Parking assignment created successfully"
}
```

## Eventos de Dominio

    parkingAssigned: Se publica cuando se asigna un parqueo.
