import { Container, Row, Col, Badge } from "react-bootstrap";

function experiencia() {
  return (
    <div>
      <h2>Experiencia Laboral</h2>

      <Container>
        <Row style={{ marginBottom: "30px", marginTop: "30px" }}>
          <Col xs={5} md={3}>
            2025
          </Col>
          <Col xs={12} md={8}>
            <p>Empendimiento</p>
            <Badge bg="dark">Presupuesto</Badge>
            <Badge bg="dark">Planificación</Badge>
            <Badge bg="dark">Gestión</Badge>
          </Col>
        </Row>

        <Row style={{ marginBottom: "30px" }}>
          <Col xs={5} md={3}>
            2021 — 2024
          </Col>
          <Col xs={12} md={8}>
            <p>Femsa Salud : Technical Lead | Product Owner</p>
            <ul>
              <li>
                Dados requerimientos funcionales del negocio, realiza diseño de
                sistemas que finalmente se descomponen en tareas y/o historias
                de usuario.
              </li>
              <li>
                Lidera equipos de desarrolladores backend, frontend, full stack
                y móviles, siendo responsable de refinar, planificar y construir
                el backlog técnico de los proyectos de ecommerce tanto web como
                mobile, para empresas del grupo FEMSA, tales como farmacias Cruz
                Verde de Chile, Cruz Verde Colombia y Fybeca de Ecuador.
              </li>
              <li>
                Responsable de eliminar bloqueos técnicos del equipo,
                coordinando con las distintas áreas de la compañía para asegurar
                el correcto avance de las iniciativas.
              </li>
              <li>
                Experiencia colaborando en la adopción desde cero de
                metodologías ágiles, apoyando en la construcción de un framework
                de trabajo ágil ajustado a las necesidades y realidad de la
                compañía.
              </li>
            </ul>
            <Badge bg="dark">Gestión de producto</Badge>
            <Badge bg="dark">Metodologías Ágiles</Badge>
            <Badge bg="dark">Gestión de backlog</Badge>
            <Badge bg="dark">AWS</Badge>
            <Badge bg="dark">Nest JS</Badge>
            <Badge bg="dark">Angular</Badge>
            <Badge bg="dark">Microservicios</Badge>
          </Col>
        </Row>

        <Row style={{ marginBottom: "30px" }}>
          <Col xs={5} md={3}>
            2015 — 2021
          </Col>
          <Col xs={12} md={8}>
            <p>LATAM Airlines : Ingeniero de Procesos IT Senior</p>
            <ul>
              <li>
                Desde una visión transversal de los procesos de la compañía y
                con un alto conocimiento del negocio, ayuda a que los sistemas
                que procesan la gestión de socios, el canje y acumulación de
                millas entre otros, funcionen de manera eficiente y segura,
                desarrollando iniciativas y proyectos para mantener y/o mejorar
                los KPI del programa de fidelización LATAMPASS.
              </li>
              <li>
                Coordina la mejora continua de importante suite de sistemas que
                gestiona los pagos utilizado a nivel mundial por LATAM Airlines.
                Responsable de la comunicación con los stakeholders sobre
                avances, estatus e incidencias reportadas.
              </li>
            </ul>
            <Badge bg="dark">Mejora Continua</Badge>
            <Badge bg="dark">Bases de datos Oracle</Badge>
            <Badge bg="dark">Gestión de Incidencias</Badge>
            <Badge bg="dark">Metodologías Ágiles</Badge>
            <Badge bg="dark">Gestión de Stackeholders</Badge>
            <Badge bg="dark">Programas de fidelización</Badge>
          </Col>
        </Row>

        <Row style={{ marginBottom: "30px" }}>
          <Col xs={5} md={3}>
            2014 — 2015
          </Col>
          <Col xs={12} md={8}>
            <p>Ingenieria MCI : Desarrollador Backend</p>
            <ul>
              <li>
                Desarrollador Java en proyectos tecnológicos con tecnologías
                IoT.
              </li>
              <li>
                Desarrolla sistema backend para el tracking de vehículos y
                activos en general de los clientes.
              </li>
              <li>
                Relator de curso de lenguaje de programación Java en OTEC de la
                compañía.
              </li>
            </ul>
            <Badge bg="dark">Java</Badge>
            <Badge bg="dark">Netty</Badge>
            <Badge bg="dark">Desarrollo backend</Badge>
            <Badge bg="dark">Relator de cursos</Badge>
          </Col>
        </Row>

        <Row style={{ marginBottom: "30px" }}>
          <Col xs={5} md={3}>
            2014
          </Col>
          <Col xs={12} md={8}>
            <p>NUWIT : Desarrollador Backend</p>
            <ul>
              <li>
                Diseño y desarrollo de servidor backend para aplicación móvil de
                Mall Plaza
              </li>
              <li>
                Desarrollo de distintos componentes de sistema para Walmart
                Chile, utilizado para gestión eficiente de los despachos de las
                compras realizadas en sitio www.lider.cl
              </li>
            </ul>
            <Badge bg="dark">Java</Badge>
            <Badge bg="dark">MongoDB</Badge>
            <Badge bg="dark">Objective-C</Badge>
            <Badge bg="dark">Desarrollo iOS</Badge>
            <Badge bg="dark">Desarrollo backend</Badge>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default experiencia;
