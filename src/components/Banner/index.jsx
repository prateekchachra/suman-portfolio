import React, {useState, useEffect} from 'react';

import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.svg'
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";

const toRotate = ["Graphic Designer", "Presentation Designer", "Story Developer"]

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    
    useEffect(() => {
    let ticker = setInterval(() => {
        tick();

    }, delta)
    return () => clearInterval(ticker);
    }, [text]);
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2);
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period);
        }
        else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum => loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <Router>
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                       {({isVisible}) =>  
                       (<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline"> Welcome to Suman's Portfolio</span>
                        <h1 className="txt-rotate">{'Hi I am Suman Chachra '}<span className="wrap">{text}</span></h1>
                        <p>I am a Graphic Designer based in <span className="text-bold">New Delhi, India</span> and have made various designs for platforms like book covers, event posters, children stories and many more</p>
                        <HashLink to='#connect'>
                        <button>Let's Connect <ArrowRightCircle size={24}/> </button>
                        </HashLink>
                        </div>)}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
        </Router>
    )
}