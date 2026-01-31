import React, { forwardRef } from "react";
import Skill from "../Components/Skill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { FaJava } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiInsomnia } from "react-icons/si";
import { SiDynatrace } from "react-icons/si";

import '../animation.css'
const Skills = forwardRef((props, ref) => {
  const habilidades = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      progress: 90,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
      progress: 85,
    },
    {
      name: "Javascript",
      icon: <RiJavascriptFill />,
      progress: 70,
    },
    {
      name: "React",
      icon: <FaReact />,
      progress: 70,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      progress: 80,
    },
    {
      name: "Figma",
      icon: <CgFigma />,
      progress: 70,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      progress: 50,
    },
    {
      name: "Java",
      icon: <FaJava />,
      progress: 50,
    },
    {
      name: "PHP",
      icon: <SiPhp />,
      progress: 50,
    },
    {
      name: "C#",
      icon: <TbBrandCSharp />,
      progress: 30,
    },
    {
      name: "MySQL",
      icon: <GrMysql />,
      progress: 65,
    },
    {
      name: "Git e Github",
      icon: <FaGitAlt />,
      progress: 70,
    },
    {
      name: "Insomnia",
      icon: <SiInsomnia />,
      progress: 50,
    },
    {
      name: "Dynatrace",
      icon: <SiDynatrace />,
      progress: 40,
    },
  ];
  return (
    <div className="Skills" ref={ref}>
      <h2 className="">
        <span>Minhas</span> Skills
      </h2>
      <div className="container-skills">
        {
          habilidades.map((habilidade, index)=>{
           return  <Skill key={index} {...habilidade}/>
          })
        }
      </div>
    </div>
  );
});

export default Skills;
