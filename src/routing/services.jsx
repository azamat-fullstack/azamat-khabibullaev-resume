import { motion } from 'framer-motion'

function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid section__border">
        <motion.div
          className="services__card"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <i className="ri-window-line"></i>
          <h2 className="services__title">Website Development</h2>
          <p className="services__description">
            Service that provides the best quality and at the request of the
            client, with professional work and customer support.
          </p>
          <div className="services__border"></div>
        </motion.div>

        <motion.div
          className="services__card"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <i className="ri-server-line"></i>
          <h2 className="services__title">Backend Development</h2>
          <p className="services__description">
            Service that provides the best quality and at the request of the
            client, with professional work and customer support.
          </p>
          <div className="services__border"></div>
        </motion.div>

        <motion.div
          className="services__card"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <i className="ri-smartphone-line"></i>
          <h2 className="services__title">Mobile Development</h2>
          <p className="services__description">
            Service that provides the best quality and at the request of the
            client, with professional work and customer support.
          </p>
          <div className="services__border"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
