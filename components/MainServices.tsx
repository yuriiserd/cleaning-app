import { Service } from "@/types/service";
import Image from "next/image";
import Link from "next/link";

export default function MainServices({services}: {services: Service[]}) {
  return (
    <div className="container services">
      <h2 className="title !mb-6">Alle unsere Dienstleistungen</h2>
      <div className="services__items">
        {services.length > 0 && services.map(service => (
          <Link aria-label={service.name} href={`/${service.slug}`} key={service._id} className="services__item">
            <Image src={service.icon} width={70} height={70} alt="service item"/>
            <h3>{service.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}