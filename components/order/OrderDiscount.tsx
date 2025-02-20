import { useState } from "react";

type DiscountType = {
  name: string;
  value: string;
}
const discounts = [
  {name: "Einmal pro Woche", value: "-20%"},
  {name: "Alle zwei Wochen", value: "-15%"},
  {name: "Einmal pro Monat", value: "-10%"},
  {name: "Einmalige Reinigung", value: "0%"},
]

export default function OrderDiscount({total = "75.00 EUR"}) {

  const [discount, setDiscount] = useState<DiscountType>({name: "Einmalige Reinigung", value: "0%"});
  const [showDiscont, setShowDiscont] = useState(false);

  function handleDiscountChange(value: string, name: string) {
    setDiscount({
      name,
      value
    });
    setShowDiscont(false);
  }

  return (
    <div className="order__discount">
      <h3>Häufigere Reinigung - höherer Rabatt</h3>
      <p className="text-[18px] mb-4">Die Kosten für Ihre nächste Reinigung, wenn Sie sich anmelden</p>
      <div className={`flex items-center gap-9 justify-between z-20 relative border border-[#EB7E5A] bg-[#EB7E5A] py-5 px-5 text-white text-[18px] font-medium w-full max-w-[555px] ${showDiscont ? "border-b-white rounded-b-none box-border rounded-t-[10px]" : "rounded-[10px]"}`} onClick={() => setShowDiscont(!showDiscont)}>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <span className="text-[20px]">{discount.name}</span>
            <span className="text-[24px] font-semibold">{(parseFloat(total) + parseFloat(total) * parseInt(discount.value) / 100).toFixed(2)} EUR</span>
          </div>
          <div className={`bg-white rounded-[10px] flex justify-center relative text-[#EB7E5A]  font-bold text-[22px] ${discount.value === "0%" ? "w-[40px] right-[30px] p-1" : "w-[100px] py-3 px-4"}`}>
            {discount.value === "0%" ? "1" : discount.value}
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
        {showDiscont && (
          <div style={{ width: 'calc(100% + 2px)' }}  className='flex flex-col gap-2 absolute text-black top-full bg-white z-20 py-2 px-3 left-[-1px] border border-[#EB7E5A] rounded-[10px] border-t-0 rounded-t-none box-border'>
            {discounts.map((item, index) => {
              if (item.name !== discount.name) {
                const price = (parseFloat(total) + parseFloat(total) * parseInt(item.value) / 100).toFixed(2);
                return (
                  <button onClick={() => {handleDiscountChange(item.value, item.name)}} className='w-full py-2 px-2 text-left' value="0%">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex flex-col">
                        <span className="text-[20px]">{item.name}</span>
                        <span className="text-[24px] font-semibold">{price} EUR</span>
                      </div>
                      <div className={`bg-white relative flex justify-center mr-[55px] rounded-[10px] border border-[#EB7E5A]   font-bold text-[22px] ${item.value === "0%" ? "w-[40px] right-[30px] text-white bg-[#EB7E5A] p-1" : "w-[100px] text-[#EB7E5A] py-3 px-4"}`}>
                        {item.value === "0%" ? "1" : item.value}
                      </div>
                    </div>
                  </button>
                )
              }
            })}
          </div>
        )}
      </div>
    </div>
  )
}