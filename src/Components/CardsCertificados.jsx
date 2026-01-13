import React from "react";
// images
import proa from "../img/proa.png";
import uam from "../img/uam.png";
import senac from "../img/senac.png";
import ios from "../img/ios.png";
const certificados = [
  {
    tittle: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Anhembi Morumbi",
    graduation: "01/2024 - 06/2026",
    img: uam,
    skills:
      "Algoritmos e Lógica de Programação, Estrutura de Dados, Programação Orientada a Objetos (Java), Desenvolvimento Web e Mobile, Banco de Dados (MySQL), Engenharia de Software, Metodologias Ágeis, Arquitetura e Design Patterns, Spring Boot",
  },
  {
    tittle: "Desenvolvimento Full Stack",
    institution: "Instituto Proa",
    graduation: "01/2024 - 06/2024",
    img: proa,
    skills:
      "HTML, CSS, JavaScript, React JS, Git, Github, Figma, SQL Server, C#, Scrum e Metodologias Ágeis",
  },
  {
    tittle: "Desenvolvimento Back-End com Node.js",
    institution: "Senac São Paulo",
    graduation: "08/2025 - 12/2025",
    img: senac,
    skills:
      "Node.js, Express.js, Banco de Dados Relacional (MySQL) E POO(Programação Orientada a Objetos)",
  },
  {
    tittle: "Desenvolvimento Web",
    institution: "Instituto Oportunidade Social",
    graduation: "01/2023 - 06/2023",
    img: ios,
    skills: "HTML, CSS, JavaScript, Bootstrap, Git e Github",
  },
  {
    tittle: "Suporte em T.I",
    institution: "Instituto Oportunidade Social",
    graduation: "07/2022 - 12/2022",
    img: ios,
    skills:
      "Montagem de computadores; Manutenção preventiva e do processo de soluções de problemas; Instalação, configuração e gerenciamento do Windows e redes",
  },
];
const CardsCertificados = () => {
  return (
    <div className="cards-certificado">
      {certificados.map((certificado) => (
        <label key={certificado.tittle} id={certificado.tittle}>
          <input type="checkbox" name={certificado.tittle} />
          <div className="card-certificado">
            <div className="front">
              <header>
                <h2>{certificado.tittle}</h2>
              </header>
              <img
                src={certificado.img}
                alt={`Logo da instituição ${certificado.institution}`}
              />
              <h3>Formação: <span>{certificado.graduation}</span></h3>
            </div>
            <div className="back">
              <header>
                <h2>{certificado.institution}</h2>
              </header>
              <p>Habilidades aprendidas: {certificado.skills}</p>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
};

export default CardsCertificados;
