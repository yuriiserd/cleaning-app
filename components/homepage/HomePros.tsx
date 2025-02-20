import Image from "next/image"

export default function HomePros() {
  return (
    <div className="container pros">
      <div className="pros__item">
        <Image src="/homepage/plus1.svg" width={70} height={70} alt="text"/>
        <h3>Fester Preis</h3>
        <p>Die Kosten für die Reinigung richten sich nach der Anzahl der Zimmer, nicht nach der Wohnungsgröße</p>
      </div>
      <div className="pros__item">
        <Image src="/homepage/plus2.svg" width={70} height={70} alt="text"/>
        <h3>Mit einer Kreditkarte oder in bar</h3>
        <p>Sie wählen, ob Sie mit einer Kreditkarte oder in bar bezahlen möchten</p>
      </div>
      <div className="pros__item">
        <Image src="/homepage/plus3.svg" width={70} height={70} alt="text"/>
        <h3>Unsere Dienstleistungen sind versichert</h3>
        <p>Bezahlung nur nach Reinigung</p>
      </div>
      <div className="pros__item">
        <Image src="/homepage/plus4.svg" width={70} height={70} alt="text"/>
        <h3>Alles bereit für die Reinigung</h3>
        <p>Wir haben für jeden Auftrag die notwendigen Reinigungsmittel, Werkzeuge und Staubsauger</p>
      </div>
    </div>
  )
}