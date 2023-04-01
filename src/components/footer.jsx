import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo">
          <Link className="footer__logo-link" to="/">
            <h1 className="footer__logo-title">Azamat</h1>
          </Link>
          <p className="footer__logo-text">Frontend Developer</p>
        </div>

        <ul className="footer__list">
          <li className="footer__item">
            <Link className="footer__link" to="/">
              Home
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="/skills">
              Skills
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="/projects">
              Projects
            </Link>
          </li>
        </ul>

        <ul className="footer__socials">
          <li className="footer__socials-item">
            <Link
              className="footer__socials-link"
              to="https://github.com/azamat-fullstack"
              target="_blank"
            >
              <i className="ri-github-fill"></i>
            </Link>
          </li>
          <li className="footer__socials-item">
            <Link
              className="footer__socials-link"
              to="https://t.me/azamatkhabibullaev"
              target="_blank"
            >
              <i className="ri-telegram-fill"></i>
            </Link>
          </li>
          <li className="footer__socials-item">
            <Link
              className="footer__socials-link"
              to="https://www.instagram.com/azamatfullstack/"
              target="_blank"
            >
              <i className="ri-instagram-fill"></i>
            </Link>
          </li>
        </ul>

        <span className="footer__copy">
          Proudly made in
          <img
            className="footer__copy-img"
            src="/images/uzb-flag.png"
            alt="Uzbekistan flag"
            title="Uzbekistan"
            width={24}
            height={24}
          />
          by Azamat Khabibullaev
        </span>
      </div>
    </footer>
  )
}

export default Footer
