import React, { forwardRef, useRef, useState } from "react";
import "../App.css";
import "../animation.css";
import Accordion from "../Components/Accordion";
const Demoday = forwardRef((props, ref) => {
  const accordionItems = [
    {
      header: "Saboria",
      content:
        "A Saboria é um plataforma que visa incluir as pessoas com restrições alimentares no cardapio dos restaurantes brasileiros, trazendo um site que localiza esses lugares e indica para o seu usuário, facilitando a conturbada busca por restaurantes que possam atender suas necessidades. O projeto foi desevolvido em equipe sendo meu projeto de demoday do Instituto Proa, onde eu foi o Desenvolvedor Front-end, utilizando React JS para a construção do site.",
    },
    {
      header: "Sistema de autenticação de Usuário",
      content:
        "O sistema de autenticação criado pode cadastrar usuários no banco de dados e poder dar acesso ou não a esses usuários quando tentarem acessar, dependendo se já está cadastrado e se digitou sua senha de forma correta no momento do login. Projeto desenvolvido na faculdade durante o 3º semestre da Análise e Desenvolvimento de Sistemas, utilizando Java, Mysql, HTML, CSS e JavaScript, Selenium e Junit 4 para testes automatizados e o Apache Tomcat como servidor web, além dos designers patterns Facade e Proxy.",
    },
    {
      header: "Olho no Boleto",
      content:
        "A OlhoNoBoleto API é uma solução RESTful desenvolvida em Java com Spring Boot para validação segura de boletos bancários e códigos QR do Pix. A API analisa dados de pagamentos, consulta fontes externas e verifica histórico de denúncias para identificar possíveis fraudes. Feito durante o 4º semestre da faculdade, sendo meu projeto de A3 junto com bradesco sobre golpes financeiros, onde eu fui o desenvolvedor back-end do projeto.",
    },
    {
      header: "Gerador de imagem com IA",
      content:
        "O Gerador de Imagem com IA é uma ferramenta que permite criar imagens a partir de descrições textuais, utilizando tecnologia de aprendizado profundo para transformar palavras em visuais. foi utilizado a API hugging face para gerar as imagens, sendo um projeto pessoal desenvolvido para explorar as capacidades da inteligência artificial na criação artística.",
    },
  ];
  return (
    <div className="container-accordion autoShow" ref={ref}>
      <h2>
        Principais <span>Projetos</span>
      </h2>
      <Accordion items={accordionItems} />
    </div>
  );
});

export default Demoday;
