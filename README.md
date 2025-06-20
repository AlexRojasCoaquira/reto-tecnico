
# WEB EVENTS

Este es un proyecto para mi dashboard donde se evalua sobre el reto tecnico donde se lista eventos.


## Características
- 🔥 Framework: Nuxt 3 (Vue 3 + Vite)
- 🎨 Estilos: TailwindCSS
- 🔐 Tipado: TypeScript
- 🔁 Consumo de servicios con `useFetch`
- 📊 Dashboard con búsqueda de monedas
- ♻️ Composables reutilizables (`useCoins`, `useServiceStatus`)


# Installation

Clona el repositorio y entra al proyecto:

```bash
git clone https://github.com/AlexRojasCoaquira/reto-tecnico.git
cd reto-tecnico
```
Instala las dependencias
```bash
npm install
```
Crea un archivo .env en la raiz con esta variable
```bash
NUXT_PUBLIC_API= https://api.tvmaze.com
```
Ejecuta en desarrollo:
```bash
npm run dev
```
## 🔗 Demo

🎯 **[Ver demo en vivo](https://reto-tecnico-orcin.vercel.app/**


## API Reference
En esta parte se muestra los servicios utilizados para el.
#### Obtener todos los eventos

```http
  GET /api/shows
```
#### Obtener detalle del evento

```http
  GET /api/shows/${id}
```

## Screenshots

![App Screenshot](https://res.cloudinary.com/ddq6ilgjr/image/upload/v1750401901/Captura_de_pantalla_2025-06-20_014301_hanylr.png)

