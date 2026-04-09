import { Project } from '../../domain/entities/Project';

export const architectureProjects: Project[] = [
  {
    id: 'arch-1',
    title: 'Casa Vista Mar',
    description: 'Residencia exclusiva con vistas panorámicas al océano. Diseño contemporáneo que integra espacios abiertos con la naturaleza circundante. Incluye piscina infinity, terrazas extensas y materiales sostenibles de alta calidad.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    category: 'architecture'
  },
  {
    id: 'arch-2',
    title: 'Torre Horizon',
    description: 'Edificio de viviendas de lujo en el corazón de la ciudad. Arquitectura moderna con fachadas de cristal y acero. Espacios interiores diseñados para maximizar la iluminación natural y la eficiencia energética.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    category: 'architecture'
  },
  {
    id: 'arch-3',
    title: 'Villa Serenidad',
    description: 'Casa de campo diseñada en estilo minimalista mexicano. Integración perfecta entre arquitectura tradicional y contemporánea. Jardín interior, patios con agua y espacios de meditación.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    category: 'architecture'
  }
];

export const designProjects: Project[] = [
  {
    id: 'des-1',
    title: 'Loft Urbano',
    description: 'Renovación completa de un espacio industrial转换为 vivienda moderna. Diseño de interiores que respeta la estructura original mientras añade elementos contemporáneos. Iluminación personalizada y mobiliario a medida.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    category: 'design'
  },
  {
    id: 'des-2',
    title: 'Oficina Creativa',
    description: 'Espacio de trabajo diseñado para fomentar la colaboración y la innovación. Áreas abiertas, zonas de descanso, y estaciones de trabajo ergonómicas. Paleta de colores vibrantes que estimulan la creatividad.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    category: 'design'
  },
  {
    id: 'des-3',
    title: 'Restaurante Sabor',
    description: 'Diseño integral de restaurante gastronómico. Ambiente íntimo con iluminación cálida, materiales nobles y una distribución que optimiza la experiencia del comensal. Zona de бар y terraza exterior.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    category: 'design'
  }
];

export const contactInfo = {
  phone: '+52 123 456 7890',
  whatsapp: 'https://wa.me/521234567890',
  email: 'hola@kassandraromanillo.com',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com'
};
