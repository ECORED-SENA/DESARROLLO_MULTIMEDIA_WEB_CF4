<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Realización los ajustes del proyecto
    p.mb-5 Una vez presentada la propuesta al cliente, se debe verificar que cumpla con los requisitos y necesidades planteadas por los usuarios y por consiguiente realizar los cambios correspondientes antes de empezar a planificar el diseño de los elementos gráficos y componentes interactivos del proyecto. Entonces la validación implica un proceso de verificación para la realización de los cambios a la propuesta como se muestra en el diagrama de proceso a continuación.
    .col-lg-10.mx-auto.mb-5
      .container__bbg1.p-4.tarjeta
        .titulo-sexto.color-acento-contenido
          span Validación y ajustes a la propuesta del proyecto
        figure.mb-5
          img(src="@/assets/curso/t3/f1.svg" alt="Diagrama: validación y ajustes a la propuesta del proyecto")
    p De acuerdo con el diagrama anterior después de que se realiza el levantamiento de la información de los requerimientos del proyecto y se elabora el documento de la propuesta, se valida con el cliente y si este aprueba los aspectos definidos se puede proceder a la fase de planificación de lo contrario se debe revisar nuevamente los requerimientos para determinar lo que no estaba contemplado, se realizan los cambios ajustando el documento y se presenta de nuevo al cliente para su aprobación. Este proceso que hace parte de la fase de análisis del proyecto se debe realizar cuantas veces sea necesario hasta contar con el aval de los interesados, puesto que este es el insumo del cual se parte para las fases de planificación, ejecución y evaluación.
    .col-lg-10.mx-auto.mb-4
      .cajon.color-primario.p-4
        p.mb-0 El proceso de validación y ajustes en realidad se hace a lo largo de todas las fases del proyecto puesto que el cliente y los usuarios deben avalar los productos entregados por el equipo o analista responsable del proyecto. En este caso se realizan cambios a la propuesta inicial pero más adelante se llevarán a cabo en el prototipo, productos, manuales y demás documentación anexa a la entrega final del proyecto.
    p.mb-5 Es importante levantar un acta de cada producto entregado al cliente, registrando la aceptación o no aceptación de este y estableciendo los aspectos a ajustar si es necesario, fijando las nuevas fechas de entrega tanto en el acta como en el plan de trabajo.
    .col-lg-8.mx-auto
      .tarjeta.color-secundario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-2
            img(src="@/assets/curso/t3/f2.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 A continuación, se podrá descargar un modelo de acta de aceptación que se puede utilizar en las reuniones de entrega de los productos al cliente y usuarios del proyecto:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/CF04-Anexo_01_Acta_de_Aceptacion_de_Entregables.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
















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
