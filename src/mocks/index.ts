import { TelephoneIcon, EnvelopeIcon, MapIcon } from "../components/Icons";

const testimonials = [
  {
    author: "Wanessa Souza",
    content:
      "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.",
  },
  {
    author: "Luna Falcão",
    content:
      " Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon.",
  },
  {
    author: "Marcos Felipe",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam aliquid sed.",
  },
  {
    author: "João Cândido",
    content:
      "Architecto libero totam, beatae voluptates autem quia aliquid accusamus consequatur iure quas enim iusto hic ullam? Quos earum, quibusdam fugit ipsam aspernatur similique repellendus itaque",
  },
  {
    author: "Marina Silva",
    content:
      "Et temporibus iste porro nobis quam numquam quis sed excepturi incidunt tenetur, dicta voluptatem deleniti quod.",
  },
  {
    author: "Maju Coltinho",
    content:
      "Error nihil eum quia at, ipsa libero magnam atque explicabo, totam soluta minima deserunt! Repellat quidem expedita.",
  },
];

const services = [
  {
    title: "Terapia capilar",
    description:
      "Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.",
    image: "/terapia.svg",
  },
  {
    title: "Cortes",
    description:
      "A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.",
    image: "/cortes.svg",
  },
  {
    title: "Tratamentos",
    description:
      "O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.",
    image: "/tratamentos.svg",
  },
];

const contactItems = [
  {
    content: "99990-9232",
    icon: TelephoneIcon,
  },
  {
    content: "R. Jorge Almeida Filho, 353",
    icon: MapIcon,
  },
  {
    content: "contato@beautysalon.com",
    icon: EnvelopeIcon,
  },
];

const links = [
  {
    title: "Início",
    to: "hero",
  },
  {
    title: "Sobre",
    to: "about",
  },
  {
    title: "Serviços",
    to: "services",
  },
  {
    title: "Depoimentos",
    to: "testimonials",
  },
  {
    title: "Contato",
    to: "contact",
  },
];

export { testimonials, services, contactItems, links   };
