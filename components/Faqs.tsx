import { ArrowRightIcon } from "@/public/icons";
import Link from "next/link";
import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
}


export default function Faqs({faqs}: {faqs: Faq[]}) {


  const [currentFaq, setCurrentFaq] = useState(0);

  return (
    <div className="container faqs">
      <h2 className="title !mb-6">Häufig gestellte Fragen</h2>
      <div className="faqs__items">
        {faqs.map((faq, index) => (
          <div key={index} className={`faqs__item ${currentFaq === index ? "active" : ""}`}>
            <div className="faqs__question" onClick={() => setCurrentFaq(index)}>{faq.question}</div>
            <div className={`faqs__answer`}>{faq.answer}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href={"#"} className="btn btn_border min-w-[240px]">
          Alle Antworten anzeigen
          <ArrowRightIcon/>  
        </Link>
      </div>
    </div>
  )
}