import ProjectsSwiper from '../components/projects-swiper'

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="container section__border">
        <div className="projects__container">
          <ProjectsSwiper />
        </div>
      </div>
    </section>
  )
}

export default Projects
