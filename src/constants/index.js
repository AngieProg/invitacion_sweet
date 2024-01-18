import {
  email,
  iglesia,
  llamada,
  recepcion,
  whatsapp,
  persona,
  reloj,
} from "./icons";

import {
  galeria1,
  galeria2,
  galeria3,
  galeria4,
  historia2,
  historia3,
  hisotria1,
  iglesiaFoto,
  salon,
} from "./images";

export const ubicaciones = [
  {
    img: iglesiaFoto,
    icon: iglesia,
    titulo1: "CEREMONIA RELIGIOSA",
    titulo2: "Iglesia Ejemplo",
    icon2: reloj,
    hora: "18:00",
    parrafo:
      "Calle ejemplo #33, Colonia Ejemplo, Ciudad Ejemplo, Estado Ejemplo, CP:00000",
    btn1: "VER EN GPS",
  },
  {
    img: salon,
    icon: recepcion,
    titulo1: "RECEPCION",
    titulo2: "Salón Ejemplo",
    icon2: reloj,
    hora: "19:30",
    parrafo:
      "Calle ejemplo #33, Colonia Ejemplo, Ciudad Ejemplo, Estado Ejemplo, CP:00000",
    btn1: "VER EN GPS",
  },
];
export const confirmaciones = [
  {
    icon: whatsapp,
    titulo1: "CONFIRMAR POR",
    titulo2: "Whatsapp",
    btn1: "+5587230943",
    btn2: "+5523876512",
  },
  {
    icon: llamada,
    titulo1: "CONFIRMAR POR",
    titulo2: "Llamada",
    btn1: "+5587230943",
    btn2: "+5523876512",
  },
  {
    icon: email,
    titulo1: "CONFIRMAR POR",
    titulo2: "Correo Electrónico",
    btn1: "Enviar",
  },
];

export const datosInvitado = [
  {
    icon2: persona,
    label: "PASES",
    input: "4",
  },
  {
    icon2: reloj,
    label: "MESA",
    input: "8",
  },
  {
    /*{
      icon2: cuenta,
      label: "ASIENTO",
      input: "3-5",
    },*/
  },
];

export const slide = [
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
  {
    id: 3,
    img: galeria3,
    alt: "Foto 3",
  },
  {
    id: 4,
    img: galeria4,
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
];
