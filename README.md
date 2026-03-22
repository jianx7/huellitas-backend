# Huellitas — Backend API

API REST para la Plataforma Digital de Adopción Responsable y Bienestar Animal en Benito Juárez.

## Tecnologías

- Node.js + Express
- PostgreSQL + Prisma ORM
- JWT para autenticación

## Requisitos previos

- Node.js v18 o superior
- PostgreSQL instalado y corriendo
- Git

## Instalación

1. Clona el repositorio
   git clone https://github.com/TU_USUARIO/huellitas-backend.git
   cd huellitas-backend

2. Instala dependencias
   npm install

3. Configura variables de entorno
   Edita .env con tu URL de base de datos y tu JWT_SECRET

4. Inicializa la base de datos
   npx prisma migrate dev --name init

5. Corre el servidor en desarrollo
   npm run dev

El servidor estará en http://localhost:3000

Prueba que funciona:
   GET http://localhost:3000/api/health

## Equipo Backend

- Monserrat Jimenez — API perros, auth
- Antonella Junco — Adopciones, solicitudes
- Amerika Carbajal — Base de datos, refugios
- Valdimir - Solicitudes, reportes, deploy
