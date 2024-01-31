import {
  //email,
  iglesia,
  llamada,
  recepcion,
  whatsapp,
  persona,
  reloj,
  iglesiaPrograma,
  recepcionPrograma,
  comidaPrograma,
  valsPrograma,
  //circuloRosa,
} from "./../assets/icons";

import {
  galeria1,
  galeria2,
  //galeria3,
  galeria4,
  //galeria5,
  galeria6,
  historia2,
  historia3,
  hisotria1,
  historia4,
  historia5,
  historia6,
  historia7,
  historia8,
  historia9,
  historia10,
  historia11,
  iglesiaFoto,
  salon,
  padres,
  padrinos,
} from "./../assets/images";

export const ubicaciones = [
  {
    img: iglesiaFoto,
    icon: iglesia,
    titulo1: "CEREMONIA RELIGIOSA",
    titulo2: "Catedral Toluca de Lerdo",
    icon2: reloj,
    hora: "13:00",
    parrafo: "Av. Independencia 303, Centro, 50000 Toluca de Lerdo, Méx.",
    btn1: "VER EN GPS",
    url1: '"https://maps.app.goo.gl/r6GejTonLwqwEt1o6"',
  },
  {
    img: salon,
    icon: recepcion,
    titulo1: "RECEPCIÓN",
    titulo2: "Salón Dalias Paris",
    icon2: reloj,
    hora: "15:00",
    parrafo:
      "Calle Ignacio López Rayón Tejocote 320, 50010 Santiago Miltepec, Méx.",
    btn1: "VER EN GPS",
    url1: '"https://maps.app.goo.gl/kdzPSM31eNd3YAXs6"',
  },
];
export const confirmaciones = [
  {
    icon: whatsapp,
    titulo1: "CONFIRMAR POR",
    titulo2: "Whatsapp",
    btn1: "7221406931",
    btn2: "7228444568",
    url1: '"https://wa.me/52111111"',
    url2: '"https://wa.me/52222222"',
  },
  {
    icon: llamada,
    titulo1: "CONFIRMAR POR",
    titulo2: "Llamada",
    btn1: "7221406931",
    btn2: "7228444568",
    url1: '"https://wa.me/523333333"',
    url2: '"https://wa.me/524444444"',
  },
  /*{
    icon: email,
    titulo1: "CONFIRMAR POR",
    titulo2: "Correo Electrónico",
    btn1: "Enviar",
  },*/
];

export const datosInvitado = [
  {
    icon2: persona,
    label: "PASES",
    input: "4",
  },
  // {
  //   icon2: reloj,
  //   label: "MESA",
  //   input: "8",
  // },
  // {
  //   icon2: circuloRosa,
  //   label: "ASIENTO",
  //   input: "3-5",
  // },
];

export const slideData = [
  {
    id: 1,
    img: galeria1,
    alt: "Foto 1",
  },
  {
    id: 2,
    img: galeria2,
    alt: "Foto 2",
  },
  /*{
    id: 3,
    img: galeria3,
    alt: "Foto 3",
  },*/
  {
    id: 4,
    img: galeria4,
    alt: "Foto 4",
  },
  /*{
    id: 5,
    img: galeria5,
    alt: "Foto 4",
  },*/
  {
    id: 6,
    img: galeria6,
    alt: "Foto 4",
  },
];
export const historia = [
  {
    id: 1,
    img: hisotria1,
    alt: "Foto 1",
  },
  {
    id: 2,
    img: historia2,
    alt: "Foto 2",
  },
  {
    id: 3,
    img: historia3,
    alt: "Foto 3",
  },
  {
    id: 4,
    img: historia4,
    alt: "Foto 4",
  },
  {
    id: 5,
    img: historia5,
    alt: "Foto 5",
  },
  {
    id: 6,
    img: historia6,
    alt: "Foto 6",
  },
  {
    id: 7,
    img: historia7,
    alt: "Foto 7",
  },
  {
    id: 8,
    img: historia8,
    alt: "Foto 8",
  },
  {
    id: 9,
    img: historia9,
    alt: "Foto 9",
  },
  {
    id: 10,
    img: historia10,
    alt: "Foto 10",
  },
  {
    id: 11,
    img: historia11,
    alt: "Foto 11",
  },
];

export const programa = [
  {
    icon: iglesiaPrograma,
    hora: "13:00",
    itinerario: "CEREMONIA RELIGIOSA",
  },
  {
    icon: recepcionPrograma,
    hora: "15:00",
    itinerario: "RECEPCIÓN",
  },
  {
    icon: comidaPrograma,
    hora: "16:00",
    itinerario: "COMIDA",
  },
  {
    icon: valsPrograma,
    hora: "18:00",
    itinerario: "VALS",
  },
];

export const familia = [
  {
    titulo1: "CON LA BENDICIÓN DE ",
    titulo2: "Mis Padres",
    nombre1: "Maria del Carmen Martínez Valdez ",
    nombre2: "Horacio Pablo Flores",
    img: padres,
  },
  {
    titulo1: "PADRINOS DE VELACIÓN",
    titulo2: "Mis Padrinos",
    nombre1: "María Guadalupe Martínez Valdez",
    nombre2: "Rigoberto Baltazar de Santiago",
    img: padrinos,
  },
];
