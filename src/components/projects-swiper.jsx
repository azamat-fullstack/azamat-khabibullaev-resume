import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const projects = [
  {
    key: 'project1',
    subtitle: 'Web',
    title: 'Modern Website',
    url: '',
    imageUrl: '/images/project1.jpg'
  },
  {
    key: 'project2',
    subtitle: 'Web',
    title: 'Modern Website',
    url: '',
    imageUrl: '/images/project2.jpg'
  },
  {
    key: 'project3',
    subtitle: 'Web',
    title: 'Modern Website',
    url: '',
    imageUrl: '/images/project3.jpg'
  },
  {
    key: 'project4',
    subtitle: 'Web',
    title: 'Modern Website',
    url: '',
    imageUrl: '/images/project4.jpg'
  }
]

function ProjectsSwiper() {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        pagination={{
          clickable: true
        }}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current

            // Re-init navigation
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
          })
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: -56
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: -56
          }
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.key}>
            <div className="projects__content">
              <img
                className="projects__img"
                src={project.imageUrl}
                alt={project.title}
              />
              <div>
                <span className="projects__subtitle">{project.subtitle}</span>
                <h1 className="projects__title">{project.title}</h1>
                <Link className="projects__link" to={project.url}>
                  View demo <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev" ref={navigationPrevRef}>
        <i className="ri-arrow-left-s-line"></i>
      </div>
      <div className="swiper-button-next" ref={navigationNextRef}>
        <i className="ri-arrow-right-s-line"></i>
      </div>
    </>
  )
}

export default ProjectsSwiper
