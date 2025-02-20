import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { ArrowInbox } from '@/public/icons';
import { useState } from 'react';

export default function CleaningComponents() {

  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="container cleaning-components">
      <h2 className="title">Worin besteht die Reinigung?</h2>
      <div className="slider">
        <div className='arrows'>
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
        <ul className='navigation'>
          <li className={`${activeIndex === 0 ? "active" : ""}`}><button onClick={() => {swiper?.slideTo(0);}}>IM ZIMMER</button></li>
          <li className={`${activeIndex === 1 ? "active" : ""}`}><button onClick={() => {swiper?.slideTo(1);}}>IM FLUR</button></li>
          <li className={`${activeIndex === 2 ? "active" : ""}`}><button onClick={() => {swiper?.slideTo(2);}}>KÜCHE</button></li>
          <li className={`${activeIndex === 3 ? "active" : ""}`}><button onClick={() => {swiper?.slideTo(3);}}>BADEZIMMER</button></li>
        </ul>
        <Swiper
          slidesPerView={1}
          onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          <SwiperSlide>
            <Image src="/homepage/slider1-1.jpg" width={1440} height={687} alt="IM ZIMMER" />
            <div className="text-block text-block-1"><span className='left'></span>Wir wischen Staub von allen Freiliegenden Oberflächen ab</div>
            <div className="text-block text-block-2"><span className='bottom'></span>Wir machen die Betten und wechseln die Wäsche</div>
            <div className="text-block text-block-3"><span className='right'></span>Wir waschen Fensterbänke, Heizkörper, Fußleisten, Griffe, Türen, Schalter</div>
            <div className="text-block text-block-4"><span className='bottom'></span>Wir saugen und waschen die Böden</div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/homepage/slider1-2.jpg" width={1440} height={687} alt="IM FLUR" />
            <div className="text-block text-block-1"><span className='left'></span>Wir ordnen Schuhe an</div>
            <div className="text-block text-block-2"><span className='left'></span>Wir staplen und hängen Ihre Kleidung vorsichtig auf</div>
            <div className="text-block text-block-3"><span className='bottom'></span>Wir entsorgen den Müll</div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/homepage/slider1-3.jpg" width={1440} height={687} alt="KÜCHE" />
            <div className="text-block text-block-1"><span className='top'></span>Wir wished Fliesen ab</div>
            <div className="text-block text-block-2"><span className='right'></span>Wir wischen alle Oberflächen, den KÜhlschrank, dieDunstabzugshaube, dieKÜchengeräte und die Mikrowelle ab</div>
            <div className="text-block text-block-3"><span className='top'></span>Wir order die Dinge ordentlich an</div>
            <div className="text-block text-block-4"><span className='bottom'></span>Wir order StÜhle an und schaffen Ordnung</div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/homepage/slider1-4.jpg" width={1440} height={687} alt="BADEZIMMER" />
            <div className="text-block text-block-1">Wir reinigen und desinfizieren den WC-Becken</div>
            <div className="text-block text-block-2"><span className='left'></span>Wir können Ihre Sachen in die Waschmaschine werfen</div>
            <div className="text-block text-block-3"><span className='top'></span>Wir waschen Bad, Wasserhähne und Duschkabinen. Aber denken Sie daran: Wenn Ihre Duschkabine oder Badewanne stark verschmutzt ist, sollten Sie darüber warnen</div>
            <div className="text-block text-block-4"><span className='right'></span>Wir wischen alle Oberflächen ab</div>
            <div className="text-block text-block-5"><span className='right'></span>Wir waschen den Becken</div>
            <div className="text-block text-block-6"><span className='bottom'></span>Wir waschen den Boden und die Fußleisten, saugen die Teppiche</div>
            <div className="text-block text-block-7"><span className='top'></span>Wir reinigen Spiegel</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}