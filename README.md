# Rolos Tours

Rolos Tours es una agencia de viajes dedicada a crear experiencias turísticas únicas y mágicas en México. Nuestro equipo se distingue por su responsabilidad, amabilidad, confiabilidad, integridad y pasión por el trabajo.

## Misión

Llevar a nuestros clientes a vivir experiencias turísticas únicas y mágicas.

## Visión

Convertirnos en la agencia con los viajes más fascinantes en México.

## Valores

- Responsabilidad
- Amabilidad
- Confiabilidad
- Integridad
- Pasión por el trabajo

## Servicios

Ofrecemos tours y paquetes turísticos a diversos destinos en México, organizando actividades y dinámicas divertidas para todos nuestros viajeros.

## Opiniones de nuestros clientes

- "Precio accesible, divertidas dinámicas y una excelente organización por parte del guía. Increíble la cantidad de atractivos que se visitan en tan poco tiempo, además se otorga un buen espacio de descanso en cada viaje, súper para seguir en la aventura! Muy buen trabajo!" - Alva Robles
- "Excelente servicio que ofrecen de muy buena calidad ⭐️✨100% recomendado, la verdad y súper buenos precios accesibles, dense la oportunidad de viajar con ellos no se arrepentirán !!" - Alan Duran
- "Super recomendado, fuimos al tour de las grutas, son puntuales, son amables, te aclaran todas tus dudas sin duda alguna los recomiendo." - Yajaira Muñoz

## Contacto

Puedes contactarnos para más información sobre nuestros tours y servicios.

---

# Información técnica

## Frontend

- Framework: React
- Bundler: Vite
- Lenguaje: JavaScript (JSX)
- Ruteo: React Router DOM
- Estado global: (Actualmente no se usa Redux; el estado se maneja con `useState` y props. Se listó Redux Toolkit como posible futura integración.)
- UI: Componentes personalizados y React Icons
- Autenticación: Firebase Auth
- Almacenamiento y base de datos: Firebase Firestore y Storage
- Chat: Tawk.to Messenger
- Linting: ESLint
- Estructura principal: `/src` con componentes, páginas y estilos

### Estructura de directorios

```
src/
	App.jsx                # Configuración de rutas y layout principal
	main.jsx               # Punto de entrada que monta React
	firebase.js            # Inicialización de Firebase (Auth, Firestore, Storage)
	data.js                # Datos estáticos (navegación, header, about, testimonios)
	style.css              # Estilos globales
	components/            # Componentes reutilizables (NavBar, Footer, Tours, Stories, etc.)
	pages/                 # Páginas de alto nivel (Home, Benefits, LogIn, AdminPanel)
	components/PrivateRoute.jsx # Protección de rutas de administración
```

### Flujo de autenticación

1. `firebase.js` inicializa la app y exporta `firebaseApp`.
2. En `App.jsx` se obtiene `auth = getAuth(firebaseApp)`.
3. `onAuthStateChanged` escucha cambios y guarda el usuario en el estado local `user`.
4. `PrivateRoute` recibe `user`; si existe, renderiza la ruta interna (`/admin`), si no redirige (lógica implementada dentro de ese componente).
5. El formulario de login (en `LogIn.jsx`) interactúa con Firebase Auth (email/password u otro método que configures) para iniciar sesión.

### Rutas definidas

- `/` Home
- `/tours/:id` (detalle/listado de tours según implementación en `Tours.jsx`)
- `/beneficios` Página de beneficios
- `/opiniones/:id` Testimonios / historias
- `/login` Pantalla de autenticación
- `/admin` Panel administrativo (ruta protegida)

### Manejo de estado

Se usa únicamente estado local de React (`useState`, `useEffect`). No hay slices ni store configurado; si se integra Redux Toolkit se podría centralizar:

- Usuario autenticado
- Lista de tours
- Beneficios / testimonios

### Estilos

- Estilos globales en `style.css`.
- Estilos específicos por componente/página (`AdminPanel.css`, `Login.css`, `VerticalTable.css`).
- No se emplea preprocesador (Sass/Less) ni CSS-in-JS en esta versión.

### Recursos estáticos

- Imágenes y videos en `public/img/` y accesibles mediante imports relativos (Vite permite importar estáticos).

### Seguridad y buenas prácticas sugeridas

