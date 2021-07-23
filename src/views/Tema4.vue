<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Elaboración de presentaciones e informes
    .col-lg-10.mx-auto
      .bloque-texto-a.color-acento-botones.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-3.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/t4/f1.svg" alt="Personas hablando frente a un tablero")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 En cada fase del proyecto se obtienen datos e información que debe ser compartidos con el equipo ejecutor para posteriormente presentarla al cliente y a los usuarios; por lo tanto, es necesario utilizar los formatos indicados y evitar ambigüedades en su interpretación. 
    p Primero que todo es indispensable entender la diferencia entre datos e información:
    .col-lg-10.mx-auto.mb-5
      ul.lista-ul.mb-5
        li 
          i.fas.fa-pen-square.cab
          | ●	Datos: son representaciones simbólicas (numéricas, alfabéticas o alfanuméricas) que según la guía PMBOK; se obtienen como resultado de los procesos llevados a cabo en las diferentes fases del proyecto (análisis, planificación, ejecución, evaluación) y se distribuyen a los integrantes del equipo para su análisis e interpretación.
        li 
          i.fas.fa-pen-square.cab
          | ●	Información: los datos recopilados en las diferentes fases son analizados e interpretados para convertirse en información que puede ser distribuida a los miembros del proyecto a través de un informe.
    h3 Tipos de Informes
    p.mb-5 Los informes representan el desempeño del proyecto en sus diferentes fases, comunicando su situación durante el tiempo de ejecución.
    .titulo-sexto.color-acento-contenido
      span Tipos de Informes
    figure
      img(src="@/assets/curso/t4/f2.svg" alt="Mapa tipos de informes").mb-4
    p.mb-5 En la anterior figura se observa que por cada fase del proyecto hay momentos específicos en los que el equipo o analista deben presentar un informe que refleja un estado importante durante su ciclo de vida. Por ejemplo:
    .col-lg-10.mx-auto
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icono-documento2.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 ●	Informe de requisitos: presenta al cliente y a los usuarios del proyecto, todos los requerimientos tecnológicos, humanos y demás, necesarios para su ejecución y terminación.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icono-documento2.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 ●	Informe de costos: proporciona información del presupuesto para la producción del proyecto, discriminando los recursos, haciendo las estimaciones y proyecciones hasta su terminación.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icono-documento2.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 ●	Informe del diseño del prototipo gráfico e interactivo del proyecto: presenta el modelo operativo del producto elaborado con la retroalimentación de los usuarios y necesario para minimizar errores en la construcción.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icono-documento2.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 ●	Informe de pruebas de usabilidad y accesibilidad: después de realizar las pruebas con los beneficiarios del proyecto se debe comunicar acerca de la funcionalidad percibida por ellos de acuerdo con su experiencia de usuario.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icono-documento2.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 ●	Informe de resultado de rendimiento de los aplicativos desarrollados: al incorporar los ajustes, resultado de la prueba de usabilidad y accesibilidad se realiza un informe de control de cambios que evidencia la eficiencia del producto.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icono-documento2.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 ●	Informe de evaluación de la experiencia de usuario: después de todas las evaluaciones realizadas al producto multimedia de acuerdo con la experiencia de los usuarios sobre su desempeño y funcionalidad, se debe realizar un resumen ejecutivo de los cambios realizados para su puesta a punto e implementación. 
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/icono-documento2.svg' alt='Icono relacionado ')
        .tarjeta.tarjeta--azul
          .p-4
            p.mb-0 ●	Informe de cierre: es la documentación formal que indica la terminación y entrega del proyecto multimedia desarrollado, el cual deberá incluir un resumen del cierre de cada fase con el cumplimiento de objetivos y costos presupuestados al igual que los derechos de accesibilidad y usabilidad que tienen el cliente y los usuarios beneficiados.
    p.mb-5 Se pueden utilizar diferentes modelos para elaborar un informe de acuerdo con la conveniencia del equipo y/o analista del proyecto en cuanto a facilidad de elaboración para una entrega oportuna y la simplicidad y claridad para el cliente, de la información contenida en este. 
    .col-lg-8.mx-auto
      .tarjeta.color-secundario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-2
            img(src="@/assets/curso/t3/f2.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 A continuación, se presenta un ejemplo de informe cuyo modelo de plantilla le será de valor a la hora de realizar un informe de estado: 
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/CF04-Anexo_02_Plantilla_de_Informe_Estado_Proyecto.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
    p Ahora, se podrá observar un modelo de plantilla de ejemplo, donde se observa los puntos clave para tener en cuenta en la elaboración de un informe en las diferentes fases del proyecto. La primera sección de la plantilla describe la información que identifica el proyecto, el tipo de informe y los objetivos, la segunda describe la fase, la actividad y las cifras del proyecto planificadas y ejecutadas, la tercera sección de la plantilla describe el estado de la actividad, los problemas o riesgos, las actividades realizadas para resolver esto, el responsable y la fecha real de entrega de la actividad; por último, los derechos y firmas de aceptación.
    p.mb-5 Es importante reiterar que la elaboración y entrega de informes es de carácter obligatorio por parte del analista/diseñador y por lo tanto debe incluirse en el plan de trabajo, como parte de los productos entregables en cada fase del proyecto. Se invita a interactuar con el modelo de ejemplo para mayor información:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t4/f4.png', alt='Texto que describa la imagen')
      .tarjeta-numerada.color-primario.p-5(x="14%" y="9%")
        .tarjeta-numerada__numero
          .h2 1
        p.text-center <b>Proyecto:</b> Tienda on-line Sylver; es el nombre del proyecto multimedia que se va a ejecutar. 
      .tarjeta-numerada.color-primario.p-5(x="45%" y="9%")
        .tarjeta-numerada__numero
          .h2 2
        p.text-center <b>Código del cliente:</b> 00-45-Dago; es el que identifica al cliente de manera interna para el equipo o analista del proyecto.
      .tarjeta-numerada.color-primario.p-5(x="14%" y="17%")
        .tarjeta-numerada__numero
          .h2 3
        p.text-center <b>Analista:</b> Roy B; es el nombre del responsable de ejecutar y entregar el proyecto así lo desarrolle un equipo conformado por varias personas. 
      .tarjeta-numerada.color-primario.p-5(x="45%" y="17%")
        .tarjeta-numerada__numero
          .h2 4
        p.text-center <b>Fecha del informe:</b> 20/06/21; indica la fecha de entrega del informe al cliente.
      .tarjeta-numerada.color-primario.p-5(x="77%" y="6%")
        .tarjeta-numerada__numero
          .h2 5
        p.text-center <b>Tipo de Informe:</b> Como se mencionó anteriormente hay varios informes que se presentan de acuerdo con las entregas que se realizan en las diferentes fases del proyecto. En la plantilla se marca una “X” al frente del informe que corresponda. En este caso está marcado el informe de Diseño de prototipo.
      .tarjeta-numerada.color-primario.p-5(x="22%" y="34%")
        .tarjeta-numerada__numero
          .h2 6
        p.text-center <b>Objetivos:</b> Desarrollar una tienda online para la venta en línea de artículos deportivos. 
      .tarjeta-numerada.color-primario.p-5(x="36%" y="47%")
        .tarjeta-numerada__numero
          .h2 7
        p.text-center <b>Fase / Actividad del Proyecto (Avances):</b> Cada actividad entregable se ubica dentro de una fase del proyecto (análisis, planificación, ejecución, evaluación) para que el cliente tenga claridad en qué etapa se encuentra el proyecto y pueda verificar contra el plan de trabajo entregado si su ejecución está desfasada. En este caso la fase corresponde a Planificación y la actividad realizada fue el Diseño del prototipo.
      .tarjeta-numerada.color-primario.p-5(x="63%" y="47%")
        .tarjeta-numerada__numero
          .h2 8
        p.text-center <b>Cifras del proyecto:</b> Este aspecto corresponde a los costos presupuestados y las fechas de entrega del producto pactado en el cronograma, es decir se compara planificado Vs ejecutado, para detectar fácilmente si hubo alguna dificultad o problema con el desarrollo de la actividad. En este caso el costo planificado y ejecutado fue de $5.000.000, lo que indica que no hubo ningún contratiempo en este aspecto, igualmente el plazo de entrega planificado y ejecutado fue 20/06/2021 y 19/06/2021 respectivamente; esto quiere decir que el término de la actividad fue antes de lo previsto.  
      .tarjeta-numerada.color-primario.p-5(x="20%" y="64%")
        .tarjeta-numerada__numero
          .h2 9
        p.text-center <b>Estado de la Actividad:</b> Indica la situación real en la que se encuentra la actividad que en este caso es Terminada. Los diferentes estados de la actividad pueden ser iniciada, en ejecución o terminada.
      .tarjeta-numerada.color-primario.p-5(x="60%" y="60%")
        .tarjeta-numerada__numero
          .h2 10
        p.text-center <b>Problemas / Riesgos:</b> Cada actividad puede presentar contratiempos para llegar al estado terminado, los cuales se deben describir para que el cliente y los usuarios conozcan las dificultades que se pueden presentar en la ejecución. Igualmente se deben especificar los riesgos que se corren para establecer acciones de contingencia que los mitiguen. En este caso no hubo ningún problema en la ejecución de la actividad, pero si se corre el riesgo de que el diseño del prototipo no cumpla con el desempeño que espera el cliente y los usuarios.
      .tarjeta-numerada.color-primario.p-5(x="73%" y="60%")
        .tarjeta-numerada__numero
          .h2 11
        p.text-center <b>Acciones Realizadas:</b> De acuerdo con los problemas o riesgos identificados en la realización de las actividades se deben aplicar acciones de mejora que solventen la situación presentada para poder realizar la siguiente actividad sin retrasos en el cronograma. En este caso se debe realizar una prueba con los usuarios para verificar la accesibilidad y usabilidad del producto.
      .tarjeta-numerada.color-primario.p-5(x="82%" y="60%")
        .tarjeta-numerada__numero
          .h2 12
        p.text-center <b>Responsable:</b> De acuerdo con la acción que se debe realizar se debe definir el responsable de llevarla a cabo, puesto que no solamente el equipo/analista tiene responsabilidades con el producto, también el cliente debe aportar todo lo necesario para que el producto cumpla con las expectativas de los usuarios. En este caso el responsable es el analista/diseñador, ya que es él quien debe diseñar las pruebas que se van a llevar a cabo con los usuarios.
      .tarjeta-numerada.color-primario.p-5(x="94%" y="60%")
        .tarjeta-numerada__numero
          .h2 13
        p.text-center <b>Fecha de entrega:</b> Corresponde a la fecha real en la que el usuario recibió el producto de la actividad realizada, incluyendo la solución del problema o la mitigación del riesgo que implicó su desarrollo. 
      .tarjeta-numerada.color-primario.p-5(x="61%" y="80%")
        .tarjeta-numerada__numero
          .h2 14
        p.text-center <b>Derechos de usabilidad y accesibilidad:</b> Se utiliza para el informe de cierre, y es un párrafo donde el analista/diseñador responsable, confiere al cliente y usuarios los respectivos derechos de usabilidad y accesibilidad del producto multimedia, de acuerdo con los objetivos planteados al inicio del proyecto.
      .tarjeta-numerada.color-primario.p-5(x="57%" y="87%")
        .tarjeta-numerada__numero
          .h2 15
        p.text-center <b>Firmas de aceptación:</b> Se registran las firmas tanto del cliente como del analista/diseñador responsable dando su aceptación al producto multimedia entregado para dar por terminado el proyecto.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
