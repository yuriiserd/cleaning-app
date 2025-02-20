import Image from "next/image";

export default function HomeStats() {
  return (
    <div className="container stats ">
      <h2 className="title">“Das Reinigungsteam” in Zahlen</h2>
      <div className="stats__items">
        <div className="stats__item">
          <Image src="/homepage/stats1.svg" width={150} height={100} alt="stats"/>
          <h3>4,6</h3>
          <p>durchschnittlich Kundenbewertung</p>
        </div>
        <div className="stats__item">
          <Image src="/homepage/stats2.svg" width={100} height={100} alt="stats"/>
          <h3>16</h3>
          <p>Jahre Erfahrung</p>
        </div>
        <div className="stats__item">
          <Image src="/homepage/stats3.svg" width={100} height={100} alt="stats"/>
          <h3>1.233.000</h3>
          <p>abgeschlossene Bestellungen</p>
        </div>
      </div>
    </div>
  )
}