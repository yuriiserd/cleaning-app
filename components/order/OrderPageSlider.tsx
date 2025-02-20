import ArrowRightLongIcon from "@/public/icons/arrow-right-long-icon";
import LocationIcon2 from "@/public/icons/location-icon2";
import TimeIcon2 from "@/public/icons/time-icon2";
import WaletIcon from "@/public/icons/walet-icon";
import Image from "next/image";
import { useRef, useState } from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import OrderDate from "./OrderDate";
import OrderDiscount from "./OrderDiscount";
import OrderServices from "./OrderServices";
import OrderAddress from "./OrderAddress";
import OrderPayment from "./OrderPayment";
import { Service } from "@/types/service";

export default function OrderPageSlider({service}: {service: Service}) {

  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderStart = useRef<HTMLDivElement>(null);

  function scrollToSliderStart() {
    sliderStart.current?.scrollIntoView({ behavior: 'instant' });
  }

  return (
    <div className="order__slider">
      <div className="slider relative">
        <div className="absolute left-0 -top-48" ref={sliderStart}></div>
        <ul className='navigation'>
          <li className={`${activeIndex > -1 ? "active" : ""}`}>
            <button onClick={() => {swiper?.slideTo(0)}}>
              <div className="navigation__number">1</div>
              <div className="flex gap-2 items-center">
                <TimeIcon2 />
                Datum
              </div>
            </button>
          </li>
          <li className="line active"></li>
          <li className={`${activeIndex > 0 ? "active" : ""}`}>
            <button onClick={() => {swiper?.slideTo(1)}}>
              <div className="navigation__number">2</div>
              <div className="navigation__text">
                <LocationIcon2 />
                Adresse
              </div>
            </button>
          </li>
          <li className={`line ${activeIndex > 0 ? "active" : ""}`}></li>
          <li className={`${activeIndex > 1 ? "active" : ""}`}>
            <button onClick={() => {swiper?.slideTo(2)}}>
              <div className="navigation__number">3</div>
              <div className="flex gap-2 items-center">
                <WaletIcon />
                Bezahlung
              </div>
            </button>
          </li>
        </ul>
        <Swiper
          slidesPerView={1}
          onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setSwiper(swiper)}
          autoHeight={true}
          allowTouchMove={false}
          
        >
          <SwiperSlide>
            <OrderDate dates={service.datesDiscount} title={service.datesDiscountTitle}/>
            <OrderDiscount />
            <OrderServices 
              additionalServices={service.additionalServices} 
              dryServices={service.dryServices} 
              addTitle={service.additionalServicesTitle} 
              dryTitle={service.dryServicesTitle}
              swiper={swiper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <OrderAddress swiper={swiper}/>
          </SwiperSlide>
          <SwiperSlide>
            <OrderPayment />
          </SwiperSlide>
        </Swiper>
        <div className="slider__arrows">
          <button
            aria-label='Vorherige Folie' // Previous slide
            className='disabled:opacity-50 '
            onClick={() => {
              scrollToSliderStart()
              swiper?.slidePrev();
            }}
            disabled={activeIndex === 0}
          >
            <div className="rotate-180"><ArrowRightLongIcon /></div> Zurück
          </button>
          {activeIndex < 2 && (
            <button
              aria-label='Nächste Folie' // Next slide
              className='disabled:opacity-50 '
              onClick={() => {
                scrollToSliderStart()
                swiper?.slideNext();
              }}
              disabled={activeIndex === 2}
            >
              Nach vorne <div><ArrowRightLongIcon /></div>
            </button>
          )}
        </div>
      </div>
      
    </div>
  )
}