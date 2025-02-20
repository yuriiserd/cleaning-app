import Image from "next/image";

export default function HomeInventar() {
  return (
    <div className="container inventar">
      <h2 className="title !mb-6">Inventar Reinigungskräfte</h2>
      <p>Bei unserer Arbeit verwenden wir spezielle Geräte und umweltfreundliche Reinigungsmittel der bekannten Marken Karcher, Hako, Nilfisk, Pro-brite, Kiehl.</p>
      <div className="inventar__items">
        <div className="inventar__item">
          <Image src="/homepage/instruments1.png" width={290} height={270} alt="instrument"/>
          <h3>Multifunktionale Staubsauger</h3>
        </div>
        <div className="inventar__item">
          <Image src="/homepage/instruments2.png" width={290} height={270} alt="instrument"/>
          <h3>Professionelle Dampferzeuger</h3>
        </div>
        <div className="inventar__item">
          <Image src="/homepage/instruments3.png" width={290} height={270} alt="instrument"/>
          <h3>Wäscher- und Rotationsmaschinen</h3>
        </div>
        <div className="inventar__item">
          <Image src="/homepage/instruments4.png" width={290} height={270} alt="instrument"/>
          <h3>7 Arten professioneller Reinigungsmittel</h3>
        </div>
      </div>
    </div>
  )
}