- Mover las llaves de Firebase a variables de entorno (`.env` con prefijo `VITE_`).
- Implementar reglas de Firestore y Storage estrictas (lectura/escritura solo para usuarios autenticados cuando aplique).
- Sanitizar entradas de formularios (tours, panel admin) si se agregan creaciones dinámicas.

### Accesibilidad (a11y)

- Agregar atributos `alt` en todas las imágenes (ya presentes en varias).
- Revisar contraste de colores y navegación por teclado en el menú móvil.

### Despliegue sugerido

1. Ejecutar `npm run build`.
2. Servir el contenido de `dist/` en un hosting estático (Firebase Hosting, Netlify, Vercel, GitHub Pages). Para Firebase Hosting: `firebase init hosting` y luego `firebase deploy`.
3. Configurar el modo hash (`HashRouter`) ya evita configuraciones de rewrites complejas en hosting estático.

### Monitoreo / Analítica (futuro)

- Integrar Google Analytics / GA4 o alternativa de analítica de privacidad.
- Manejo centralizado de logs de errores con Sentry o similar.

### Mejoras futuras recomendadas

- Implementar Redux Toolkit para caché de datos de tours y testimonios.
- Añadir tests unitarios (Jest + React Testing Library).
- Modo dark/light con persistencia en localStorage.
- Soporte multi-idioma (i18n) usando `react-i18next`.
- Optimización de imágenes (formatos WebP/AVIF y lazy loading).
- Formulario de contacto integrado con Firestore o servicio de correo (EmailJS / Cloud Functions).

## Backend

- El proyecto utiliza Firebase como backend para autenticación, base de datos y almacenamiento de archivos.
- No hay un servidor Node.js propio, pero se usa nodemon para desarrollo local y scripts automatizados.
- Configuración de nodemon para recargar en cambios de archivos fuente.

### Firebase (detalles)

- Servicios usados: Auth, Firestore, Storage.
- Archivo de inicialización: `src/firebase.js`.
- Recomendado: mover credenciales a `.env` y no comprometer keys públicas en repositorio (aunque el apiKey de Firebase es público, otras variables deben protegerse mediante reglas de seguridad correctas).

### Modelo de datos (propuesto)

Aunque no se incluye en el repositorio, se sugiere la siguiente estructura de colecciones en Firestore:

```
tours/                # Colección de tours
	{tourId} {
		nombre,
		descripcion,
		precio,
		destino,
		fechaSalida,
		fechaRegreso,
		cupo,
		imagenURL,
		activo
	}
opiniones/            # Testimonios de clientes
	{opinionId} {
		nombreCliente,
		mensaje,
		rating,
		fecha
	}
beneficios/
	{beneficioId} {
		titulo,
		descripcion,
		icono
	}
usuarios/
	{uid} {
		nombre,
		email,
		rol (admin|user)
	}
```

### Reglas de seguridad (ejemplo conceptual)

```
match /databases/{database}/documents {
	match /tours/{tourId} {
		allow read: if true;  // Público
		allow write: if request.auth != null && request.auth.token.admin == true;
	}
	match /opiniones/{opinionId} {
		allow read: if true;
		allow create: if request.auth != null; // Solo usuarios autenticados
		allow update, delete: if false; // Solo moderadas por admin vía Cloud Function
	}
}
```

### Despliegue backend

- No hay código de Cloud Functions actualmente. Para lógica avanzada (validaciones, envío de correos) se pueden añadir Functions en un futuro.

## Scripts principales

- `npm run dev`: Inicia el servidor de desarrollo con Vite
- `npm run build`: Compila la aplicación para producción
- `npm run start`: Ejecuta nodemon para desarrollo
- `npm run lint`: Ejecuta ESLint para análisis de código

## Dependencias clave

- react, react-dom, react-router-dom, react-redux, @reduxjs/toolkit
- firebase, @tawk.to/tawk-messenger-react, react-icons

## Configuración

- Vite configurado en `vite.config.js` para React
- Firebase configurado en `src/firebase.js` con Firestore y Storage
- Nodemon configurado en `nodemon.json` para recarga automática

---

# React + Vite

Este proyecto utiliza React y Vite para el desarrollo web, con soporte para HMR y reglas de ESLint.

Plugins oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh
