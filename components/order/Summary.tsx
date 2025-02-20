import { ArrowDownIcon } from "@/public/icons";
import DiscountIcon from "@/public/icons/discount-icon";
import QuestionIcon from "@/public/icons/question-icon";
import TimeIcon from "@/public/icons/time-icon"
import Link from "next/link";
import { useState } from "react";

export default function OrderSummary({}) {

  const [referal, setReferal] = useState(false);

  return (
    <div className="order__summary__box">
      <h3>Reinigung der Wohnung mit 1 Wohnzimmer und 1 Badezimmer, Küche, Flur 75.00 EUR</h3>
      <div className="order__summary__box__time">
        <TimeIcon />
        <p><span>≈</span> 2 Stunden</p>
      </div>
      <div className="order__summary__box__referal">
        <div className="flex flex-wrap mb-5">
          <button onClick={() => {
            setReferal(!referal)
          }} className={`flex items-center gap-1 ${referal ? "active" : ""}`}>Empfehlungsprogramm <ArrowDownIcon/></button>
          <Link href="#" className='ml-auto flex gap-2 items-center text-[#858585] hover:underline'>
            <QuestionIcon />
            <span>Wie funktioniert das?</span>
          </Link>
        </div>
        {referal && (
          <div className={`order__summary__box__referal__input`}>
            <input type="text" placeholder="Aktionscode eingeben" />
            <button>übernehmen</button>
          </div>
        )}
      </div>
      <div className="order__summary__box__discount">
        <div className="w-[32px] h-[32px]">
          <DiscountIcon />
        </div>
        <input type="text" placeholder="Aktionscode eingeben" />
        <button>übernehmen</button>
      </div>
      <div className="order__summary__box__price">
        <span>Za zahlen: </span><p>60.00 EUR <span>75.00 EUR</span></p>
        <div>*Ihr 20% Steuervorteil nach §35a EStG</div>
      </div>
      <button className="order__summary__box__button btn">Bestellen</button>
    </div>
  );
}