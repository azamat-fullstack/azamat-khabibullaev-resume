import { Link } from 'react-router-dom'
import { experiences, biographies } from '../constants'
import Skills from './skills'
import Qualification from './qualification'
import Services from './services'
import Projects from './projects'
import TestimonialsSwiper from '../components/testimonials-swiper'
import Contact from './contact'

function Home() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid section__border">
          <div className="home__data grid">
            <h1 className="home__title">
              Hi, I'm Azamat <br /> Frontend Developer <br /> Based in Tashkent
            </h1>

            <div className="home__blob grid">
              <div className="home__profile">
                <img src="/images/profile.png" alt="Profile Image" />
              </div>

              <img
                className="home__shape-waves"
                src="/svgs/shape-waves.svg"
                alt="Shape Waves"
              />
              <img
                className="home__shape-circle"
                src="/svgs/shape-circle.svg"
                alt="Shape Circle"
              />
            </div>

            <ul className="home__social">
              <li className="home__social-item">
                <Link
                  className="home__social-link"
                  to="https://github.com/azamat-fullstack"
                  target="_blank"
                >
                  <i className="ri-github-fill"></i>
                </Link>
              </li>
              <li className="home__social-item">
                <Link
                  className="home__social-link"
                  to="https://t.me/azamatkhabibullaev"
                  target="_blank"
                >
                  <i className="ri-telegram-fill"></i>
                </Link>
              </li>
              <li className="home__social-item">
                <Link
                  className="home__social-link"
                  to="https://www.instagram.com/azamatfullstack/"
                  target="_blank"
                >
                  <i className="ri-instagram-fill"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="home__info">
            {biographies.map((biography) => {
              return (
                <div key={biography.id}>
                  <h3 className="home__info-title">{biography.title}</h3>
                  <div className="home__info-description">
                    {biography.description}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="home__info">
            {experiences.map((experience) => {
              return (
                <div key={experience.id}>
                  <h3 className="home__info-title">{experience.title}</h3>
                  <div className="home__info-number">{experience.number}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Skills />
      <Qualification />
      <Services />
      <Projects />
      <section className="testimonials section">
        <h2 className="section__title">Testimonials</h2>
        <span className="section__subtitle">My client saying</span>

        <div className="container section__border">
          <div className="testimonials__container">
            <TestimonialsSwiper />
          </div>
        </div>

        <img
          className="testimonials__img"
          src="/svgs/shape-waves.svg"
          alt="Shape waves"
        />
      </section>
      <Contact />
    </>
  )
}

export default Home
