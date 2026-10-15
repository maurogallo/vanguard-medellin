# 🛡️ Vanguard Medellín | Private Travel, Safe Stays & VIP Concierge

Plataforma digital premium bilingüe (Inglés / Español) diseñada para captar y atender turistas extranjeros de alto valor (nómadas digitales, grupos de amigos, ejecutivos y familias) que visitan Medellín con énfasis en **seguridad, acompañamiento privado, hospedajes verificados y experiencias turísticas exclusivas**.

🔗 **Repositorio en GitHub:** [https://github.com/maurogallo/vanguard-medellin](https://github.com/maurogallo/vanguard-medellin)  
📖 **Manual Completo y Técnico:** Consulta [`DOCUMENTACION_COMPLETA.md`](./DOCUMENTACION_COMPLETA.md) para detalles exhaustivos de arquitectura, fotos y modelo de negocio.

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
4. **Galería Interactiva con Fotos Auténticas de la Región (`/public/images/`):**
   - **Guatapé Pueblo:** Plazoleta de los Zócalos en el Oriente Antioqueño.
   - **La Piedra del Peñol:** Monolito y embalse.
   - **Comuna 13:** Murales de arte urbano y escaleras eléctricas en San Javier.
   - **Plaza Botero:** Esculturas de bronce de Fernando Botero y Palacio de la Cultura.
   - **Provenza:** Bulevar gastronómico y rumba de la Carrera 35 en El Poblado.
   - **Pueblito Paisa:** Cerro Nutibara con vista panorámica del valle.
   - **Cafetales:** Finca cafetera tradicional en las montañas de Antioquia.
5. **Cotizador y Diseñador de Itinerario Interactivo en Tiempo Real:**
   - Calcula el total y valor aproximado por persona en USD según días, huéspedes, autos y tours.
   - **Botón de Reserva Directa por WhatsApp:** Formatea automáticamente el itinerario y lo envía al concierge.
6. **Matriz de Confianza y Seguridad (Protocolos Preventivos):**
   - Filtros de antecedentes, acompañamiento en citas y vida nocturna (prevención de escopolamina), corredores seguros y enlace hospitalario/legal.
7. **Botón Flotante Permanente 24/7:**
   - Acceso inmediato al concierge desde cualquier parte del sitio en móviles y computadores.

---

## 📱 Líneas de Atención Configuradas

El sistema cuenta con un archivo centralizado de configuración en [`src/data/contactConfig.js`](./src/data/contactConfig.js) con tus dos líneas activas:

1. **Línea Principal (Concierge VIP & Cotizaciones):** `+57 301 454 6530`
   - Recibe las cotizaciones del Trip Builder, botón flotante, consultas de tours y reservas de hospedaje.
2. **Línea Operativa y Seguridad 24/7:** `+57 302 641 5567`
   - Recibe las solicitudes de protocolos de seguridad, blindaje y el botón de emergencia en el Navbar.

---

## 🛠️ Cómo Iniciar el Proyecto Localmente

En tu terminal (PowerShell o CMD), navega a la carpeta del proyecto:

```bash
cd C:\DirectorioTabajo\vanguard-medellin
npm run dev
```

Abre tu navegador en `http://localhost:5173`.

---

## 🌐 Publicación en Vercel con Subdominio en `synaptiqnova.online`

### 1. Despliegue en Vercel
1. Entra a [https://vercel.com/new](https://vercel.com/new).
2. Selecciona **Import** en el repositorio `vanguard-medellin`.
3. Haz clic en **Deploy**.

### 2. Configurar Subdominio en Vercel
1. En el proyecto en Vercel, entra a **Settings > Domains**.
2. Escribe: `vanguard.synaptiqnova.online` (o el nombre que prefieras).
3. Haz clic en **Add**.

### 3. Registro DNS en tu Proveedor de Dominio
En la zona DNS de `synaptiqnova.online`, agrega:
- **Tipo:** `CNAME`
- **Host / Nombre:** `vanguard`
- **Destino / Valor:** `cname.vercel-dns.com`
- **TTL:** Automático o 3600

Vercel generará el certificado SSL (HTTPS) gratis automáticamente.
Para una guía detallada, lee [`DOCUMENTACION_COMPLETA.md`](./DOCUMENTACION_COMPLETA.md).
