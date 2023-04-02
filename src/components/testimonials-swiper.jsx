import { useRef } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const testimonials = [
  {
    key: 'client1',
    description:
      '"Working with Azamat is to give a good impression, I carry out my project at a good cost, with excellent quality and attention. Great service and recommended."',
    name: 'Klay Harris',
    subtitle: 'Client'
  },
  {
    key: 'client2',
    description:
      '"Working with Azamat is to give a good impression, I carry out my project at a good cost, with excellent quality and attention. Great service and recommended."',
    name: 'Mary Lens',
    subtitle: 'Client'
  },
  {
    key: 'client3',
    description:
      '"Working with Azamat is to give a good impression, I carry out my project at a good cost, with excellent quality and attention. Great service and recommended."',
    name: 'Anna Chel',
    subtitle: 'Client'
  }
]

function TestimonialsSwiper() {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <>
      <Swiper
        grabCursor={true}
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
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
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.key}>
            <div className="testimonials__content">
              <p className="testimonials__description">
                {testimonial.description}
              </p>
              <div>
                <h3 className="testimonials__name">{testimonial.name}</h3>
                <span className="testimonial__subtitle">
                  {testimonial.subtitle}
                </span>
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

export default TestimonialsSwiper
