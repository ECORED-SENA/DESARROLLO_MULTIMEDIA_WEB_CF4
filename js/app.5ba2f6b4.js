(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(d.length)d.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"b3c38a0e","chunk-0206bfa0":"ddd1e7fa","chunk-04b93936":"b4db237a","chunk-13a6037e":"7bf899d0","chunk-16015154":"ba9696fe","chunk-17977988":"4f3efa73","chunk-2c06842c":"924e7248","chunk-2d208d90":"7abf34b7","chunk-2d21d0e2":"061f51d1","chunk-2d22c123":"fa1cefcb","chunk-2e80bb9a":"0502187c","chunk-3145fe0f":"9366f016","chunk-328f70dd":"ed4eea27","chunk-3807499c":"78c23e29","chunk-3c94cd2f":"b6023d43","chunk-3dc647fd":"a9407d7f","chunk-4cdd78c0":"dc8e6fb4","chunk-515a8379":"80282c61","chunk-53ccb27e":"a66d83e9","chunk-59974754":"aa559d02","chunk-766a929b":"b1540445","chunk-839300a6":"69725811","chunk-c796899c":"c41b2b81",comple:"bf2fd7ed",creditos:"e4c269c7",glosario:"18e430bd",intro:"a4d9a49e",referencias:"fe739982",tema1:"dd78900d",tema2:"41a5d897",tema3:"bb366936",tema4:"6feab9f1"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3c94cd2f":1,"chunk-3dc647fd":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3c94cd2f":"1dbe8d4a","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"0459bc8c","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"f48497e0","chunk-766a929b":"c167cefb","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"e2f65924",creditos:"28468235",glosario:"096bdd61",intro:"0e433876",referencias:"e7d3f467",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var m=u;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),l=Object(s["a"])(c,i,r,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");d["a"].use(m["a"]);var g=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=g,b=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Validación y ajuste del proyecto multimedia",descripcionCurso:"Este componente plantea algunas herramientas al momento de la validación y ajustes, para la presentación del proyecto multimedia a un posible cliente potencial.<br><br>Estas herramientas ayudarán a tener un conocimiento general, no solo al momento de una presentación, sino que ayudarán en los procesos mentales que se tienen habitualmente, ayudando al proceso de comunicación y al momento de coordinación de un proyecto.",imagenBannerPrincipal:n("a6f4"),fondoBannerPrincipal:n("6d5a")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Técnicas comunicativas",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Técnicas de redacción, ortografía",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Pensamiento divergente y convergente",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Uso de plataformas tecnológicas para coordinar equipos de trabajo",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Presentación de la propuesta del proyecto al cliente",hash:"t_1_4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Análisis de resultados potenciales y determinación del alcance del proyecto",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Realización los ajustes del proyecto",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Elaboración de presentaciones e informes",desarrolloContenidos:!0,subMenu:[]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Anáhuac, Generación. (2020) ¿Cuáles son las mejores técnicas de comunicación afectiva?",link:"https://www.anahuac.mx/generacion-anahuac/cuales-son-las-mejores-tecnicas-de-comunicacion-efectiva"},{referencia:"Carrera, Á. (2019). Pensamiento divergente y convergente.",link:"https://humancentric.es/pensamiento-divergente-y-convergente/"},{referencia:"Capitalismo Consciente (2018). Pensamiento convergente y divergente en la creatividad.",link:"https://capitalismoconsciente.es/blog/pensamiento-convergente-divergente-la-creatividad/"},{referencia:"RAE. Diccionario de la lengua española. (2021). Significado de Ortografía.",link:"https://dle.rae.es/ortograf%C3%ADa"},{referencia:"Marcuello García, Á. (2018). Técnicas para la comunicación eficaz.",link:"https://www.psicologia-online.com/tecnicas-para-la-comunicacion-eficaz-3124.html"},{referencia:"Nextop. (2018). Como definir correctamente el alcance del proyecto.",link:"https://nextop.es/como-definir-el-alcance-de-un-proyecto/"},{referencia:"PMI Global Standard. (2013). Guía de los Fundamentos para la Dirección de Proyectos (Guía del PMBOK) Quinta edición.",link:"https://www.academia.edu/8270802/PMBOK_Quinta_edici%C3%B3n_espa%C3%B1ol_copia"},{referencia:"Puchades, D. (2019). 25 Herramientas para mejorar el trabajo en equipo y maximizar la productividad.",link:"https://negokai.com/herramientas-para-mejorar-el-trabajo-en-equipo-y-maximizar-la-productividad.html"},{referencia:"Pursell, S. (2021). Cómo crear objetivos SMART para tu empresa.",link:"https://blog.hubspot.es/marketing/5-ejemplos-de-metas-inteligentes-para-tu-empresa"},{referencia:"Real Academia Española. (2021). Diccionario de la lengua española.",link:"https://dle.rae.es/diccionario"},{referencia:"Stinga, C. (2018). Pensamiento convergente y divergente.",link:"https://www.ruizstinga.com/pensamiento-convergente-divergente/"},{referencia:"Russo, A. (2022). Propuesta Comercial: cómo hacer una en 3 etapas",link:"https://www.rdstation.com/co/blog/construir-propuesta-comercial-exito-cliente/"},{referencia:"Pursell, S. (2021). Cómo hacer una propuesta comercial efectiva (+ plantilla).",link:"https://blog.hubspot.es/marketing/redactar-propuesta-comercial"}],glosario:[{termino:"Acta",significado:"Documento donde se relaciona el desarrollo de una reunión presencial o virtual que se ha programado previamente con un grupo de participantes."},{termino:"Contacto Visual",significado:"El contacto visual es la situación que ocurre cuando dos personas se miran el uno al otro a los ojos al mismo tiempo, el contacto visual es una forma de comunicación no verbal y se cree que tiene una gran influencia en el comportamiento social."},{termino:"Convergente",significado:"Acto de converger; hace referencia al encuentro de dos puntos, cosas, ideas o situaciones que parten de lugares diferentes."},{termino:"Divergente",significado:"Se conoce como divergente al acto de irse alejando sucesivamente una de otra, dos o más líneas continuamente."},{termino:"Elocuencia",significado:"La elocuencia es la capacidad de expresarse en público de forma elegante y persuasiva."},{termino:"Informe",significado:"Es una presentación oral o escrita de hechos, situaciones o aspectos temáticos que recopilan datos que son procesados para transmitir un tipo de información específica a una persona o público objetivo."},{termino:"Interactividad",significado:"Se utiliza para referirse a la relación entre varios usuarios, sistemas informativos, etc. Es un proceso de comunicación entre diferentes personas y diferentes medios tecnológicos."},{termino:"KPI",significado:"Conocidos como indicadores claves o medidores de desempeño, son las medidas de rendimiento de un proceso, está directamente relacionado con el objetivo y se expresa en valores porcentuales."},{termino:"Lenguaje Corporal",significado:"Es una de las formas básicas de la comunicación no verbal, estos movimientos pueden ser una guía de pensamientos o emociones. "},{termino:"Retórica",significado:"Es un campo del conocimiento que se ocupa de estudiar procedimientos y técnicas para el lenguaje, teniendo una finalidad persuasiva o estética. "},{termino:"Sofismo",significado:"Razón aparente o argumento con el que se quiere defender o persuadir lo que es falso."}],complementario:[{texto:"Full Perception, (2019). Comunicación Efectiva.",tipo:"Video",link:"https://www.youtube.com/watch?v=YBWIMFjzy5o"},{texto:"Toscano, V. TV (2018) 7 claves para comunicarse mejor.",tipo:"Video",link:"https://www.youtube.com/watch?v=6tGA8RDW-Z0"},{texto:"RD Station, 2020) ¿Cómo construir una propuesta comercial de éxito?",tipo:"Video",link:"https://www.youtube.com/watch?v=1rqFciaVO5Q"},{texto:"Hubspot. (2021). Plantilla descargable para propuesta comercial.",tipo:"Plantilla",descarga:"downloads/CF04_Anexo_Plantilla_propuesta_comercial_Hubspot.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Eduardo José Velasco Acevedo",cargo:"Experto temático",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Juan Manuel Reyes Ramírez",cargo:"Experto temático",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Carlos Andrés Suescun Lesmes",cargo:"Experto temático",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Olga Lucía Mogollón Carvajal",cargo:"Experto temático",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Zvi Daniel Grosman Landáez",cargo:"Diseñador instruccional",centro:"Centro Agropecuario la Granja - Regional Tolima"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Revisor metodológico y pedagógico",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Diseñador y evaluador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Marcela González",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Walter Roa Serrano",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Víctor Raúl Cárdenas Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"José Jaime Luis Tang Pinzón",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jessica Moreno Realpe",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Isabel Román Rueda",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var y=n("9224");o["a"].prototype.$package=y,new o["a"]({router:h,store:b["a"],render:function(e){return e(u)}}).$mount("#app")},"6d5a":function(e,a,n){e.exports=n.p+"img/banner-principal-bg.57421230.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},a6f4:function(e,a,n){e.exports=n.p+"img/banner-principal-img.064614c4.svg"}});
//# sourceMappingURL=app.5ba2f6b4.js.map