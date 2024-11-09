export class Recurso {
  titulo: string;
  descripcion: string;
  enlace: string;

  constructor(titulo: string, descripcion: string, enlace: string) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.enlace = enlace;
  }
}

export const recursos: Recurso[] = [
  new Recurso(
    'Capacitación en Marketing Digital',
    'Curso completo de marketing digital para MYPEs turísticas, enfocado en estrategias de posicionamiento online y uso de redes sociales.',
    'https://www.turismoemprende.pe/capacitaciones/marketing-digital'
  ),
  new Recurso(
    'Gestión Financiera para MYPEs',
    'Aprende a gestionar las finanzas de tu empresa con este curso que incluye contabilidad básica, análisis financiero y gestión de presupuesto.',
    'https://www.cem.pe/gestion-financiera-mypes'
  ),
  new Recurso(
    'Turismo Sostenible',
    'Formación sobre prácticas sostenibles en el sector turístico, enfocada en el respeto al medio ambiente y la responsabilidad social empresarial.',
    'https://www.turismosostenible.pe/cursos'
  ),
  new Recurso(
    'Transformación Digital en el Turismo',
    'Capacitación que enseña cómo digitalizar los procesos de tu agencia de viajes, desde la gestión de reservas hasta el marketing online.',
    'https://www.promperu.gob.pe/transformacion-digital'
  ),
  new Recurso(
    'Certificación en Buenas Prácticas Turísticas',
    'Curso que ofrece una certificación oficial en buenas prácticas en la atención al cliente, higiene y seguridad en el turismo.',
    'https://www.mincetur.gob.pe/certificacion-buenas-practicas'
  ),
  new Recurso(
    'Asesoría en Innovación y Nuevas Tecnologías',
    'Accede a asesorías personalizadas para integrar nuevas tecnologías en tu negocio turístico, mejorando la competitividad y el servicio al cliente.',
    'https://www.promperu.gob.pe/asesoria-innovacion'
  ),
];
