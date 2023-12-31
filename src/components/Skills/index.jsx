import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I have developed various projects using these skills for
                different clients coming from all industries
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Event Poster" />
                  <h5>Event Poster Design</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Stories" />
                  <h5>Stories Design</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Presentation" />
                  <h5>Presentation Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Book Covers" />
                  <h5>Book Cover Design</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" alt="Background Left"/>
    </section>
  );
};
