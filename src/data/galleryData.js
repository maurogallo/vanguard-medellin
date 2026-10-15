export const galleryCategories = [
  { id: 'all', label: { en: 'All Highlights', es: 'Todos los Destinos' } },
  { id: 'nightlife', label: { en: 'Discotecas & VIP Nightlife', es: 'Discotecas y Rumba VIP' } },
  { id: 'landmarks', label: { en: 'Iconic Tourist Spots', es: 'Lugares Turísticos' } },
  { id: 'nature', label: { en: 'Oriente & Coffee Landscapes', es: 'Oriente y Paisajes' } },
];

export const galleryItems = [
  {
    id: 1,
    category: 'landmarks',
    title: {
      en: 'Guatapé: Pueblo de los Zócalos (Oriente Antioqueño)',
      es: 'Guatapé: Pueblo de los Zócalos (Oriente Antioqueño)',
    },
    location: 'Guatapé, Oriente Antioqueño',
    image: '/images/guatape-pueblo.jpg',
    desc: {
      en: 'The colorful heritage town in Eastern Antioquia famous for its handcrafted bas-relief zócalos, cobblestone streets, and vibrant lakeside boardwalk.',
      es: 'Pintoresco pueblo del Oriente Antioqueño famoso por sus zócalos artesanales de colores, calles empedradas, arquitectura tradicional y malecón frente al embalse.',
    },
    tag: 'Oriente Antioqueño',
  },
  {
    id: 2,
    category: 'landmarks',
    title: {
      en: 'La Piedra del Peñol & Emerald Reservoir',
      es: 'La Piedra del Peñol y el Embalse',
    },
    location: 'El Peñol / Guatapé, Oriente',
    image: '/images/piedra-penol.jpg',
    desc: {
      en: 'The iconic 220-meter granite monolith rising above the lake labyrinth. Climb its 740 stairs or charter our private yacht and helicopter.',
      es: 'El icónico monolito de granito de 220 metros que vigila el embalse. Sube sus 740 escalones o recórrelo en nuestro helicóptero y yate privado.',
    },
    tag: 'Top Landmark',
  },
  {
    id: 3,
    category: 'landmarks',
    title: {
      en: 'Comuna 13: Street Art & Electric Escalators',
      es: 'Comuna 13: Murales y Escaleras Eléctricas',
    },
    location: 'San Javier, Medellín',
    image: '/images/comuna13.jpg',
    desc: {
      en: 'The legendary urban transformation of San Javier. Private tour through outdoor escalators and world-class murals guided by community founders with security escort.',
      es: 'El epicentro de transformación urbana en San Javier. Recorrido privado por las escaleras al aire libre y murales históricos guiado por fundadores y escolta.',
    },
    tag: 'Medellín Heritage',
  },
  {
    id: 4,
    category: 'nightlife',
    title: {
      en: 'Provenza: Carrera 35 Nightlife & Gastronomy',
      es: 'Provenza: Carrera 35, Bares y Gastronomía',
    },
    location: 'Provenza / El Poblado, Medellín',
    image: '/images/provenza-carrera35.jpg',
    desc: {
      en: 'The beating heart of Medellín nightlife. Leafy pedestrian boulevards lined with the city’s top cocktail lounges, speakeasies, and designer restaurants.',
      es: 'El corazón de la noche en El Poblado. Bulevares arbolados con los mejores gastro-bares, rooftops, restaurantes de autor y coctelería internacional.',
    },
    tag: 'Provenza VIP',
  },
  {
    id: 5,
    category: 'nightlife',
    title: {
      en: 'High-End Clubbing & Nightlife Protection',
      es: 'Discotecas Exclusivas y Rumba con Escolta',
    },
    location: 'Parque Lleras & Vía Primavera',
    image: '/images/discoteca-party.jpg',
    desc: {
      en: 'Experience the Latin music and club scene with reserved VIP tables, bottle service, and discreet bodyguard protection standing by all night.',
      es: 'Disfruta de la mejor rumba de Medellín con reserva de mesas VIP, servicio de botellas y escolta discreto acompañándote durante toda la noche.',
    },
    tag: 'Discotecas VIP',
  },
  {
    id: 6,
    category: 'landmarks',
    title: {
      en: 'Plaza Botero & Uribe Uribe Palace of Culture',
      es: 'Plaza Botero y Palacio de la Cultura',
    },
    location: 'Centro Histórico, Medellín',
    image: '/images/plaza-botero.jpg',
    desc: {
      en: 'The outdoor open-air sculpture museum featuring 23 monumental bronze masterpieces by maestro Fernando Botero in the historic downtown.',
      es: 'Museo al aire libre con 23 monumentales esculturas de bronce donadas por el maestro Fernando Botero frente al histórico palacio ajedrezado.',
    },
    tag: 'Downtown Culture',
  },
  {
    id: 7,
    category: 'landmarks',
    title: {
      en: 'Pueblito Paisa & Cerro Nutibara Lookout',
      es: 'Pueblito Paisa y Mirador Cerro Nutibara',
    },
    location: 'Cerro Nutibara, Medellín',
    image: '/images/pueblito-paisa.jpg',
    desc: {
      en: 'A replica of a traditional 20th-century Antioquian village perched on a hilltop, offering a 360-degree panoramic view of the entire valley.',
      es: 'Réplica exacta de un pueblo antioqueño tradicional en la cima del Cerro Nutibara, con mirador panorámico de 360 grados sobre todo el valle.',
    },
    tag: 'Scenic Viewpoint',
  },
  {
    id: 8,
    category: 'nature',
    title: {
      en: 'Antioquia Specialty Coffee Farm & Cupping',
      es: 'Finca Cafetera Tradicional en Antioquia',
    },
    location: 'Montañas de Antioquia',
    image: '/images/cafetales-colombia.jpg',
    desc: {
      en: 'Immerse in lush mountain plantations where the world’s best mild coffee is grown. Private cupping masterclass and typical farm lunch.',
      es: 'Sumérgete en las plantaciones de montaña donde se cultiva el café más suave del mundo. Catación profesional y almuerzo campesino de hacienda.',
    },
    tag: 'Coffee Country',
  },
];
