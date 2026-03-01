import { useRef } from "react";
import Home from "./pages/Home";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Demoday from "./pages/Demoday";
import MainProjects from "./pages/MainProjects";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Certificado from "./pages/Certificado";
import Projects from "./pages/Projects";        
function App() {
  const sobreRef = useRef(null);
  const habilidadesRef = useRef(null);
  const projetosRef = useRef(null);
  const demodayRef = useRef(null);
  const contatoRef = useRef(null);
  const certificadoRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
        <Header
          onScrollToSobre={() => scrollToSection(sobreRef)}
          onScrollToHabilidades={() => scrollToSection(habilidadesRef)}
          onScrollToDemoday={() => scrollToSection(demodayRef)}
          onScrollToProjetos={() => scrollToSection(projetosRef)}
          onScrollToContato={() => scrollToSection(contatoRef)}
          onScrollToCertificado={() => scrollToSection(certificadoRef)}
        />
        <Home />
        <AboutMe ref={sobreRef} />
        <Skills ref={habilidadesRef} />
        <Certificado ref={certificadoRef}/>
        <Projects ref={projetosRef}/>

      <Footer ref={contatoRef}/>
    </>
  );
}

export default App;
