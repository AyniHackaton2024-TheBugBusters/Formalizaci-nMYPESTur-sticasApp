export class Oportunidad {
  titulo: String;
  descripcion: String;
  enlace: String;
  imageUrl: String;

  constructor(titulo: String, descripcion: String, enlace: String, imgUrl: String) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.enlace = enlace;
    this.imageUrl = imgUrl;
  }
}

export const oportunidades: Oportunidad[] = [
  new Oportunidad(
    'Financiamiento para MYPEs Formales',
    'Accede a líneas de crédito preferenciales y fondos de financiamiento para expandir tu negocio turístico. Programas como Reactiva Perú y Fondo Crecer están disponibles para MYPEs formalizadas.',
    'https://www.cofide.com.pe/',
    'https://pqs.pe/wp-content/uploads/2023/04/Financiamiento.jpg'
  ),
  new Oportunidad(
    'Capacitación en Gestión y Marketing',
    'Las MYPEs tienen acceso a capacitaciones del Ministerio de Turismo sobre marketing digital, gestión de negocios y sostenibilidad, con el fin de mejorar la competitividad del sector.',
    'https://www.turismoemprende.pe/',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzx5iqesko_SNVuAiGH802xLuy9Abu3dW_hA&s'
  ),
  new Oportunidad(
    'Oportunidades en Ferias Nacionales e Internacionales',
    'Las MYPEs pueden participar en ferias de turismo organizadas por el gobierno, lo que les brinda visibilidad nacional e internacional, como el Perú Travel Mart.',
    'https://www.perutravelmart.com/',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuJObSCKcx03yk_gLNkuJG_yLL1EQx0oGbw&s'
  ),
  new Oportunidad(
    'Reducciones Fiscales para Empresas Turísticas',
    'Las MYPEs pueden beneficiarse de incentivos fiscales, como deducciones en el impuesto a la renta y exoneraciones para promover la formalización en el sector.',
    'https://www.sunat.gob.pe/',
    'https://www.cronista.com/files/image/101/101888/5ff736898b250_700_387!.jpg?s=5b4f91dce5c15f45fe8cc51c637c1243&d=1626280212'
  ),
  new Oportunidad(
    'Presencia en Directorios y Plataformas Digitales',
    'Una vez formalizadas, las MYPEs pueden registrarse en el Directorio Nacional de Prestadores de Servicios Turísticos, aumentando su visibilidad en campañas nacionales e internacionales.',
    'https://www.peru.travel/',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVURjZqWiZE_nPdNce4Cu6u7N1aOR3TKblxw&s'
  ),
  new Oportunidad(
    'Certificación en Turismo Sostenible',
    'Las MYPEs pueden obtener certificaciones en sostenibilidad, un reconocimiento que atrae a turistas interesados en prácticas responsables con el medio ambiente.',
    'https://www.turismosostenible.pe/',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZiQf1DuQV3RE7LEBCbN3aFZx_w5qmYz4m2g&s'
  )
];
