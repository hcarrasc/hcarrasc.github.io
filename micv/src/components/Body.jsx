import { useState } from "react";
import ACercaDeMi from "./Acercademi.jsx";
import Experiencia from "./Experiencia.jsx";
import Contacto from "./Contacto.jsx";
import RedesSociales from "./Redessociales.jsx";
import ListaMenu from "./Listamenu.jsx";
import { Container, Col, Row, Image } from "react-bootstrap";

function body() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [section, setSection] = useState("proyectos");

  // contenido dinámico según sección
  const renderContent = () => {
    switch (section) {
      case "inicio":
        return <ACercaDeMi />;
      case "proyectos":
        return <Experiencia />;
      case "contacto":
        return <Contacto />;
      default:
        return <p>Selecciona una sección del menú.</p>;
    }
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        {/* Columna fija */}
        <Col md={4}>
          <div
            style={{
              position: "sticky",
              top: "0",
              padding: "20px",
            }}
          >
            <h2 className="d-flex justify-content-center">Héctor Carrasco</h2>
            <h5 className="d-flex justify-content-center">
              Magíster en Ingeniería Informática
            </h5>
            <ListaMenu setSection={setSection} />
          </div>
          <RedesSociales />
        </Col>

        {/* Columna desplazable */}
        <Col md={8}>
          <div style={{ padding: "20px" }}>{renderContent()}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default body;
