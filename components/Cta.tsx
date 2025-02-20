import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="container cta">
      <div className="flex justify-center flex-wrap">
        <div className="w-full md:w-1/2">
          <form className="max-w-[580px] mx-auto block shadow-md rounded-[10px] px-[70px] py-[30px] text-center">
            <h3 className="text-[24px] mb-6 font-normal">Newsletter anmelden</h3>
            <input className="mb-[26px]" type="email" placeholder="Ihre E-Mail Adresse "/>
            <input type="button" className="btn mb-3" value={"Anmelden"}/>
            <Link className="text-[18px] text-[#25435F] border-b border-[#25435F] opacity-60 pb-1" href={"#"}>Wie kann ich mich abmelden?</Link>
          </form>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <Image className="mx-auto" src={"/cta.png"} width={442} height={363} alt="cta" />
        </div>
      </div>
    </div>
  )
}