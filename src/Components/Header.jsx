import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
const Header = ({
  onScrollToSobre,
  onScrollToHabilidades,
  onScrollToProjetos,
  onScrollToContato,
  onScrollToDemoday,
  onScrollToCertificado,
}) => {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container className="justify-content-end">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            data-bs-theme="dark"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Item>
                <Nav.Link>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={onScrollToSobre}>Sobre Mim</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={onScrollToHabilidades}>Habilidades</Nav.Link>
              </Nav.Item>
               <Nav.Item>
                <Nav.Link onClick={onScrollToCertificado}>Certificados</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={onScrollToProjetos}>Projetos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={onScrollToContato}>Contato</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
