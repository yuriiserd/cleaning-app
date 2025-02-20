import Image from "next/image"
import { useState } from "react"

export default function OrderPayment() {

  const [paymentMethod, setPaymentMethod] = useState('card') // 'cash' | 'card'
  const [policy, setPolicy] = useState(true);
  const [marketing, setMarketing] = useState(false);

  return (
    <div className="order__payment">
      <h3>ZAHLUNGSMETHODE WÄHLEN</h3>
      <div className="order__payment__methods">
        <button className={`${paymentMethod === 'cash' ? "active" : ""}`} 
          onClick={() => setPaymentMethod('cash')}
        >
          <Image src="/order/cash.svg" width={40} height={40} alt="Barzahlung" />
          <span>In bar</span>
        </button>
        <button className={`${paymentMethod === 'card' ? "active" : ""}`} 
          onClick={() => setPaymentMethod('card')}
        >
          <Image src="/order/cards.svg" width={40} height={40} alt="Kreditkarte" />
          <span>Online mit einer Kreditkarte / Apple Pay / Google Pay</span>
        </button>
      </div>
      <label className="checkbox" htmlFor="policy">
        <input  type="checkbox" id="policy"
          checked={policy}
          onChange={() => {
            setPolicy(!policy);
          }}
        />
        <span>Mit der Bestellung erkläre ich mich mit dem Vertrag über das öffentliche Angebot einverstanden und mit der Datenschutzerklärung</span>
      </label>
      <label className="checkbox" htmlFor="marketing">
        <input type="checkbox" id="marketing" 
          checked={marketing}
          onChange={() => {
            setMarketing(!marketing);
          }}
        />
        <span>Mit der Bestellung erkläre ich mich mit dem Vertrag über das öffentliche Angebot einverstanden und mit der Datenschutzerklärung</span>
      </label>
      <button className="order__payment__btn btn">Bestellen für <span>60.00 EUR</span> <small>75.00 EUR</small></button>
    </div>
  )
}