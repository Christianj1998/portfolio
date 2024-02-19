import './home.css'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Cards } from "./Cards";
import projImg1 from "../assets/img/wedPresupuesto.png";
import projImg2 from "../assets/img/wedEstudiantes.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const MyProjects = () => {

  const MyProjects = [
    {
      title: "Wed presupuesto",
      description: "Herramienta para tomar el control de tus ingresos y egresos",
      imgUrl: projImg1,
      url: "https://christianj1998.github.io/App_presupuesto/"
    },
    {
      title: "Wep App panel Admin ",
      description: "Desarrollo de una Herramienta para las instituciones pública",
      imgUrl: projImg2,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Galería de proyectos</h2>
                <p>.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__pulse" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          MyProjects.map((project, index) => {
                            return (
                              <Cards
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
      
    </section>
  )
}
