import React, { forwardRef } from 'react'
import contatoImg from '../img/CarlosBonfimXP.jpg'
import pdfCv from '../pdf/2026.01_curriculo_carlosbonfim.docx.pdf'
import "./footer.css";
const Footer = forwardRef((props, ref) => {
  return (
    <footer className='footer-inner'>
      <div className="contact" ref={ref}>
        <h2>
          Entre em <span>contato</span>
        </h2>
        <div className="container-contact">
          <div className="links ">
            <a
              href="https://www.linkedin.com/in/carlosbonfim26/"
              target="_blank"
            >
              Linkedin
            </a>
            <a href="mailto:Carlosbonfim772@gmail.com">
              carlosbonfim772@gmail.com
            </a>
            <a
              href="https://www.instagram.com/carlosbonfim_dw/"
              target="_blank"
            >
              Instagram
            </a>
            <a download={pdfCv} href={pdfCv} className="button-cv">
              <button>Baixar CV</button>
            </a>
          </div>
          <div className="contact-img"><img src={contatoImg} alt="Carlos Oliveira Bonfim" /></div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
