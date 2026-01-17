import React, { forwardRef, useRef, useState } from "react";
import "../App.css";
import "../animation.css";
import Accordion from "../components/Accordion";
const Demoday = forwardRef((props, ref) => {
  const accordionItems = [
    {
      header: "Saboria",
      content:
        "A Saboria é um plataforma que visa incluir as pessoas com restrições alimentares no cardapio dos restaurantes brasileiros, trazendo um site que localiza esses lugares e indica para o seu usuário, facilitando a conturbada busca por restaurantes que possam atender suas necessidades.",
    },
    {
      header: "Sistema de autenticação de Usuário",
      content:
        "O sistema de autenticação criado pode cadastrar usuários no banco de dados e poder dar acesso ou não a esses usuários quando tentarem acessar, dependendo se já está cadastrado e se digitou sua senha de forma correta no momento do login.",
    },
    {
      header: "Olho no Boleto",
      content:
        "A OlhoNoBoleto API é uma solução RESTful desenvolvida em Java com Spring Boot para validação segura de boletos bancários e códigos QR do Pix. A API analisa dados de pagamentos, consulta fontes externas e verifica histórico de denúncias para identificar possíveis fraudes.",
    },
    {
      header: "Gerador de imagem com IA",
      content:
        "O Gerador de Imagem com IA é uma ferramenta que permite criar imagens a partir de descrições textuais, utilizando tecnologia de aprendizado profundo para transformar palavras em visuais.",
    },
  ];
  return (
    <div className="container-accordion" ref={ref}>
      <h2>
        Principais <span>Projetos</span>
      </h2>
      <Accordion items={accordionItems} />
    </div>
  );
});

export default Demoday;
