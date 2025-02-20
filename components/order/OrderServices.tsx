import { ArrowDownIcon } from "@/public/icons";
import { AdditionalService } from "@/types/additionalService"
import { DryService } from "@/types/dryService"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function OrderServices({
  additionalServices, 
  dryServices, 
  addTitle, 
  dryTitle,
  swiper
} : {
  additionalServices: AdditionalService[], 
  dryServices: DryService[], 
  addTitle: string, 
  dryTitle: string,
  swiper: any
}) {

  const [showDry, setShowDry] = useState(false);
  const discount = 0.1;

  useEffect(() => {
    swiper?.updateAutoHeight()
  }, [showDry])

  return (
    <div className="order__services">
      <div className="order__add-services">
        <h3>{addTitle}</h3>
        <div className="order__services__list">
          {additionalServices.map((service, index) => {
              const newPostfix = service.price.split(" ");
              newPostfix.shift();
              const discountPrice = (parseFloat(service.price) - (parseFloat(service.price) * discount)).toFixed(2)
              const discountPostfix = newPostfix.join(" ");
              return (
                <button key={index} className="order__services__item">
                  <img src={service.image} alt={service.name} />
                  <h4>{service.name}</h4>
                  <p> {discountPrice} {discountPostfix} {discount !== 0 && (<span>{service.price}</span>)}</p>
                </button>
              )
            })}
        </div>
      </div>
      <div className="order__dry-services">
        <button className="order__dry-services__open" onClick={() => {
          setShowDry(!showDry);
        }}>
          <Image src="/icons/dry-services.svg" alt="arrow-down" width={50} height={34} />
          <h3>{dryTitle}</h3>
          <ArrowDownIcon />
        </button>
        {showDry && (
          <div className={`order__services__list ${showDry ? "active" : ""}`}>
            {dryServices.map((service, index) => {
              const newPostfix = service.price.split(" ");
              newPostfix.shift();
              const discountPrice = (parseFloat(service.price) - (parseFloat(service.price) * discount)).toFixed(2)
              const discountPostfix = newPostfix.join(" ");
              return (
                <button key={index} className="order__services__item">
                  <img src={service.image} alt={service.name} />
                  <h4>{service.name}</h4>
                  <p> {discountPrice} {discountPostfix} {discount !== 0 && (<span>{service.price}</span>)}</p>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}