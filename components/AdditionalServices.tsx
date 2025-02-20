import Image from "next/image";
import Link from "next/link";
import { AdditionalService } from "@/types/additionalService";
import { useState } from "react";


export default function AdditionalServices({addServices}: {addServices: AdditionalService[]}) {

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container services additional-services">
      <h2 className="title !mb-6">Alle unsere Dienstleistungen</h2>
      <div className="services__items">
        {addServices?.length > 0 && addServices.map((service, index) => {
          if (!showMore && index > 6) return null;
          return (
            <Link aria-label={service.name} href={`/${service.image}`} key={service._id} className="services__item">
              <Image src={service.image} width={70} height={70} alt="service item"/>
              <h3>{service.name}</h3>
              <div className="service-price">{service.price}</div>
            </Link>
          )
        })}
      </div>
      {!showMore && (
        <div className="flex justify-center mt-10">
          <Link 
            href="#" 
            className="btn btn_border min-w-[240px]"
            onClick={(e) => {
              e.preventDefault();
              setShowMore(true);
            }}  
          >Zeig mehr</Link>
        </div>
      )}
    </div>
  )
}