# 📖 Manual y Documentación Completa del Proyecto
# Vanguard Medellín | Private Travel, Safe Stays & VIP Concierge

Este documento recopila la totalidad del diseño estratégico, arquitectura técnica, configuración de líneas de atención, gestión de activos fotográficos reales y la guía paso a paso para el despliegue y vinculación del subdominio en `synaptiqnova.online`.

---

## 📑 Tabla de Contenidos
1. [Resumen Ejecutivo y Modelo de Negocio](#1-resumen-ejecutivo-y-modelo-de-negocio)
2. [Líneas Telefónicas y Canales Oficiales](#2-líneas-telefónicas-y-canales-oficiales)
3. [Arquitectura Tecnológica del Software](#3-arquitectura-tecnológica-del-software)
4. [Estructura del Proyecto y Archivos Clave](#4-estructura-del-proyecto-y-archivos-clave)
5. [Catálogo de Activos Fotográficos Reales](#5-catálogo-de-activos-fotográficos-reales)
6. [Módulos y Funcionalidades del Sistema](#6-módulos-y-funcionalidades-del-sistema)
7. [Guía de Ejecución Local (Desarrollo)](#7-guía-de-ejecución-local-desarrollo)
8. [Guía de Despliegue en Vercel y Subdominio DNS](#8-guía-de-despliegue-en-vercel-y-subdominio-dns)
9. [Flujo de Actualizaciones Futuras (Git & Auto-Deploy)](#9-flujo-de-actualizaciones-futuras-git--auto-deploy)

---

## 1. Resumen Ejecutivo y Modelo de Negocio

### Propuesta de Valor
Medellín es un destino de clase mundial para nómadas digitales, turistas de alto poder adquisitivo y ejecutivos internacionales. Sin embargo, existe una barrera de desconfianza asociada a la seguridad nocturna, estafas en aplicaciones de citas y transporte informal.

**Vanguard Medellín** resuelve esta problemática bajo el concepto de **Hospitalidad Blindada 360°**:
- **Estadía Certificada:** Penthouses y villas en El Poblado, Provenza y Laureles con vigilancia 24/7.
- **Movilidad y Escolta:** Camionetas SUV ejecutivas y blindadas con choferes bilingües verificados judicialmente.
- **Concierge y Fixer Local:** Asistencia 24/7 en reservas VIP, traducciones, asesoría preventiva y red hospitalaria/legal.
- **Experiencias de Autor:** Vuelos en helicóptero a Guatapé, yate privado, Comuna 13 con líderes comunitarios y cata de café en haciendas de montaña.

---

## 2. Líneas Telefónicas y Canales Oficiales

Las líneas se encuentran centralizadas en el archivo [`src/data/contactConfig.js`](./src/data/contactConfig.js):

| Línea | Número | Rol y Funcionalidad |
| :--- | :--- | :--- |
| **Línea Principal** | `+57 301 454 6530` | **VIP Concierge & Reservas:** Recibe las cotizaciones del *Trip Builder*, botón flotante 24/7, consultas de tours y solicitudes del modal confidencial. |
| **Línea Operativa** | `+57 302 641 5567` | **Seguridad & Despacho 24/7:** Recibe las llamadas y chats del botón de emergencia del Navbar (*24/7 Hotline*) y solicitudes de blindaje/escolta. |
| **Email Oficial** | `concierge@vanguardmedellin.com` | Recepción de solicitudes corporativas y acuerdos de confidencialidad. |
| **Ubicación Base** | Cra. 35 #7-38, El Poblado, Medellín | Centro de operaciones en el sector gastronómico de Provenza. |

---

## 3. Arquitectura Tecnológica del Software

- **Framework Frontend:** [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) (Rendimiento ultra rápido con carga menor a 1 segundo).
- **Motor de Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) con diseño *Dark Luxury* personalizado.
- **Librería de Iconos:** [Lucide React](https://lucide.dev/).
- **Tipografía Editorial:** Google Fonts (`Playfair Display` para títulos de lujo y `Plus Jakarta Sans` para lectura ejecutiva).
- **Arquitectura Responsiva:** Mobile-First adaptable a teléfonos (iOS/Android), tablets y monitores de alta resolución.
- **Bilingüe Nativo:** Conmutador instantáneo Inglés (predeterminado) / Español en 1 clic.

---

## 4. Estructura del Proyecto y Archivos Clave

```text
vanguard-medellin/
├── public/
│   ├── favicon.svg               # Ícono de escudo dorado en la pestaña del navegador
│   └── images/                   # Activos fotográficos locales verificados
│       ├── guatape-pueblo.jpg    # Plazoleta de los Zócalos (Oriente Antioqueño)
│       ├── piedra-penol.jpg      # Piedra del Peñol y embalse
│       ├── comuna13.jpg          # Murales y escaleras eléctricas de San Javier
│       ├── plaza-botero.jpg      # Esculturas de Botero y Palacio de la Cultura
│       ├── provenza-carrera35.jpg# Bulevar gastronómico de Provenza en El Poblado
│       ├── discoteca-party.jpg   # Discotecas, luces y vida nocturna VIP
│       ├── pueblito-paisa.jpg    # Cerro Nutibara y mirador de Medellín
│       └── cafetales-colombia.jpg# Finca cafetera en las montañas de Antioquia
├── src/
│   ├── assets/                   # Recursos estáticos adicionales
│   ├── components/               # Módulos de interfaz interactivos
│   │   ├── Navbar.jsx            # Barra superior con menú responsive y conmutador EN/ES
│   │   ├── Hero.jsx              # Pantalla principal con vista panorámica y métricas
│   │   ├── Pillars.jsx           # Los 4 pilares de servicio
│   │   ├── StaysGallery.jsx      # Vitrina de penthouses y villas verificadas
│   │   ├── Experiences.jsx       # Tours privados exclusivos
│   │   ├── CityGallery.jsx       # Galería interactiva con pestañas y Lightbox modal
│   │   ├── SecurityProtocol.jsx  # Matriz de protocolos de seguridad y confianza
│   │   ├── TripCalculator.jsx    # Cotizador en tiempo real con exportación a WhatsApp
│   │   ├── Faq.jsx               # Acordeón de preguntas frecuentes de seguridad y pagos
│   │   ├── CtaBanner.jsx         # Banner de llamado a la acción directo a WhatsApp
│   │   ├── ContactModal.jsx      # Formulario modal para cotizaciones confidenciales
│   │   └── Footer.jsx            # Pie de página con ambas líneas y corredores seguros
│   ├── data/
│   │   ├── contactConfig.js      # Configuración única de teléfonos y enlaces de WhatsApp
│   │   ├── galleryData.js        # Información y fotos de la galería de destinos
│   │   └── translations.js       # Diccionario completo bilingüe (EN / ES)
│   ├── App.jsx                   # Componente raíz integrador y botón flotante 24/7
│   ├── index.css                 # Importación de Tailwind v4 y estilos de lujo
│   └── main.jsx                  # Entrada principal de la aplicación React
├── vercel.json                   # Enrutamiento SPA para despliegues en Vercel
├── vite.config.js                # Configuración de Vite y plugin de Tailwind CSS
└── package.json                  # Dependencias y scripts del proyecto
```

---

## 5. Catálogo de Activos Fotográficos Reales

Todas las fotografías han sido validadas geográficamente y se sirven localmente desde `/public/images/` para evitar caídas de enlaces externos:

1. **Guatapé Pueblo (`guatape-pueblo.jpg`):**
   Muestra la icónica **Plazoleta de los Zócalos** en el Oriente Antioqueño, con sus coloridos relieves artesanales y arquitectura tradicional.
2. **Piedra del Peñol (`piedra-penol.jpg`):**
   Muestra el monolito de 220 metros y el embalse de Guatapé.
3. **Comuna 13 (`comuna13.jpg`):**
   Muestra las escaleras eléctricas al aire libre y los murales de arte urbano en San Javier.
4. **Plaza Botero (`plaza-botero.jpg`):**
   Muestra las esculturas de bronce donadas por el maestro Fernando Botero frente al Palacio de la Cultura en el Centro Histórico.
5. **Provenza Carrera 35 (`provenza-carrera35.jpg`):**
   Muestra la zona peatonal arbolada donde se concentran los mejores rooftops y bares de El Poblado.
6. **Discotecas & Clubbing (`discoteca-party.jpg`):**
   Muestra ambiente nocturno de fiesta para la oferta de rumba con escolta bilingüe.
7. **Pueblito Paisa (`pueblito-paisa.jpg`):**
   Vista panorámica del Cerro Nutibara sobre el Valle de Aburrá.
8. **Cafetales de Antioquia (`cafetales-colombia.jpg`):**
   Plantaciones andinas para la experiencia de cata de café especial.

---

## 6. Módulos y Funcionalidades del Sistema

### A. Cotizador Interactivo (*Trip Builder*)
- Permite seleccionar tipo de hospedaje, nivel de movilidad (camioneta blindada, SUV ejecutiva o traslados aeropuerto), experiencias deseadas, días de estadía y número de pasajeros.
- Calcula en tiempo real el monto total estimado en USD y el valor por persona.
- Al hacer clic en **"Enviar y Cotizar por WhatsApp"**, abre directamente el chat con la línea `+57 301 454 6530` con todo el itinerario desglosado.

### B. Galería Filtrable con Lightbox Modal
- Pestañas para filtrar entre *Todos*, *Discotecas & Rumba VIP*, *Lugares Turísticos* y *Oriente y Paisajes*.
- Al pulsar cualquier imagen, se abre un visor en pantalla completa con detalles del destino, garantías de seguridad y botón de reserva individual.

### C. Botón Flotante Permanente 24/7
- Ubicado en la esquina inferior derecha, acompaña al visitante en todo momento tanto en pantallas de escritorio como en smartphones.

---

## 7. Guía de Ejecución Local (Desarrollo)

Para abrir y trabajar en el proyecto en tu computador:

1. Abre una terminal (PowerShell o CMD).
2. Dirígete a la carpeta del proyecto:
   ```bash
   cd C:\DirectorioTabajo\vanguard-medellin
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre tu navegador web en: `http://localhost:5173`

---

## 8. Guía de Despliegue en Vercel y Subdominio DNS

El repositorio ya está creado y sincronizado en tu cuenta de GitHub:
👉 **URL del Repositorio:** [https://github.com/maurogallo/vanguard-medellin](https://github.com/maurogallo/vanguard-medellin)

### Paso 8.1: Importar el Proyecto en Vercel
1. Ingresa a tu cuenta de Vercel en: [https://vercel.com/new](https://vercel.com/new).
2. En la lista de repositorios de GitHub, localiza **`vanguard-medellin`** y haz clic en **"Import"**.
3. Deja los ajustes predeterminados (Framework Preset: *Vite*, Root Directory: `./`).
4. Haz clic en **"Deploy"**. Vercel compilará la aplicación en menos de 30 segundos y te dará una URL temporal (ej: `vanguard-medellin.vercel.app`).

### Paso 8.2: Agregar tu Subdominio en Vercel
1. En el panel de control de tu proyecto en Vercel, entra a la pestaña **Settings** (arriba).
2. Selecciona **Domains** en la barra lateral izquierda.
3. En el campo de texto escribe tu subdominio deseado:
   - Ejemplo recomendado: `vanguard.synaptiqnova.online`
4. Haz clic en el botón azul **"Add"**.

### Paso 8.3: Crear el Registro CNAME en tu Administrador de Dominio
Entra al panel donde administras el dominio `synaptiqnova.online` (Hostinger, Cloudflare, Namecheap, GoDaddy, etc.) en la sección de **Zona DNS (DNS Management)** y agrega el siguiente registro:

| Campo / Setting | Valor a ingresar |
| :--- | :--- |
| **Tipo de Registro (Type)** | `CNAME` |
| **Nombre (Name / Host)** | `vanguard` *(o el subdominio elegido)* |
| **Destino (Target / Value / Points to)** | `cname.vercel-dns.com` |
| **TTL** | `Automático` o `3600` |

> **Nota para Cloudflare:** Si usas Cloudflare como DNS, asegúrate de colocar el icono de la nube en **Gris (DNS Only)** o con Proxy activo según tu configuración SSL.

Una vez creado el registro, Vercel detectará el enlace en pocos minutos y emitirá automáticamente el **Certificado SSL de seguridad (HTTPS)** gratuito.

---

## 9. Flujo de Actualizaciones Futuras (Git & Auto-Deploy)

Cada vez que realices un cambio en el código (modificar un precio, añadir una nueva foto o cambiar textos):

1. En tu terminal en `C:\DirectorioTabajo\vanguard-medellin`:
   ```bash
   git add .
   git commit -m "Ajuste de contenido o precios"
   git push origin master
   ```
2. **Vercel detectará el push automáticamente** y actualizará tu página en vivo en `https://vanguard.synaptiqnova.online` en menos de 1 minuto sin que tengas que hacer nada manual.

---

*Documentación generada para Vanguard Medellín Concierge & Security Services.*
