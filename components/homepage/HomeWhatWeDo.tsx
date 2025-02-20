import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeWhatWeDo({ whatWeDo }: { whatWeDo: string[]}) {
  return (
    <div className="container what-we-do">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={32}
        initialSlide={2}
      >
        {whatWeDo.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="what-we-do__item">
              <p>{item}</p>
            </div>
          </SwiperSlide>
        
        ))}
      </Swiper>
    </div>
  )
}