import { skills } from '../constants'

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My favourite skills</span>

      <div className="skills__container container grid section__border">
        {skills.map((skill) => (
          <div className="skills__content" key={skill.key}>
            <h3 className="skills__title">
              {skill.icon} {skill.title}
            </h3>
            <div className="skills__info">
              {skill.techs.map((tech) => (
                <div className="skills__data" key={tech.key}>
                  <div className="skills__blob">
                    <img
                      className={tech.className}
                      src={tech.url}
                      alt={skill.label}
                    />
                  </div>
                  <h3 className="skills__name">{tech.title}</h3>
                  <span className="skills__subtitle">{tech.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
