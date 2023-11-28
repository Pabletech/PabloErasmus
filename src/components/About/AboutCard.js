import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Buenas, me llamo <span className="purple">Pablo Calvo </span>
            tengo <span className="purple">17</span> años y soy de <span className="purple"> Granada, España.</span>
            <br />
           Actualmente estoy estudiando Microinformatica y Redes con la meta de estudiar Desarrollo Web.
            <br />
           Me considero una persona agradable, adaptable, competitivo, ambicioso, innovador y con Liderazgo.
            <br />
            Mi <b className="purple">SUEÑO</b> es poder dedicarme a la programacion e intentar trabajar/vivir en otros paises europeos. Mis lenguajes favoritos son
              <i>
                <b className="purple"> HTML, CSS y JavaScript. </b>
              </i><b className="purple"></b>
            <br />
            Aparte de programar, estas son otras actividades que me gustan hacer:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar Videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Hacer deporte
            </li>
            <li className="about-activity">
              <ImPointRight /> Pasar tiempo con familia y amigos
            </li>
            <li className="about-activity">
              <ImPointRight /> Ver series y peliculas
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
