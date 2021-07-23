export default {
  global: {
    componenteFormativo: 'Validación y ajuste del proyecto multimedia',
    descripcionCurso:
      'Este componente plantea algunas herramientas al momento de la validación y ajustes, para la presentación del proyecto multimedia a un posible cliente potencial.<br><br>Estas herramientas ayudarán a tener un conocimiento general, no solo al momento de una presentación, sino que ayudarán en los procesos mentales que se tienen habitualmente, ayudando al proceso de comunicación y al momento de coordinación de un proyecto.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-principal-bg.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas comunicativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de redacción, ortografía',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Pensamiento divergente y convergente',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Uso de plataformas tecnológicas para coordinar equipos de trabajo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Presentación de la propuesta del proyecto al cliente',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Análisis de resultados potenciales y determinación del alcance del proyecto',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Realización los ajustes del proyecto',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Elaboración de presentaciones e informes',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      /*
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Anáhuac, Generación. (2020) ¿Cuáles son las mejores herramientas de comunicación afectiva?',
      link:
        'https://www.anahuac.mx/generacion-anahuac/cuales-son-las-mejores-tecnicas-de-comunicacion-efectiva',
    },
    {
      referencia: 'Carrera, Á. (2019). Pensamiento divergente y convergente.',
      link: 'https://humancentric.es/pensamiento-divergente-y-convergente/',
    },
    {
      referencia:
        'Capitalismo Consciente (2018). Pensamiento convergente y divergente en la creatividad.',
      link:
        'https://capitalismoconsciente.es/blog/pensamiento-convergente-divergente-la-creatividad/',
    },
    {
      referencia:
        'RAE. Diccionario de la lengua española. (2021). Significado de Ortografía.',
      link: 'https://dle.rae.es',
    },
    {
      referencia:
        'Manzanares, R. (2017). Técnicas y estrategias para mejorar ortografía, redacción y comprensión de textos en los estudiantes de III, IV y V año.',
      link:
        'http://www.feyalegria.org.ni/recursos/sist/pdf/lecto/tecnicas_y_estrategias.pdf',
    },
    {
      referencia:
        'Marcuello García, Á. (2018). Técnicas para la comunicación eficaz.',
      link:
        'https://www.psicologia-online.com/tecnicas-para-la-comunicacion-eficaz-3124.html',
    },
    {
      referencia:
        'Nextop. (2018). Como definir correctamente el alcance del proyecto.',
      link: 'https://nextop.es/como-definir-el-alcance-de-un-proyecto/',
    },
    {
      referencia:
        'PMI Global Standard. (2013). Guía de los Fundamentos para la Dirección de Proyectos (Guía del PMBOK) Quinta edición.',
      link:
        'https://www.academia.edu/8270802/PMBOK_Quinta_edici%C3%B3n_espa%C3%B1ol_copia',
    },
    {
      referencia:
        'Puchades, D. (2019). 25 Herramientas para mejorar el trabajo en equipo y maximizar la productividad.',
      link:
        'https://negokai.com/herramientas-para-mejorar-el-trabajo-en-equipo-y-maximizar-la-productividad.html',
    },
    {
      referencia:
        'Pursell, Shelley. (2021). Cómo crear objetivos SMART para tu empresa.',
      link:
        'https://blog.hubspot.es/marketing/5-ejemplos-de-metas-inteligentes-para-tu-empresa',
    },
    {
      referencia:
        'Real Academia Española. (2021). Diccionario de la lengua española.',
      link: 'https://dle.rae.es/diccionario',
    },
    {
      referencia: 'Stinga, C. (2018). Pensamiento convergente y divergente.',
      link: 'https://www.ruizstinga.com/pensamiento-convergente-divergente/',
    },
    {
      referencia:
        'Vaz, C. (2018). ¿Cómo construir una propuesta comercial de éxito?',
      link:
        'https://www.rdstation.com/co/blog/construir-propuesta-comercial-exito-cliente/',
    },
    {
      referencia:
        'Villalobos, C. (2020). Secretos para una propuesta comercial efectiva.',
      link: 'https://blog.hubspot.es/marketing/redactar-propuesta-comercial',
    },
  ],
  glosario: [
    {
      termino: 'Acta',
      significado:
        'Documento donde se relaciona el desarrollo de una reunión presencial o virtual que se ha programado previamente con un grupo de participantes.',
    },
    {
      termino: 'Contacto Visual',
      significado:
        'El contacto visual es la situación que ocurre cuando dos personas se miran el uno al otro a los ojos al mismo tiempo, el contacto visual es una forma de comunicación no verbal y se cree que tiene una gran influencia en el comportamiento social.',
    },

    {
      termino: 'Convergente',
      significado:
        'Acto de converger; hace referencia al encuentro de dos puntos, cosas, ideas o situaciones que parten de lugares diferentes.',
    },
    {
      termino: 'Divergente',
      significado:
        'Se conoce como divergente al acto de irse alejando sucesivamente una de otra, dos o más líneas continuamente.',
    },
    {
      termino: 'Elocuencia',
      significado:
        'La elocuencia es la capacidad de expresarse en público de forma elegante y persuasiva.',
    },

    {
      termino: 'Informe',
      significado:
        'Es una presentación oral o escrita de hechos, situaciones o aspectos temáticos que recopilan datos que son procesados para transmitir un tipo de información específica a una persona o público objetivo.',
    },
    {
      termino: 'Interactividad',
      significado:
        'Se utiliza para referirse a la relación entre varios usuarios, sistemas informativos, etc. Es un proceso de comunicación entre diferentes personas y diferentes medios tecnológicos.',
    },
    {
      termino: 'KPI',
      significado:
        'Conocidos como indicadores claves o medidores de desempeño, son las medidas de rendimiento de un proceso, está directamente relacionado con el objetivo y se expresa en valores porcentuales.',
    },
    {
      termino: 'Lenguaje Corporal',
      significado:
        'Es una de las formas básicas de la comunicación no verbal, estos movimientos pueden ser una guía de pensamientos o emociones. ',
    },
    {
      termino: 'Retórica',
      significado:
        'Es un campo del conocimiento que se ocupa de estudiar procedimientos y técnicas para el lenguaje, teniendo una finalidad persuasiva o estética. ',
    },
    {
      termino: 'Sofismo',
      significado:
        'Razón aparente o argumento con el que se quiere defender o persuadir lo que es falso.',
    },
  ],
  complementario: [
    {
      texto: 'Full Perception, (2019). Comunicación Efectiva.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YBWIMFjzy5o',
    },
    {
      texto: 'Toscano, V. TV (2018) 7 claves para comunicarse mejor.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6tGA8RDW-Z0',
    },
    {
      texto:
        'RD Station, 2020) ¿Cómo construir una propuesta comercial de éxito?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1rqFciaVO5Q',
    },
    {
      texto: 'Hubspot. (2021). Plantilla descargable para propuesta comercial.',
      tipo: 'Plantilla',
      descarga:
        '/downloads/CF04-Anexo-Plantilla propuesta comercial-Hubspot.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Olga Lucía Mogollón Carvajal',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Zvi Daniel Grosman Landáez',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro Agropecuario la Granja Regional Tolima',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: '',
        cargo: '',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Marcela González',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
