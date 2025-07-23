import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import highq from "../../Assets/Projects/highq.png";
import elearn from "../../Assets/Projects/elearn.png";
import gstrucking from "../../Assets/Projects/gstrucking.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few real-world projects I’ve built and deployed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={highq}
              isBlog={false}
              title="HighQClasses – Modular E-Learning Platform"
              description="Built a simple, easy-to-use web app for teachers to manage student details, batch assignments, and fee tracking. Features include fee completion tracking, batch info management, and a responsive UI for ease of use."
              // ghLink=""
              demoLink="http://highqclasses.ideovent.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elearn}
              isBlog={false}
              title="E-learning Live Project"
              description="Developed a modular e-learning platform enabling students to purchase courses via secure payments. Built using React.js and Node.js, and integrated with MongoDB for course, user, and transaction management."
              // ghLink=""
              demoLink="https://finolity.trainercentralsite.in/#/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gstrucking}
              isBlog={false}
              title="GS Trucking Web App"
              description="A full-stack logistics management system for GS Trucking. Features include real-time driver-truck assignment, delivery tracking, and secure CRUD operations with a MySQL-backed database."
              // ghLink=""
              demoLink="https://www.gstruckinginc.com/erp/login"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
