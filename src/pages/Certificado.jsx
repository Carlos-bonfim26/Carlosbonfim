import {React, forwardRef} from "react";
// images
import './certificados.css'
import '../animation.css'
import CardsCertificados from "../Components/CardsCertificados.jsx";
const Certificado = forwardRef((props, ref) => {
  return (
    <section id="certificados" ref={ref}>
      <h2>Certificados</h2>
      <CardsCertificados/>
    </section>
  )
});

export default Certificado;
