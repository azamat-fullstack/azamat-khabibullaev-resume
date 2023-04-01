function Qualification() {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Experience & Education</span>

      <div className="qualification__container container grid section__border">
        <div className="qualification__content">
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
        </div>

        <div className="qualification__content">
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
        </div>
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
