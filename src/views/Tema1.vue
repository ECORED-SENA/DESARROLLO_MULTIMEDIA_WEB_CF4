<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Técnicas comunicativas
    .col-lg-10.mx-auto
      .bloque-texto-a.color-acento-botones.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-3.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/t1/f1.svg" alt="Megáfono")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 La comunicación más efectiva es la posibilidad que tienen dos o más personas en tener una forma correcta de expresarse por medio de mensajes concisos que lleven la información correcta, tanto del sentido como del tono, permitiendo que el objetivo de la comunicación se cumpla, transmitiendo de forma satisfactoria y continua los mensajes e información, creando interactividad y emoción.
    Separador
    #t_1_1.titulo-segundo
      h2 1.1 Técnicas de redacción, ortografía
    p.mb-5 Existen distintos tipos de comunicación que permiten tener una comunicación más precisa logrando generar espacios de confianza que se convertirán en grupos con características e ideales similares, lo que logrará mantener una retroalimentación efectiva, formando comunicaciones basadas en unas reglas y características claras:
    .row.mb-5
      .col-lg-6
        figure.fcab.h_34rem.mb-4
          img(src="@/assets/curso/t1/f2.svg" alt="personas dialogando")
        h4 Comunicaciones formales
        p Son temas ue tratan de un tema específico, mayormente de contenido laboral o educacional.
      .col-lg-6
        figure.fcab.h_34rem.mb-4
          img(src="@/assets/curso/t1/f3.svg" alt="personas dialogando")
        h4 Comunicaciones informales
        p Se dan de forma natural, la comunicación es menos elaborada y utiliza palabras menos técnicas.
    h3 Técnicas de comunicación
    p Las técnicas de comunicación son pequeñas herramientas que permiten tener un adecuado manejo de la comunicación. 
    p A continuación se podrán ver varias técnicas que serán de apoyo en los procesos comunicativos.
    h4.mb-5 <i class="fas fa-pen-square cab me-3"></i>Técnicas de comunicación verbal (palabras, el tono de la voz)
    .col-lg-10.mx-auto
      .bloque-texto-a.color-acento-botones.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            img(src="@/assets/curso/t1/f4.svg" alt="Megáfono")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 A continuación, se revisarán las técnicas más relevantes y se comenzará a ponerlas en práctica en el día a día.
    p.mb-5 Estas son las técnicas de comunicación verbal más notables:
    SlyderB.mb-5(:datos="tecnicasdecomunicacionverbal")(data-aos="flip-right")
    h4.mb-5 <i class="fas fa-pen-square cab me-3"></i>Técnicas de comunicación no verbal (expresiones visuales y faciales, movimientos y posturas corporales)
    .col-lg-10.mx-auto
      .bloque-texto-a.color-acento-botones.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-3.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/t1/f12.svg" alt="Personas haciendo señas")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 Existen muchas técnicas de comunicación no verbal, hoy se revisarán algunas permitiendo identificarlas y ponerlas en práctica a la hora de la comunicación. A continuación, se verán algunas como ejemplo.
    p.mb-5 Estas son las técnicas de comunicación no verbal más notables:
    SlyderB.mb-5(:datos="tecnicasdecomunicacionnoverbal")(data-aos="flip-right")
    h4.mb-5 <i class="fas fa-pen-square cab me-3"></i>Técnicas de redacción, ortografía
    p Las siguientes técnicas, son fundamentales en cualquier proceso de comunicación, lo que ayudará a redactar correctamente para entender e impedir interpretaciones erróneas tanto de lo que se entiende, como de lo que se dice; la redacción es unir palabras para transmitir mensajes claros con ideas correctas.
    p Según la RAE, la ortografía “es el conjunto de normas que regula la escritura de una lengua” y la “forma correcta de escribir, respetando las normas de la escritura” (Real Academia Española, 2021), es decir escribir bien.
    p.mb-5 Se debe tener mucho cuidado al escribir y redactar, por eso se observarán algunas herramientas que ayudarán al momento de construir contenido:
    .col-lg-8.mx-auto
      AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--fcb")
        .row(titulo="Concreción")
          p Abreviar es lo más esencial al momento de escribir, no dar rodeos a ideas es importante para tener concentrado al receptor.
          .col-lg-5.mx-auto
            img(src="@/assets/curso/t1/f16.svg" alt="Persona dando un discurso")
        .row(titulo="Claridad")
          p Todo lo expresado debe ser claro y no generar dudas.
          .col-lg-5.mx-auto
            img(src="@/assets/curso/t1/f17.svg" alt="Tiro al blanco")
        .row(titulo="Sencillez")
          p Es la naturalidad propia de una conversación, del tono y de la expresión.
          .col-lg-5.mx-auto
            img(src="@/assets/curso/t1/f18.svg" alt="Persona hablando por celular")
        .row(titulo="Adecuación")
          p No todos los temas se redactan igual, se debe usar terminología adecuada a cada tema a tratar.
          .col-lg-5.mx-auto
            img(src="@/assets/curso/t1/f19.svg" alt="Personas chateando")
        .row(titulo="Ordenar elementos") 
          p Tener un orden lógico es vital, permite comprender de manera sencilla el inicio, el desarrollo y la conclusión del tema a tratar.
          .col-lg-5.mx-auto
            img(src="@/assets/curso/t1/f20.svg" alt="Personas haciendo señas")
        .row(titulo="Interés") 
          p Todo elemento de comunicación que se elabore debe ser atractivo para el lector, ayudará a que exista una continua retroalimentación.
          .col-lg-5.mx-auto
            img(src="@/assets/curso/t1/f21.svg" alt="Tablet y megafono")
    p Algunas recomendaciones y aspectos metodológicos para tratar la ortografía.
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span a
        | Copiar trozos de textos literarios, prestando atención a lo que se escribe.
      li 
        .lista-ol--cuadro__vineta
          span b
        | Memorizar poemas, canciones, refranes, adivinanzas y luego escribirlos sin consultar el texto.
      li 
        .lista-ol--cuadro__vineta
          span c
        | Utilizar el diccionario cada vez que se tenga duda sobre la escritura de una palabra.
      li 
        .lista-ol--cuadro__vineta
          span d
        | Escribir cuantas veces sea necesaria cada palabra en la que se haya cometido error.
      li 
        .lista-ol--cuadro__vineta
          span e
        | La auto corrección no debe verse como castigo, sino como un recurso para gravar en la memoria visual, motriz y auditiva, la ortografía de una palabra.
      li 
        .lista-ol--cuadro__vineta
          span f
        | Tener plena consciencia, voluntad e interés para querer mejorar y superar las dificultades ortográficas.
    Separador
    #t_1_2.titulo-segundo
      h2 1.2 Pensamiento divergente y convergente
    .col-lg-10.mx-auto
      .bloque-texto-a.color-acento-botones.p-4.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/t1/f22.svg" alt="Cerebro")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 Es un proceso de construcción mental que ayuda aportar herramientas creativas y de innovación que suma información al momento de llevar a cabo un proceso intelectual.
    p.mb-5 Está en relación con la frase <em>“pensar fuera de la caja”</em>, esta teoría trata de derribar la creencia que solo existen personas creativas o críticas y se considera que cualquier persona con un conocimiento puede aportar soluciones, consiguiendo que el cerebro afronte estos retos desde otras posiciones o perspectivas.
    .col-lg-9.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        span Pensamiento divergente y convergente
      figure
        img(src="@/assets/curso/t1/f23.svg" alt="Mapa pensamiento convergente y divergente")
    .row.mb-5.align-items-center
      .col-lg-5
        h3 ¿Cuál es el pensamiento convergente?
        p Es el acto de converger, se refiere al encuentro de dos o más puntos o ideas que parten de lugares diferentes y atienden hacia una dirección u objetivo común entre las ideas o situaciones diferentes.
        p El pensamiento convergente o vertical, parte de un conocimiento adquirido y se desarrolla en un único plano; ante algún problema o situación, el proceso mental busca una respuesta correcta siguiendo pasos concretos y convencionales.
      .col-lg-7
        p Se puede concluir que es un proceso consciente y un criterio lógico, algunas características podrían ser:
        p <i class="fas fa-pen-square cab me-3"></i>Tomarse el tiempo necesario para pensar sobre el asunto y las posibles opciones.
        p <i class="fas fa-pen-square cab me-3"></i>Contrastar la validez y viabilidad de cada decisión.
        p <i class="fas fa-pen-square cab me-3"></i>Tener un enfoque positivo y realista, siempre enfocado a la mejora continua.
    .row.px-5.mb-5
      .col-lg-4.mx-autofigure
        img(src="@/assets/curso/t1/f24.svg" alt="Joven sentado en escritorio con un laptop")
      .col-lg-5.mx-auto
        h4 ¿Cuál es el pensamiento divergente?
        p Se conoce como divergente, el acto de apartarse sucesivamente, es un sinónimo de diferencia o desacuerdo; en sentido figurado es tener varios puntos de vista.
        p El pensamiento divergente está muy relacionado a la creatividad, ya que se usa un proceso de pensamiento donde se generan diferentes y creativas ideas para la solución de un problema, actúa en varios planos e incorpora diferentes perspectivas, lo que permite diferentes soluciones, se plantea que se busquen todas las opciones, sin tener muy claro que se está buscando.
    p.mb-5 Algunas características del pensamiento divergente:
    .row.mb-5.px-5
      .col-lg-6
        .tarjeta-avatar-bt
          img(src='@/assets/curso/icon-abstracto1.svg' alt='icono relacionado')
          .tarjeta.tarjeta--noborad
            .p-4
              h2 Fluidez
              p habilidad de ofrecer numerosas alternativas frente a un problema. 
        .tarjeta-avatar-bt
          img(src='@/assets/curso/icon-abstracto1.svg' alt='icono relacionado')
          .tarjeta.tarjeta--noborad
            .p-4
              h2 Flexibilidad
              p capacidad de desarrollar una perspectiva múltiple de un asunto. 
        .tarjeta-avatar-bt
          img(src='@/assets/curso/icon-abstracto1.svg' alt='icono relacionado')
          .tarjeta.tarjeta--noborad
            .p-4
              h2 Originalidad
              p creación de nuevas ideas y su creación de conceptos. 
      .col-lg-6
        .tarjeta-avatar-bt
          img(src='@/assets/curso/icon-abstracto1.svg' alt='icono relacionado')
          .tarjeta.tarjeta--noborad
            .p-4
              h2 Redefinición
              p posibilidad de hallar nuevas utilidades alejadas de los prejuicios habituales. 
        .tarjeta-avatar-bt
          img(src='@/assets/curso/icon-abstracto1.svg' alt='icono relacionado')
          .tarjeta.tarjeta--noborad--ultimo
            .p-4
              h2 Elaboración
              p capacidad de generar información detallada de un tema tratado. 
    Separador
    #t_1_3.titulo-segundo
      h2 1.3 Uso de plataformas tecnológicas para coordinar equipos de trabajo
    .col-lg-10.mx-auto
      .bloque-texto-a.color-acento-botones.p-4.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/t1/f25.svg" alt="personas ensamblando página web")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 En estos momentos donde el trabajo en equipo ha ido evolucionando gracias a las circunstancias de la vida como la evolución en las tecnologías, es muy importante poder compartir y tomar decisiones en grupo; ante esta necesidad la colaboración de los diferentes equipos de trabajo ha transformado la forma de trabajar y se han creado diferentes herramientas que ayudan a construir y trabajar a la distancia.
    p Aplicaciones y marcas como Apple y Google, han ido rompiendo diferentes esquemas laborales que se han incorporado en la vida de los usuarios modernos; estas herramientas ayudan a dinamizar trabajos y generar colaboraciones en los diferentes equipos de trabajo.
    p.mb-5 Vamos a nombrar una serie de aplicaciones que facilitarán el trabajo, su desarrollo y colaboración entre los integrantes del equipo:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--fcb")
      .row(titulo="Trello")
        .col-lg-4.mx-auto
          p Herramienta para organizar proyectos a través de tableros. Se comparten documentos y conversaciones en tiempo real, con compañeros de trabajo. Tiene la posibilidad de integrar otras aplicaciones y herramientas.
          h5 www.trello.com
          img(src="@/assets/curso/t1/f26.png" alt="Trello")
        .col-lg-7
          img(src="@/assets/curso/t1/f27.png" alt="Trello")
      .row(titulo="Google Drive")
        .col-lg-4.mx-auto
          p Es uno de los más utilizados para trabajos en grupo, dispone de 15GB de almacenamiento tipo nube; se comparten y editan documentos en tiempo real, se apalanca de todas las herramientas de Google.
          h5 drive.google.com
          img(src="@/assets/curso/t1/f28.png" alt="Google Drive")
        .col-lg-7
          img(src="@/assets/curso/t1/f29.png" alt="Google Drive")
      .row(titulo="Mind")
        .col-lg-4.mx-auto
          p Herramienta ideal al momento de organizar como un mapa mental, los miembros añaden ideas, documentos, materiales, para poder compartirlos luego. Incluye chat integrado.
          h5 www.mindmeister.com
          img(src="@/assets/curso/t1/f30.png" alt="Mind")
        .col-lg-7
          img(src="@/assets/curso/t1/f31.png" alt="Mind")
      .row(titulo="Slack")
        .col-lg-4.mx-auto
          p Herramienta enfocada a facilitar la comunicación dentro del grupo, incluye compartir mensajes, archivos, documentos, etc. Puede integrarse con plataformas como Twitter, DropBox y Google Drive.
          h5 www.slack.com
          img(src="@/assets/curso/t1/f32.png" alt="Slack")
        .col-lg-7
          img(src="@/assets/curso/t1/f33.png" alt="Slack")
      .row(titulo="Notion")
        .col-lg-4.mx-auto
          p Una de las mejores aplicaciones de productividad, bloc de notas, recordatorios, colaboración real con otros usuarios, tener conversaciones y comentarios, lo más importante es poder usar plantillas que otros usuarios han creado.
          h5 www.notion.so
          img(src="@/assets/curso/t1/f34.png" alt="Notion")
        .col-lg-7
          img(src="@/assets/curso/t1/f35.png" alt="Notion")
      .row(titulo="Asana")
        .col-lg-4.mx-auto
          p Una de las más populares, es una herramienta que organiza tareas por equipos y por proyectos, gestión de fechas, con entornos flexibles y ágiles, con opciones de verificar tareas o actividades.
          h5 www.asana.com
          img(src="@/assets/curso/t1/f36.png" alt="Asana")
        .col-lg-7
          img(src="@/assets/curso/t1/f37.png" alt="Asana")
      .row(titulo="Dropbox")
        .col-lg-4.mx-auto
          p Es un servidor para alojar y compartir archivos en línea y entre varios ordenadores, organizando todo en la nube; puede sincronizarse desde diferentes plataformas de una forma muy segura para todos.
          h5 www.dropbox.com
          img(src="@/assets/curso/t1/f38.png" alt="Dropbox")
        .col-lg-7
          img(src="@/assets/curso/t1/f39.png" alt="Dropbox")
      .row(titulo="IdeaFlip")
        .col-lg-4.mx-auto
          p Es una herramienta que permite trabajar en equipo, realizar lluvia de ideas, desarrollar nuevas ideaciones y trabajarlas en equipo. Es una app muy sencilla, se pueden compartir imágenes y PDF, usar stickers a manera de notas, conectarlas, organizarlas, etc.
          h5 www.ideaflip.com
          img(src="@/assets/curso/t1/f40.png" alt="IdeaFlip")
        .col-lg-7
          img(src="@/assets/curso/t1/f41.png" alt="IdeaFlip")
    p.mb-5 Actualmente existe una cantidad de herramientas que permiten ayudar a mejorar los procesos en los grupos de trabajo, donde la colaboración para llegar a resolver un bien o un problema en común permite que estas herramientas nos faciliten momentos para compartir información con otros equipos que permiten el trabajo desde casa y favorecen el trabajo de equipo a la distancia. 
    Separador
    #t_1_4.titulo-segundo
      h2 1.4	Presentación de la propuesta del proyecto al cliente
    .col-lg-10.mx-auto
      .bloque-texto-a.color-acento-botones.p-4.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/t1/f42.svg" alt="personas pintando cuadro")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 Se tiene en mente que muchas veces que se van a presentar propuestas de diseño al cliente se plantean varios escenarios para escoger el camino más efectivo para seguir; pero también es muy práctico poder ofrecer una sola propuesta de calidad; se podría concluir que en muchas ocasiones tener o poder construir más propuestas no siempre permite encontrar las soluciones que podrían convencer al cliente y podría no dejar claro el mensaje llegando a confundir. 
    p Es necesario que se tengan presentes factores que pueden ayudar al momento de presentar la propuesta a un cliente; como por ejemplo, que sean los expertos de cada área los encargados de presentar sus avances y proyectos, ya que son ellos los que conocen a cabalidad todo lo concerniente a su área de trabajo; otro factor para tener en cuenta es el conocimiento al ciento por ciento  del cliente y el proyecto, para alcanzar los objetivos que se plantearon previamente en la investigación, conocer sus necesidades, motivos y decisiones puntuales; por último conocer todas las herramientas para poder presentar el proyecto; en esta última etapa es importante conocer y descubrir los errores y cambios necesarios para que en próximas fases estos errores y cambios lleguen a  cero por ciento. 
    p Se debe hacer énfasis en la calidad y no en la cantidad, teniendo claros diferentes fases y puntos que se deben seguir para tener presentaciones de proyectos más exitosos:
    ul.lista-ul.mb-5
      li 
        i.fas.fa-pen-square.cab
        | Describir el proyecto con toda la información que el cliente pide.	
      li 
        i.fas.fa-pen-square.cab
        | Conocer al cliente, cómo son sus problemas y necesidades.
      li 
        i.fas.fa-pen-square.cab
        | Definir el proyecto y especificar características y cualidades.
      li 
        i.fas.fa-pen-square.cab
        | Explicar todos los aspectos técnicos del proyecto.
      li 
        i.fas.fa-pen-square.cab
        | Construir una escala de los tiempos y costos que va a emplear el desarrollo del proyecto.
      li 
        i.fas.fa-pen-square.cab
        | Explicar todos los beneficios del producto.
    p.mb-5 Se deben tener puntos de partida al momento de presentar una propuesta, por eso se compilaron diferentes herramientas a tener en cuenta para una propuesta más efectiva y ajustada a las necesidades del cliente, tales como:
    .col-lg-10.mx-auto
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icon-documento-1.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 Tener conocimiento de nuestro cliente o marca es de vital importancia, darse el tiempo de conocer las necesidades que podrían solucionarse, para saber ¿qué? y ¿cómo? se puede ofrecer, profundizar en temas específicos como objetivos sin cumplir, o abordar panoramas que por el contrario nunca han sido contemplados por el cliente.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icon-documento-1.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 Utilizar un lenguaje sencillo para que no se pierda la esencia del mensaje; ser claro con la redacción de los conceptos con la intención que los clientes y el público objetivo puedan entender el mismo mensaje sin llegar a tener confusión.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icon-documento-1.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 Es importante ser conciso, es tan valioso el tiempo que se utiliza en la creación de la presentación como el tiempo del cliente, por eso es importante aprovechar y respetar el tiempo al máximo, usar imágenes que ayuden a captar el mensaje o usar elementos que ayuden a entender más fácil las cosas, son herramientas que se deben utilizar para no convertir una presentación en una conferencia.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icon-documento-1.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 Como se ha expuesto anteriormente, el conocimiento del cliente es un punto clave y haciendo énfasis en esa información es vital que se puedan hacer presentaciones con datos relevantes para el cliente; las cifras siempre aportan datos clave que son importantes, ayudar a acompañar con gráficas que expliquen comportamientos del mercado o como se verían afectadas las cifras con la estrategia genera posibles casos de éxito al momento de las presentaciones.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icon-documento-1.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 La suma de fortalezas (propias y del cliente) aportarán beneficios para ambas partes; seleccionar información que se relacione con los objetivos a solucionar y aportar las mejores herramientas para conseguirlo es necesario para crear relaciones más estrechas a lo largo de los proyectos. 
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icon-documento-1.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 Incluir en las presentaciones cronogramas o líneas de tiempo donde se vea con claridad las metas que se alcanzarán en una cantidad de tiempo determinada, etapas más cruciales, entregables, etc., demostrarán una propuesta más organizada.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icon-documento-1.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 Otra herramienta a tener en cuenta es la posibilidad de entregar un elemento (documento, archivo, diseño o formato) que pueda ser entregado al cliente, esto ayudará a que estemos en la mente del cliente cuando no se esté presente y dará una buena impresión. Por obvias razones es importante no hacer entrega de archivos o diseños originales o ideas no registradas, o cualquier información que no pueda estar debidamente protegida, además de cuidar los archivos usando marcas de agua donde sea necesario.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icon-documento-1.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 Siempre que se hace una presentación cabe la posibilidad que las personas no entiendan conceptos, frases o ideas, por eso es necesario dar la posibilidad de responder a dudas o comentarios que surgirán al momento de la presentación; preguntas que deben ser aclaradas y no dejar duda en el cliente para permitir los ajustes necesarios.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    tecnicasdecomunicacionverbal: [
      {
        titulo: 'Escuchar Activamente',
        texto:
          'La falta de comunicación se basa en la falta de escuchar bien lo que la otra persona quiere comunicar, se está más pendiente del mensaje, pero no de lo que dicen y aprender a escuchar ayuda a crear lazos más fuertes.<br><br>Aprender a escuchar y entender el mensaje requiere un esfuerzo mayor ya que involucra conectar todos los mensajes que se han producido, comprenderlos y darles un sentido ordenado; entender no solo lo que se dice, sino lo que se ve y se percibe ayuda a entender de forma precisa el proceso de comunicación.',
        imagen: require('@/assets/curso/t1/f5.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ser Específico',
        texto:
          'Para una comunicación efectiva, no hay nada más importante que ser específico en lo que se necesita comunicar, para no dar rodeos y poder avanzar en lo que se quiere.',
        imagen: require('@/assets/curso/t1/f6.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cuidar las palabras',
        texto:
          'Es una de las más importantes, porque es vital saber cuáles son las palabras que se van a decir y cómo se van a decir, no utilizar etiquetas al momento de referirse a alguien.',
        imagen: require('@/assets/curso/t1/f7.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cuidar el tono y el volumen de la voz',
        texto:
          'El tono es el timbre de la voz y la intensidad es el volumen, es importante saber manejar situaciones desagradables o molestas, por lo que se debe decir en un tono firme lo que se quiere, sin llegar a transformar el mensaje con un tono agresivo.',
        imagen: require('@/assets/curso/t1/f8.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ofrecer una comunicación constructiva',
        texto:
          'Se debe conocer el motivo o el sentimiento exacto que transmite el mensaje, suministrar la mayor cantidad de información ayuda a encontrar el sentimiento adecuado.',
        imagen: require('@/assets/curso/t1/f9.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Manejar un nivel emocional adecuado',
        texto:
          'No acumular emociones negativas, ya que producirá que en algún momento la comunicación pierda su rumbo y exploten esas emociones.',
        imagen: require('@/assets/curso/t1/f10.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ser breve',
        texto:
          'Repetir lo mismo con diferentes palabras alargará el planteamiento y creará que el receptor pueda distraerse del mensaje.',
        imagen: require('@/assets/curso/t1/f11.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],

    tecnicasdecomunicacionnoverbal: [
      {
        titulo: 'Lenguaje corporal',
        texto:
          'El lenguaje corporal ayuda a construir el mensaje, dándole peso y forma, es necesario que sea consecuente lo que se está diciendo con lo que se está expresando con el cuerpo, evitar gestos exagerados, tener una postura firme ayuda a expresar mensajes contundentes y llenos de fuerza.',
        imagen: require('@/assets/curso/t1/Ok-amico.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Contacto visual',
        texto:
          'El contacto que se haga con el receptor del mensaje debe ser frecuente, pero no exagerado, lo que ayudará a que el receptor no se desvíe de la intención del mensaje.',
        imagen: require('@/assets/curso/t1/f13.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gestos de la cara',
        texto:
          'La expresión facial tanto como el contacto visual es una herramienta que ayudará a enfatizar el tono de la comunicación ayudando a dar claridad al mensaje, representando las emociones que pretende el mensaje.',
        imagen: require('@/assets/curso/t1/f14.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Otras habilidades a tener en cuenta al momento de construir mensajes de calidad son la retórica, la elocuencia y el sofismo.',
        imagen: require('@/assets/curso/t1/f15.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
