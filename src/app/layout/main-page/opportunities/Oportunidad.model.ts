export class Oportunidad {
  titulo: String;
  descripcion: String;
  enlace: String;

  constructor(titulo: String, descripcion: String, enlace: String) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.enlace = enlace;
  }
}

export const oportunidades: Oportunidad[] = [
  new Oportunidad(
    'Financiamiento para MYPEs Formales',
    'Accede a líneas de crédito preferenciales y fondos de financiamiento para expandir tu negocio turístico. Programas como Reactiva Perú y Fondo Crecer están disponibles para MYPEs formalizadas.',
    'https://www.cofide.com.pe/'
  ),
  new Oportunidad(
    'Capacitación en Gestión y Marketing',
    'Las MYPEs tienen acceso a capacitaciones del Ministerio de Turismo sobre marketing digital, gestión de negocios y sostenibilidad, con el fin de mejorar la competitividad del sector.',
    'https://www.turismoemprende.pe/'
  ),
  new Oportunidad(
    'Oportunidades en Ferias Nacionales e Internacionales',
    'Las MYPEs pueden participar en ferias de turismo organizadas por el gobierno, lo que les brinda visibilidad nacional e internacional, como el Perú Travel Mart.',
    'https://www.perutravelmart.com/'
  ),
  new Oportunidad(
    'Reducciones Fiscales para Empresas Turísticas',
    'Las MYPEs pueden beneficiarse de incentivos fiscales, como deducciones en el impuesto a la renta y exoneraciones para promover la formalización en el sector.',
    'https://www.sunat.gob.pe/'
  ),
  new Oportunidad(
    'Presencia en Directorios y Plataformas Digitales',
    'Una vez formalizadas, las MYPEs pueden registrarse en el Directorio Nacional de Prestadores de Servicios Turísticos, aumentando su visibilidad en campañas nacionales e internacionales.',
    'https://www.peru.travel/'
  ),
  new Oportunidad(
    'Certificación en Turismo Sostenible',
    'Las MYPEs pueden obtener certificaciones en sostenibilidad, un reconocimiento que atrae a turistas interesados en prácticas responsables con el medio ambiente.',
    'https://www.turismosostenible.pe/'
  )
];
