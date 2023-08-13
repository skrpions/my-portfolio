import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

// Recent
import projSmart from "../assets/img/project-smart.png";
import projCitobot from "../assets/img/project-citobot.png";
import projEcco from "../assets/img/project-ecco.png";
import projAvigan from "../assets/img/project-avigan.png";

// Startup
import projMisak from "../assets/img/project-misak.png";
import projEstudio from "../assets/img/project-estudio.png";
import projSercor from "../assets/img/project-sercor.png";

// Freelance
import projQuipux from "../assets/img/project-quipux.png";
import projPresupuesto from "../assets/img/project-presupuesto.png";
import projSigma from "../assets/img/project-sigma.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const recenteProjects = [
    {
      title: "Smart Ambulance",
      description: "Design & Development",
      imgUrl: projSmart,
    },
    {
      title: "Citobot",
      description: "Development & Update",
      imgUrl: projCitobot,
    },
    {
      title: "Ecco",
      description: "Development & Update",
      imgUrl: projEcco,
    },
    {
      title: "Avigan Cloud",
      description: "Design & Development",
      imgUrl: projAvigan,
    }    
  ];

  const startupProjects = [
    {
      title: "Quipux",
      description: "Design",
      imgUrl: projQuipux,
    },
    {
      title: "Presupuesto",
      description: "Development",
      imgUrl: projPresupuesto,
    },
    {
      title: "Sigma",
      description: "Development",
      imgUrl: projSigma,
    }  
  ];

  const freelanceProjects = [
    {
      title: "Misak Colombia",
      description: "Implementation & Update",
      imgUrl: projMisak,
    },
    {
      title: "Estudio Bf",
      description: "Implementation & Update",
      imgUrl: projEstudio,
    },
    {
      title: "Sercor",
      description: "Implementation & Update",
      imgUrl: projSercor,
    }
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                Here are some recent and past projects I've worked on.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   { <Nav.Item>
                      <Nav.Link eventKey="first">Recent Works</Nav.Link>
                    </Nav.Item>}
                    <Nav.Item>
                      <Nav.Link eventKey="second">Freelance</Nav.Link>
                    </Nav.Item>
                    {<Nav.Item>
                      <Nav.Link eventKey="third">Startup Projects</Nav.Link>
                    </Nav.Item>}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          recenteProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          freelanceProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          startupProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
