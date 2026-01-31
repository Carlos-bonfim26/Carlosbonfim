import React, { forwardRef, useEffect, useState } from "react";
import img from "../img/carlosbonfim.png";
import imgResponsiva from "../img/PerfilCarlosBonfim.png";
import "../animation.css";
import "./AboutMe.css";
const AboutMe = forwardRef((props, ref) => {
  const [imageSrc, setImageSrc] = useState("");

  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= 610) {
      setImageSrc(imgResponsiva);
    } else {
      setImageSrc(img);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-about autoShow" ref={ref}>
      <div className="img-about">
        <img src={imageSrc} alt="Carlos Bonfim" />
        <div className="border-rectangle"></div>
        <div className="rectangle"></div>
      </div>
      <div className="text-about">
        <div className="border-rectangle"></div>
        <h2>
          Quem <span>Sou?</span>
        </h2>
        <p>
          Olá, me chamo Carlos Bonfim e atualmente atuo como Aprendiz em
          Observabilidade na XP Inc., a maior corretora de investimentos do
          país. Nessa função, trabalho com monitoramento de servidores e
          aplicações, realizando a criação e ajuste de alertas no Dynatrace,
          além do desenvolvimento de datasources e visualizações no Grafana,
          contribuindo diretamente para a estabilidade e confiabilidade dos
          sistemas.
        </p>
        <p>
          Sou estudante de Análise e Desenvolvimento de Sistemas na Universidade
          Anhembi Morumbi, onde ingressei em 2024 com bolsa integral. Meu
          interesse pela área de tecnologia começou em 2023, quando iniciei meus
          estudos em Desenvolvimento Web. Desde então, me apaixonei pela
          construção de interfaces, pela lógica de programação e pela
          complexidade envolvida na resolução de problemas, fatores que tornam a
          área desafiadora e extremamente estimulante para mim.
        </p>
        <p>
          Ao longo da minha trajetória, conquistei experiências e
          reconhecimentos importantes. Em 2022, tive a honra de representar
          minha turma no evento de melhores TCCs, apresentando no palco da
          TOTVS. Já em 2024, fui reconhecido como aluno destaque durante minha
          formação no Instituto PROA, onde desenvolvi não apenas habilidades
          técnicas, mas também competências interpessoais fundamentais para o
          mercado.
        </p>
        <p>
          Convido você a continuar navegando para conhecer minhas habilidades
          técnicas, projetos desenvolvidos e minha evolução profissional ao
          longo da carreira.
        </p>
        <div className="rectangle"></div>
      </div>
    </div>
  );
});

export default AboutMe;
