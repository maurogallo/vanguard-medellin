# 🛡️ Vanguard Medellín | Private Travel, Safe Stays & VIP Concierge

Plataforma digital premium bilingüe (Inglés / Español) diseñada para captar y atender turistas extranjeros de alto valor (nómadas digitales, grupos de amigos, ejecutivos y familias) que visitan Medellín con énfasis en **seguridad, acompañamiento privado, hospedajes verificados y experiencias turísticas exclusivas**.

---

## 🚀 Características Clave Implementadas

1. **Diseño Visual de Lujo (*Dark Luxury*):**
   - Estética sobria en tonos carbón, dorado y esmeralda con tipografía serif editorial (`Playfair Display`) y moderna (`Plus Jakarta Sans`).
2. **Totalmente Bilingüe (EN / ES con 1-click):**
   - Configurado en inglés por defecto para el público de Estados Unidos, Canadá y Europa, con conmutador fluido a español.
3. **Los 4 Pilares de Servicio:**
   - **Estadías Verificadas:** Penthouses y villas en El Poblado, Provenza y Laureles con seguridad cerrada 24/7.
   - **Seguridad Ejecutiva & Movilidad:** Choferes bilingües verificados, SUVs blindadas nivel III y monitoreo satelital en tiempo real.
   - **Concierge Personal Bilingüe:** Asistencia inmediata 24/7 por WhatsApp, reservas VIP y respaldo médico/legal.
   - **Tours Privados de Alto Nivel:** Helicóptero y yate en Guatapé, Comuna 13 privada de autor, catación de café de especialidad y vida nocturna protegida en Provenza.
4. **Cotizador y Diseñador de Itinerario Interactivo en Tiempo Real:**
   - Permite al usuario seleccionar tipo de estadía, nivel de movilidad/seguridad, tours deseados, número de días y de pasajeros.
   - Calcula el total y valor aproximado por persona en USD.
   - **Botón de Reserva Directa por WhatsApp:** Formatea automáticamente el itinerario y lo abre en WhatsApp listo para enviar a la agencia.
5. **Matriz de Confianza y Seguridad (Protocolos Preventivos):**
   - Filtros de antecedentes, acompañamiento en citas y vida nocturna (prevención de escopolamina), corredores seguros y enlace hospitalario/legal.
6. **Formulario Modal de Consulta Confidencial:**
   - Para solicitudes a medida y clientes ejecutivos.
7. **Botón Flotante 24/7:**
   - Acceso inmediato al concierge desde cualquier parte del sitio en móviles y computadores.

---

## 🛠️ Cómo Iniciar el Proyecto Localmente

En tu terminal (PowerShell o CMD), navega a la carpeta del proyecto:

```bash
cd C:\DirectorioTabajo\vanguard-medellin
npm run dev
```

Abre tu navegador en `http://localhost:5173`.

---

---

## 📱 Líneas de Atención Configuradas

El sistema cuenta con un archivo centralizado de configuración en [`src/data/contactConfig.js`](file:///c:/DirectorioTabajo/vanguard-medellin/src/data/contactConfig.js) con tus dos líneas activas:

1. **Línea Principal (Concierge VIP & Cotizaciones):** `+57 301 454 6530`
   - Recibe las cotizaciones del Trip Builder, botón flotante, consultas de tours y reservas de hospedaje.
2. **Línea Operativa y Seguridad 24/7:** `+57 302 641 5567`
   - Recibe las solicitudes de protocolos de seguridad, blindaje y el botón de emergencia en el Navbar.

---

## 🌐 Opciones de Publicación / Despliegue en Internet

La plataforma está lista para compilarse y publicarse en menos de 2 minutos:

1. **Vercel (Recomendado):**
   - Arrastra la carpeta o conecta el repositorio de GitHub en [vercel.com](https://vercel.com).
2. **Netlify:**
   - Ejecuta `npm run build` y arrastra la carpeta `dist` a [app.netlify.com/drop](https://app.netlify.com/drop).
