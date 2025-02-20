import CalcPrice from "./CalcPrice";

export default function CalcPriceSection() {
  return (
    <div className="container py-10">
      <h2 className="title">Wohnungsreinigung buchen</h2>
      <div className="flex justify-center">
        <CalcPrice first="Raum" second="Badezimmer" button="Preis kalkulieren"/>
      </div>
    </div>
  )
}