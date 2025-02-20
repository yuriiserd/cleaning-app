import { useEffect, useState } from "react";

type Percentage = {
  "radio-1": number,
  "radio-2": number,
  "radio-3": number,
  "radio-4": number
}

export default function FrequencyCost() {

  const price = ["60.00", "72.00", "84.00"];
  const [newPrice, setNewPrice] = useState(price);
  const [checkedId, setCheckedId] = useState<keyof Percentage>('radio-4');
  const percentage: Percentage = {
    "radio-1": 0.2,
    "radio-2": 0.15,
    "radio-3": 0.1,
    "radio-4": 0
  }

  useEffect(() => {
    setNewPrice(price.map((item) => (parseFloat(item) - parseFloat(item) * percentage[checkedId]).toFixed(2)));
  }, [checkedId]);
  // newPrice = price.map((item) => (parseFloat(item) - parseFloat(item) * 0.2).toFixed(2));



  return (
    <div className="freq-cost container">
      <h2 className="title">Wie viel kostet es?</h2>
      <div>
        <ul>
          <li>
            <input type="radio" name="radio" id="radio-1" 
              checked={checkedId === 'radio-1'} 
              onChange={() => setCheckedId('radio-1')}
            />
            <label className="radio-label" htmlFor="radio-1"><span>-20%</span> Einmal pro Woche</label>
          </li>
          <li>
            <input type="radio" name="radio" id="radio-2" 
              checked={checkedId === 'radio-2'} 
              onChange={() => setCheckedId('radio-2')}
            />
            <label className="radio-label" htmlFor="radio-2"><span>-15%</span> Alle zwei Wochen</label>
          </li>
          <li>
            <input type="radio" name="radio" id="radio-3" 
              checked={checkedId === 'radio-3'} 
              onChange={() => setCheckedId('radio-3')}  
            />
            <label className="radio-label" htmlFor="radio-3"><span>-10%</span>  Einmal pro Monat</label>
          </li>
          <li>
            <input type="radio" name="radio" id="radio-4" 
              checked={checkedId === 'radio-4'} 
              onChange={() => setCheckedId('radio-4')}/>
            <label className="radio-label" htmlFor="radio-4">Einmalige Reinigung</label>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-between">
        <div className="freq-cost__box">
          <h3>Studio-Wohnung</h3>
          <p>Der Preis beinhaltet die Reinigung eines Zimmers, der Küche, des Flurs und eines Badezimmers einmal pro Woche</p>
          <p className="price">{newPrice[0]} EUR {checkedId !== "radio-4" && <span>{price[0]} EUR</span>}</p>
          <button className="btn w-full">Bestellen</button>
        </div>
        <div className="freq-cost__box">
          <h3>Zweizimmerwohnung</h3>
          <p>Der Preis beinhaltet die Reinigung von zwei Zimmern, der Küche, des Flurs und eines Badezimmers einmal pro Woche</p>
          <p className="price">{newPrice[1]} EUR {checkedId !== "radio-4" && <span>{price[1]} EUR</span>}</p>
          <button className="btn w-full">Bestellen</button>
        </div>
        <div className="freq-cost__box">
          <h3>Dreizimmerwohnung</h3>
          <p>Der Preis beinhaltet die Reinigung von drei Zimmern, der Küche, des Flurs und eines Badezimmers einmal pro Woche</p>
          <p className="price">{newPrice[2]} EUR {checkedId !== "radio-4" && <span>{price[2]} EUR</span>}</p>
          <button className="btn w-full">Bestellen</button>
        </div>
      </div>
    </div>
  )
}