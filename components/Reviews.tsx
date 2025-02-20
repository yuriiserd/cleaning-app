import { ArrowInbox, ArrowRightIcon, EditIcon } from "@/public/icons";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { tempReviews } from "@/lib/tempReviews";
import ReviewCard from "./ReviewCard";

export default function Reviews() {

  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container reviews">
      <h2 className="title">Bewertungen</h2>
      <div className="slider">
        <div className="arrows">
          <button
            aria-label='Vorherige Folie' // Previous slide
            className='transform rotate-180 disabled:opacity-20 disabled:text-black'
            onClick={() => swiper?.slidePrev()}
            disabled={activeIndex === 0}
          >
            <ArrowInbox />
          </button>
          <button
            aria-label='Nächste Folie' // Next slide
            className='disabled:opacity-50 '
            onClick={() => swiper?.slideNext()}
            disabled={activeIndex === 3}
          >
            <ArrowInbox />
          </button>
        </div>
        <Swiper
          onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setSwiper(swiper)}
          spaceBetween={50}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            }
          }}
        >
          {tempReviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pt-10 flex flex-wrap justify-center items-center gap-x-[70px] gap-y-[30px]">
        <button className="btn btn_border">
          <EditIcon />
          Ihre Bewertung schreiben
        </button>
        <button className="btn btn_border">
          Preis kalkulieren
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  )
}