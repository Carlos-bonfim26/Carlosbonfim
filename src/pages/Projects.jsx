import { forwardRef } from "react";
import "./projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";
import saboriaImg from "../img/saboria.png";
import compilotecaImg from "../img/compiloteca2.png";
import javaProject from "../img/projetoJava.png";
import desenho from "../img/desenho.png";
import geradorIA from "../img/geradorImgIA.png";
import olhoNoBoleto from '../img/olhoNoBoleto.png'
import quiz from "../img/quiz.png";
import chatbot from "../img/chatbot.png";
const project = [
  {
    name: "Saboria",
    img: saboriaImg,
    github: "https://github.com/saboria-oficial/plataformaSaboria",
  },
  {
    name: "Gerador de Imagens com IA",
    img: geradorIA,
    github: "https://github.com/Carlos-bonfim26/gerador-de-imagem-IA",
  },
    {
    name: "Olho no Boleto",
    img: olhoNoBoleto,
    github: "https://github.com/Carlos-bonfim26/OlhoNoBoleto-API",
  },
  {
    name: "Olho no Boleto",
    img: chatbot,
    github: "https://github.com/Carlos-bonfim26/ChatBot_JS",
  },
  {
    name: "Compiloteca",
    img: compilotecaImg,
    github: "https://github.com/Carlos-bonfim26/biblioteca_eccomerce",
  },
  {
    name: "Sistema de Autenticação",
    img: javaProject,
    github:
      "https://github.com/Carlos-bonfim26/sistema_autenticador_deUsuario_comInterface",
  },
  {
    name: "Quiz",
    img: quiz,
    github: "https://github.com/Carlos-bonfim26/quiz-conhecimentos",
  },
];
const Projects = forwardRef((ref) => {
  return (
    <Swiper
      grabCursor
      centeredSlides
      slidesPerView="auto" 
      spaceBetween={80}
      effect="coverflow"
      loop
      pagination={{ clickable: true }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: false,
      }}
      breakpoints={{
        0: { spaceBetween: 30 },
        600: { spaceBetween: 80 },
      }}
      modules={[EffectCoverflow, Pagination]}
    >
      {project.map((project) => (
        <SwiperSlide
          key={project.name}
          style={{ backgroundImage: `url(${project.img})` }}
        >
          <div className="slide-project" ref={ref}>
            <h2>{project.name}</h2>
            <a href={project.github}>Ver</a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default Projects;
