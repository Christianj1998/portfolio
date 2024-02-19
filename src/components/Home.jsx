import './home.css'
import { useState, useEffect } from "react";
//? npm install react-bootstrap bootstrap
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/respon.png";
//? npm install react-bootstrap-icons
import { ArrowRightCircle } from 'react-bootstrap-icons';
//? npm install animate.css
import 'animate.css';
//? npm install react-on-screen
import TrackVisibility from 'react-on-screen';

export const Home = () => {
    //estado para manejar la el movimiento del texto en aparición
  const [loopNum, setLoopNum] = useState(0);
    //estado que indica se se esta borrando o escribiendo
  const [isDeleting, setIsDeleting] = useState(false);
  // El texto que se esta mostrando
  const [text, setText] = useState('');
  //Intervalo de tiempo entre cambios de texto
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // indice del texto actual en la lista toRotate
  const [index, setIndex] = useState(1);
  //Lista de títulos entre cambios completos de texto
  const toRotate = [ "Full Stack Web Developer"];

  const period = 2000;
// Manejar la animación 
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    
    if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline blacks">Bienvenidos a mi Portafolio</span>
                <h1 className="blacks">{`Hola! soy Christian Gutierrez`} <span className="txt-rotate browns" dataPeriod="1000" data-rotate='[ "Web Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p className="blacks">Más de 2 años he combatido en el cuadrilátero digital, dominando tanto el <em className='browns'> backend </em> como el <em className='browns'> frontend </em>. Entreno sin descanso,aprendiendo nuevas tecnologías cada día para convertirme en un maestro de mi arte. <em className='browns'>HTML</em>, <em className='browns'>CSS</em>, <em className='browns'>JavaScript</em>, <em className='browns'>PHP8</em>, <em className='browns'>Laravel</em>, <em className='browns'>React.js</em> y las <em className='browns'>bases de datos</em> son mis armas, con las que construyo sitios web <em className='browns'>impenetrables</em> y <em className='browns'>Responsivos</em>. </p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
