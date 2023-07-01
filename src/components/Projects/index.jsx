import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

import colorSharp from '../../assets/img/color-sharp2.png'
import { ProjectCard } from '../ProjectCard';

import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { bookProjects, discountProjects, eventProjects } from '../../constants/projects';

export const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                       {({isVisible}) =>  
                       (<div className={isVisible ? "animate__animated animate__slideInDown" : ""}>
                      <h2>Projects</h2>
                      <p>All the projects I've done for various clients</p>
                      </div>
                       )}
                       </TrackVisibility>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills">
                        <Nav.Item>
                         <Nav.Link eventKey="first">Book Covers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="second">Event Posters</Nav.Link>
                    </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="third">Discount Flyers</Nav.Link>
                    </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    bookProjects.map((project, index) => (
                                       <ProjectCard title={project.title}
                                       description={project.description}
                                       imgUrl={project.imgUrl}/>
                                    ))
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row>
                                {
                                    eventProjects.map((project, index) => (
                                       <ProjectCard title={project.title}
                                       description={project.description}
                                       imgUrl={project.imgUrl}/>
                                    ))
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row>
                                {
                                    discountProjects.map((project, index) => (
                                       <ProjectCard key={index}
                                       {...project}
                                       />
                                    ))
                                }
                            </Row>
                        </Tab.Pane>
                      </Tab.Content>
                      </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className="background-image-right" />
        </section>
    )
}