import { ArrowRightIcon } from "@/public/icons";
import Link from "next/link";
import { useState } from "react";

type CalcPriceProps = {
  first?: string;
  second?: string;
  button?: string;
}

export default function CalcPrice(props: CalcPriceProps) {

  const {first = "Raum", second = "Badezimmer", button = "Preis kalkulieren"} = props;
  const [firstCount, setFirstCount] = useState(1); 
  const [secondCount, setSecondCount] = useState(1);

  function decreaseFirst() {
    if (firstCount > 1) {
      setFirstCount(firstCount - 1);
    }
  }
  function increaseFirst() {
    setFirstCount(firstCount + 1);
  }

  function decreaseSecond() {
    if (secondCount > 1) {
      setSecondCount(secondCount - 1);
    }
  }
  function increaseSecond() {
    setSecondCount(secondCount + 1);
  }

  return (
    <div className="calcPrice">
      <div>
        <button onClick={decreaseFirst}>-</button>
        <span>{firstCount} {first}</span>
        <button onClick={increaseFirst}>+</button>
      </div>
      <div>
        <button onClick={decreaseSecond}>-</button>
        <span>{secondCount} {second}</span>
        <button onClick={increaseSecond}>+</button>
      </div>
      <Link className="btn" href={"/order/"}>
        {button}
        <ArrowRightIcon />
      </Link>
    </div>
  )
}