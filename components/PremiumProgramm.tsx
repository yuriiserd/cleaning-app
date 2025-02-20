import Image from "next/image";
import Link from "next/link";

export default function PremiumProgramm() {
  return (
    <div className="container flex flex-col justify-center items-center text-center py-10">
      <h2 className="title">Premium-Programme</h2>
      <Image className="mb-8 -mt-4" src={"/visa360.svg"} width={330} height={44} alt="Programme" />
      <p className="text-[20px] max-w-[1300px] mb-8">* Weitere Informationen über Boni erhalten Sie von Ihrem zuständigen Sachbearbeiter <br/> Wenn Ihr Unternehmen Partner werden und Boni für Mitarbeiter erhalten möchte, füllen Sie bitte das folgende Formular aus und unser Sachbearbeiter wird sich mit Ihnen in Verbindung setzen.</p>
      <Link href={"#"} className="btn">Partner werden</Link>
    </div>
  );
}