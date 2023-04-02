import { motion } from 'framer-motion'

function Qualification() {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Experience & Education</span>

      <div className="qualification__container container grid section__border">
        <motion.div
          className="qualification__content"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="qualification__title">
            <i className="ri-pencil-ruler-2-line"></i>
            Education
          </h3>
          <div className="qualification__info">
            <div>
              <h3 className="qualification__name">
                Radio Communication & Broadcasting
              </h3>
              <span className="qualification__country">Tashkent - Collage</span>
              <span className="qualification__year">2011 / 2014</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="qualification__content"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="qualification__title">
            <i className="ri-building-line"></i>
            Work
          </h3>
          <div className="qualification__info">
            <div>
              <h3 className="qualification__name">Frontend Developer</h3>
              <span className="qualification__country">
                Davr Bank - Tashkent
              </span>
              <span className="qualification__year">2021 / 2023</span>
            </div>
          </div>
        </motion.div>
      </div>

      <img
        className="qualification__img"
        src="/svgs/shape-circle.svg"
        alt="Shape Circle"
      />
    </section>
  )
}

export default Qualification
