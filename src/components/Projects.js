import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-avigan.png";
import projImg2 from "../assets/img/project-skills.png";
import projImg3 from "../assets/img/project-ecco.png";
import projImg4 from "../assets/img/project-misak.png";
import projImg5 from "../assets/img/project-estudio.png";
import projImg6 from "../assets/img/project-sercor.png";
import projImg7 from "../assets/img/project-citobot.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Avigan Cloud",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Smart Ambulance",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Citobot",
      description: "Development & Update",
      imgUrl: projImg7,
    },
    {
      title: "Ecco",
      description: "Development & Update",
      imgUrl: projImg3,
    },
    {
      title: "Misak Colombia",
      description: "Implementation & Update",
      imgUrl: projImg4,
    },
    {
      title: "Estudio Bf",
      description: "Implementation & Update",
      imgUrl: projImg5,
    },
    {
      title: "Sercor",
      description: "Implementation & Update",
      imgUrl: projImg6,
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
                Each of the following projects represents my passion for creating and solving problems through technology.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="favorites">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   {/*  <Nav.Item>
                      <Nav.Link eventKey="favorites">Tab 1</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="favorites">Favorites</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="favorites">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
