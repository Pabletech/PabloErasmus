import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ¿Por que deberia de ser seleccionado para la beca <span className="purple"> ERASMUS </span>?
            </h1>
            <p className="home-about-body">
            Soy un amante de la programación que está emocionado por la idea de unirse al Erasmus. Tengo un nivel alto de Ingls, así que no habrá problemas de comunicación. Soy un <span className="purple">APASIONADO</span> de lo que estudio con grandes ambiciones y muchas ganas de aprender. 
              <br />
              <br />¿Por qué deberían elegirme? Porque estoy listo para sumergirme en esta experiencia con toda la energía. No solo aportaré mis habilidades de programación, sino también un entusiasmo contagioso. Quiero hacer de mi participación en Erasmus algo <span className="purple">INOLVIDABLE</span> para todos nosotros.
              <i>
                <b className="purple"></b>
              </i>
              <br />
              <br />
              &nbsp;
              <i>
                <b className="purple"> </b> 
                {" "}
                <b className="purple">
                  
                </b>
              </i>
              <br />
              <br />
             <b className="purple"></b>  <b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME EN</h1>
            <p>
              Sientete libre de<span className="purple"> contactar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              
              
              
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/paablooch_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
