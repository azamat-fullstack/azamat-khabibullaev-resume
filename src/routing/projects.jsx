import ProjectsSwiper from '../components/projects-swiper'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="container section__border">
        <motion.div
          className="projects__container"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ProjectsSwiper />
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
