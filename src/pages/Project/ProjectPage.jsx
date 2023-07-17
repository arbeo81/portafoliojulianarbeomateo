import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImg = require.context('../../img', true);

const Project = () => {
  const [estadoModal20, cambiarEstadoModal20] = useState(false);
  const [estadoModal21, cambiarEstadoModal21] = useState(false);
  const [estadoModal22, cambiarEstadoModal22] = useState(false);
  const [estadoModal23, cambiarEstadoModal23] = useState(false);
  const [estadoModal24, cambiarEstadoModal24] = useState(false);
  const [estadoModal25, cambiarEstadoModal25] = useState(false);
  const [estadoModal26, cambiarEstadoModal26] = useState(false);
  const [estadoModal27, cambiarEstadoModal27] = useState(false);
  const [estadoModal28, cambiarEstadoModal28] = useState(false);
  const [estadoModal29, cambiarEstadoModal29] = useState(false);

  return (
    <div>

      <HeaderPage />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
        </section>
        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal20(!estadoModal20)}>
              <img src={proyectsImg(`./proyecto-20.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal21(!estadoModal21)}>
              <img src={proyectsImg(`./proyecto-21.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal22(!estadoModal22)}>
              <img src={proyectsImg(`./proyecto-22.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal23(!estadoModal23)}>
              <img src={proyectsImg(`./proyecto-23.jpg`)} className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal24(!estadoModal24)}>
              <img src={proyectsImg(`./proyecto-24.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal25(!estadoModal25)}>
              <img src={proyectsImg(`./proyecto-25.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal26(!estadoModal26)}>
              <img src={proyectsImg(`./proyecto-26.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal27(!estadoModal27)}>
              <img src={proyectsImg(`./proyecto-27.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal28(!estadoModal28)}>
              <img src={proyectsImg(`./proyecto-28.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal29(!estadoModal29)}>
              <img src={proyectsImg(`./proyecto-29.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
        </section>
      </main>

      <Modal
        estado={estadoModal20}
        cambiarEstado={cambiarEstadoModal20}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-20.com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-20-p1'
                  defaultMessage='Food website, page created for the sale of fast food, with a modern and pleasant design.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-20-p2'
                  defaultMessage='App to visually attract the user, with excellent quality culinary preparations and an attractive interface.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://webcomidajarbeo.netlify.app" target="_blank">https://webcomidajarbeo.netlify.app</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal21}
        cambiarEstado={cambiarEstadoModal21}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-21.com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-21-p1'
                  defaultMessage='Justice, page created for law firm.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-21-p2'
                  defaultMessage='Focused on showing the client the value, experience and professionalism of the lawyers they can hire, choosing the category of their specific case.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://webabogadosjarbeo.netlify.app" target="_blank">https://webabogadosjarbeo.netlify.app</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal22}
        cambiarEstado={cambiarEstadoModal22}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-22.com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-22-p1'
                  defaultMessage='Car dealership website, new and used. Clean, visual and intuitive.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-22-p2'
                  defaultMessage='It shows the cars for sale, the services they offer to the customer and the opinions of the users.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://concesionariajarbeo.netlify.app/" target="_blank">https://concesionariajarbeo.netlify.app</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal23}
        cambiarEstado={cambiarEstadoModal23}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-23.com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-23-p1'
                  defaultMessage='Zapatillas Argentinas, is an online shoe store.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-23-p2'
                  defaultMessage='Designed so that the customer can search for the products in a very fast and easy way, can calculate the shipment and pay online.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://zapatillasargentinasjarbeo.netlify.app" target="_blank">https://zapatillasargentinasjarbeo.netlify.app</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal24}
        cambiarEstado={cambiarEstadoModal24}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-24.com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-24-p1'
                  defaultMessage='Web application created with react as a Coderhouse final year project.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-24-p2'
                  defaultMessage='It has a search engine, profitability calculator and functionality to save properties.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://proyectojavascriptjarbeo.netlify.app" target="_blank">https://proyectojavascriptjarbeo.netlify.app</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal25}
        cambiarEstado={cambiarEstadoModal25}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-25.com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-25-p1'
                  defaultMessage='Website of the architecture studio Estudio Vk.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-25-p2'
                  defaultMessage='The page is designed in conjunction with the studio to expose their works and explain to their potential clients about the services they offer.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://estudiovk.netlify.app" target="_blank">https://estudiovk.netlify.app</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal26}
        cambiarEstado={cambiarEstadoModal26}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-26.com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-26-p1'
                  defaultMessage='Real Estate website, with a dark and elegant style.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-26-p2'
                  defaultMessage='The site has information about properties, real estate and also has comments from satisfied customers.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://inmobiliaria-jarbeo.netlify.app" target="_blank">https://inmobiliaria-jarbeo.netlify.app</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal27}
        cambiarEstado={cambiarEstadoModal27}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-27.com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-27-p1'
                  defaultMessage='Information app about all kinds of Cryptocurrencies.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-27-p2'
                  defaultMessage='It also has a section on information from the crypto world. The entire App is powered by API.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://cryptoappjarbeo.netlify.app" target="_blank">https://cryptoappjarbeo.netlify.app</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal28}
        cambiarEstado={cambiarEstadoModal28}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-28.com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-28-p1'
                  defaultMessage='App game of the mythical game of Ta te ti.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-28-p2'
                  defaultMessage='Created with Html, Css and Javascript, with a nice design and all the features of the game.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://tatetijarbeo.netlify.app/" target="_blank">https://tatetijarbeo.netlify.app/</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal29}
        cambiarEstado={cambiarEstadoModal29}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-29.com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-29-p1'
                  defaultMessage='App of the usual game, rock, paper or scissors.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-29-p2'
                  defaultMessage='The game has all the features of the real game, with a nice design and an agile understanding to start the game.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://piedrapapeltiejerajarbeo.netlify.app/" target="_blank">https://piedrapapeltiejerajarbeo.netlify.app/</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
export default Project;