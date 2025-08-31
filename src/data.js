//imagenes de header
import imgHeader from "../public/img/air-balloon.png";

//imagenes de opiniones
import imgHistory1 from "../public/img/story-img-1.jpg";
import imgHistory2 from "../public/img/story-img-2.jpg";
import imgHistory3 from "../public/img/story-img-3.jpg";

//navigaation colors

export const navigation = [
  {
    href: "/",
    name: "Inicio",
    color: "#6495ed",
  },
  {
    href: "/tours/tours",
    name: "Tours",
    color: "#7fffd4",
  },
  {
    href: "/beneficios",
    name: "Beneficios",
    color: "#ffa07a",
  },
  {
    href: "/opiniones/stories",
    name: "Opiniones",
    color: "#f08080",
  },
];

//header information
export const headerInformation = [
  {
    img: imgHeader,
    alt: "Header Image",
  },
  {
    title: "Aventuras inolvidables",
    subtitle: "Viva la experencia; vive la vida",
  },
];

export const logoWords = [
  {
    id: 0,
    word: "R",
  },
  {
    id: 1,
    word: "o",
  },
  {
    id: 2,
    word: "l",
  },
  {
    id: 3,
    word: "o",
  },
  {
    id: 4,
    word: "T",
  },
  {
    id: 5,
    word: "o",
  },
  {
    id: 6,
    word: "u",
  },
  {
    id: 7,
    word: "r",
  },
  {
    id: 8,
    word: "s",
  },
];

//Acerca de nosotros

export const aboutUs = [
  {
    id: 1,
    title: "Valores",
    content:
      "Todo nuestro personal es caracterizado por su responsabilidad, amabilidad, confiabilidad, integridad, y pasión por su trabajo.",
  },
  {
    id: 2,
    title: "Misión",
    content:
      "LLevar a nuestros clientes a vivir experiencias turísticas únicas y mágicas.",
  },
  {
    id: 3,
    title: "Visión",
    content:
      "Convertinos en la agencia con los viajes más fascinantes en México.",
  },
];

//opiniones
export const stories = [
  {
    id: 1,
    name: "Alva Robles",
    image: imgHistory1,
    alt: "Alva Robles",
    content:
      "Precio accesible, divertidas dinámicas y una excelente organización por parte del guía. Increíble la cantidad de atractivos que se visitan en tan poco tiempo, además se otorga un buen espacio de descanso en cada viaje, súper para seguir en la aventura! Muy buen trabajo!.",
  },
  {
    id: 2,
    name: "Alan Duran",
    image: imgHistory2,
    alt: "Alan Duran",
    content:
      "Excelente servicio que ofrecen de muy buena calidad ⭐️✨100% recomendado, la verdad y súper buenos precios accesibles, dense la oportunidad de viajar con ellos no se arrepentirán !!",
  },
  {
    id: 3,
    name: "Yajaira Muñoz",
    image: imgHistory3,
    alt: "Yajaira Muñoz",
    content:
      "Super recomendado, fuimos al tour de las grutas, son puntuales, son amables, te aclaran todas tus dudas sin duda alguna los recomiendo.",
  },
];
