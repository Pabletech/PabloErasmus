import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Ultimos <strong className="purple">Proyectos</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui puedes ver los ultimos proyectos en los que he trabajado.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Web4u"
              description="Web4u surgió como un proyecto integral para un trabajo académico, donde mi objetivo fue desarrollar una presencia digital efectiva para una empresa ficticia. "
              ghLink="https://github.com/soumyajit4419/Editor.io"
                          
            />
          </Col>

          

      

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
