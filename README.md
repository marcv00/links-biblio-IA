# Herramientas de IA — Biblioteca Universidad de Lima

Proyecto React + Vite para un catálogo de herramientas de inteligencia artificial.

## Estructura

- `src/data.js`: catálogo local de categorías y recursos. No se hace fetch para cargar la información.
- `src/main.jsx`: interfaz y filtros.
- `src/styles.css`: diseño responsive.
- `index.html`: favicon y metadatos.

## Ejecutar

```bash
npm install
npm run dev
```

## Deploy en Vercel

Importa el repositorio/proyecto en Vercel. Vercel detectará Vite automáticamente.

Build command: `npm run build`

Output directory: `dist`

## Agregar un recurso

Edita `src/data.js`. Cada recurso usa:

```js
{
  id: 'ejemplo',
  name: 'Ejemplo',
  description: 'Descripción corta.',
  category: 'investigacion',
  url: 'https://ejemplo.com/',
  image: 'https://ejemplo.com/logo.png',
  tag: 'Investigación',
  access: 'free'
}
```

Para acceso institucional:

```js
access: 'institutional',
accessLabel: 'Acceso institucional',
accessDescription: 'La Universidad de Lima proporciona acceso institucional a este recurso.'
```

La interfaz muestra automáticamente la insignia y su explicación al pasar el cursor.
