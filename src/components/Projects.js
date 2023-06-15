import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/CovidDeaths_Dashboard.png";
import projImg2 from "../assets/img/covid19pandas.jpg";
import projImg3 from "../assets/img/Book-Store-Schema.jpg";
import projImg4 from "../assets/img/medical_corr1.png";
import projImg5 from "../assets/img/Insurance Dash.jpg";
import projImg6 from "../assets/img/company-erd.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Covid19 Dashboard",
      description: "Tableau",
      imgUrl: projImg1,
    },
    {
      title: "Covid19 Data Cleaning",
      description: "Pyhton Pandas",
      imgUrl: projImg2,
    },
    {
      title: "Book-Store Database",
      description: "PostgreSQL",
      imgUrl: projImg3,
    },
    {
      title: "Statistical Correlation in Medical Data",
      description: "Python Pandas",
      imgUrl: projImg4,
    },
    {
      title: "Innsurance Cost Dashboard",
      description: "Microsoft Power BI",
      imgUrl: projImg5,
    },
    {
      title: "DunderMifflin Paper Company Database",
      description: "SQL and Entity relationship (ER) Diagram",
      imgUrl: projImg6,
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
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
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
                    <Tab.Pane eventKey="second">
                      <p>Soon.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Soon.</p>
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
