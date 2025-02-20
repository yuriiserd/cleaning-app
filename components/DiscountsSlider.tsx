import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import DiscountCard from "./DiscontCard";
import Link from "next/link";

export default function DiscountsSlider() {

  const [swiper, setSwiper] = useState<any>(null);

  return (
    <div className="discounts container">
      <h2 className="title !mb-6">Sonderangebote und Rabatte</h2>
      <Swiper
        slidesPerView={3}
        // onSwiper={(swiper) => console.log(swiper)}
        spaceBetween={50}
        initialSlide={2}
        centeredSlides={true}
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
        <SwiperSlide>
          <DiscountCard image="/discount/1.jpg" title="Empfehlen Sie einen Freund und erhalten Sie einen Rabatt" description="Für jeden Freund von Ihnen, der aufgrund Ihrer Empfehlung einen Auftrag erteilt, schenken wir Ihnen 15 % Rabatt auf Ihre nächste Reinigung! Für einen Freund – 15 % Rabatt!" url="/discount1" />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCard image="/discount/2.jpg" title="Wir bieten eine chemische Reinigung des Stuhls an" description="Bei Bestellung einer chemischen Reinigung von Möbeln oder Teppichen in Höhe von 3000 UAH. Als Geschenk reinigen wir den Stuhl chemisch!" url="/discount1" />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCard image="/discount/3.jpg" title="Rabatt auf die Reinigung Häuser ab 300 m2" description="Bestellen Sie die Reinigung eines Hauses mit einer Fläche von mehr als 300 Quadratmetern. und erhalten Sie einen individuellen Rabatt." url="/discount1" />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCard image="/discount/4.jpg" title="Allgemeine Reinigung kostenlos" description="Schließen Sie einen Vertrag mit einer Laufzeit von 1 Jahr ab und sichern Sie sich einen Generalreinigungsservice! *Nicht mit Rabatten kombinierbar" url="/discount1" />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCard image="/discount/5.jpg" title="Küchenspülen Haushaltsgeräte Für ein Geschenk" description="Wenn Sie eine allgemeine Reinigung bestellen, erhalten Sie als Geschenk die Reinigung Ihrer Küchengeräte. (1 Einheit). *Nicht mit Rabatten kombinierbar." url="/discount1" />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCard image="/discount/6.jpg" title="Rabatt für Rentner" description="Liebe Rentner! Eine Ermäßigung steht Ihnen gegen Vorlage eines Rentenausweises dauerhaft (Frauen ab 55 Jahren, Männer ab 60 Jahren) zur Verfügung." url="/discount1" />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center mt-10">
        <Link href="#" className="btn btn_border min-w-[240px]">Zeig mehr</Link>
      </div>
    </div>
  )
}