# Huellitas — Backend API

API REST para la Plataforma Digital de Adopción Responsable y Bienestar Animal en el municipio de Benito Juárez.

## Stack tecnológico

- NestJS + TypeScript
- PostgreSQL + Prisma ORM
- Cloudinary (almacenamiento de imágenes)
- Docker (deploy en Render)

## Requisitos previos

- Node.js v22 LTS
- PostgreSQL instalado y corriendo
- Git
- Cuenta en Cloudinary (gratuita)

## Instalación

1. Clona el repositorio
   git clone https://github.com/jianx7/huellitas-backend.git
   cd huellitas-backend

2. Instala dependencias
   npm install

3. Configura variables de entorno
   cp .env.example .env
   Edita .env con tus credenciales

4. Inicializa la base de datos
   npx prisma migrate dev --name init

5. Corre el servidor en desarrollo
   npm run start:dev

El servidor estará en http://localhost:3000

## Variables de entorno

Crea un archivo .env con los siguientes valores:
```
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/huellitas_db
JWT_SECRET=cambia_esto_por_algo_seguro
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
PORT=3000
```

## Equipo backend

- Monserrat Jimenez 
- Vladimir Briceño 
- Amerika Carbajal 
- Antonella Junco 
- Alison Herrera 
