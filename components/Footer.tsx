import Image from "next/image";
import Link from "next/link";
import logoWhite from "../public/logo-white.png";
import { ArrowRightIcon, JobIcon, LocationIcon, MessengerIcon, PhoneIcon, TelegramIcon, WhatsappIcon } from "@/public/icons";
import footerCards from "@/public/footer-cards.png"
import { menuItems } from "@/lib/temporaryMenu";

export default function Footer() {
  
  const items = menuItems;

  return (
    <footer className="bg-[#0F2030] text-white py-10 mt-16">
      <div className="container flex">
        <div className="w-1/5">
          <Link href="/">
            <Image src={logoWhite} alt="logo" width={190} height={73} />
          </Link>
        </div>
        <div className="w-4/5">
          <div className="flex w-full gap-4 text-[18px] font-light border-b border-opacity-40 border-white pb-10">
            <ul className="w-1/4 flex flex-col gap-y-5">
              {items.slice(0, 9).map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="w-1/2 flex flex-wrap gap-5 items-center">
              {items.slice(9, 27).map((item, index) => (
                <li key={index} className="w-[47%]">
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="w-1/4 flex flex-col gap-4">
              <h3 className="flex items-center gap-2 text-[20px] font-normal">
                <JobIcon />
                {/* <Image src={jobIcon} alt="job" width={30} height={30} /> */}
                <span>Jobs</span>
              </h3>
              {items.slice(27, 29).map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex pt-10">
            <div className="w-2/3">
              <p className="max-w-[612px] font-light text-[18px] mb-10">Wir sind in 20 Städten tätig: Berlin, Hamburg, München, Frankfurt, Warschau, Krakau, Breslau, Danzig, Łódź, Posen, Kattowitz, Lublin, Białystok, Kiew, Riga, Minsk, Prag, Brno, Bratislava, New York</p>
              <div className="flex gap-2 mb-10 text-[18px]">
                <LocationIcon />
                {/* <Image src={locationIconWhite} alt="location" width={24} height={24} /> */}
                <span>Westhafenstraße 1, 13353 Berlin</span>
              </div>
              <ul className="flex gap-7 mb-7">
                <li>
                  <Link className="border-b border-white border-opacity-50 py-2 px-1" href="#">Öffentlicher Vertrag</Link>
                </li>
                <li>
                  <Link className="border-b border-white border-opacity-50 py-2 px-1" href="#">Datenschutzerklärung</Link>
                </li>
                <li>
                  <Link className="border-b border-white border-opacity-50 py-2 px-1" href="#">Cookies policy</Link>
                </li>
              </ul>
              <Image src={footerCards} alt="Credit Cards" width={724} height={32}/>
            </div>
            <div className="w-1/3 flex flex-col items-center">
              <Link href={'/services/'} className="btn btn_border-white inline-block mb-6">
                <span className="text-[20px]">Alle unsere Dienstleistungen</span>
                <ArrowRightIcon />
                {/* <Image src={arrowRightIcon} alt="arrow right" width={14} height={10} /> */}
              </Link>
              {/* link to phone number with icon  */}
              <div className="flex gap-2 items-center mb-6">
                <PhoneIcon />
                {/* <Image src={phoneIconWhite} alt="job" width={24} height={24} /> */}
                <Link href="tel:+4940429999999" className="text-[20px]">+49 000 00000000</Link>
              </div>
              <div className="hidden lg:flex gap-4 mb-6">
                <Link aria-label="Kontaktieren Sie uns per Telegramm" href="#">
                  <TelegramIcon />
                </Link>
                <Link aria-label="Kontaktieren Sie uns per Messenger" href="#">
                  <MessengerIcon />
                </Link>
                <Link aria-label="Kontaktieren Sie uns per Whatsapp" href="#">
                  <WhatsappIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}