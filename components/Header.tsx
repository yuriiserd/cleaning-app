import Image from "next/image";

import { service1, service2, service3, service4, service5, service6, service7 } from "@/public/services";
import { GiftIcon, GermanFlagIcon, ArrowDownIcon, PhoneIcon, UserIcon, MenuIcon, TelegramIcon, MessengerIcon, WhatsappIcon } from "@/public/icons";
import logo from "@/public/logo.png";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";
import { Service } from "@/types/service";
import { set } from "mongoose";

export default function Header({setMenuHeight}: { setMenuHeight: (height: number) => void}){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mouseLeaveTimeout, setMouseLeaveTimeout] = useState<number | null>(null);
  const [services, setServices] = useState<Service[] | []>([]);

  const menuRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current?.clientHeight);
    }
    getServices();
  }, []);

  async function getServices() {
    await axios.get("/api/services").then(res => {
      setServices(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  function handleMouseEnter() {
    setIsMenuOpen(true);
    if (mouseLeaveTimeout) clearTimeout(mouseLeaveTimeout);
  }

  function handleMouseLeave(timeout: number) {
    setMouseLeaveTimeout(window.setTimeout(() => {
      setIsMenuOpen(false);
    }, timeout));
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  
  return (
    <header className="bg-white relative">
      <div className="w-full bg-white relative z-[90]">
        <div className="container flex justify-between items-center py-2 relative z-10 bg-white">
          <div className="flex items-center gap-2 sm:gap-6 ">
            <Link aria-label="Das Reinigungsteam" href="/">
              <Image src={logo} width={190} height={73} alt="Das Reinigungsteam"/>
            </Link>
            <button 
              aria-label="Menü öffnen"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => handleMouseLeave(1000)}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon />
            </button>
            <Link aria-label="Reinigung als Geschenk" href="#" className="gap-2 items-center hidden sm:flex">
              <GiftIcon />
              <span className="hidden xl:block">Reinigung als Geschenk</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <button aria-label="Stadt wählen" className="gap-2 items-center text-[18px] font-semibold hidden md:flex">
              <span>Hamburg</span>
              <GermanFlagIcon />
              <ArrowDownIcon />
            </button>
            <div>
              <Link aria-label="Ruf an Telefon +4940429999999" href="tel:+4940429999999" className="text-black font-bold text-[20px] flex gap-2 items-center">
                <PhoneIcon />
                <span className="hidden xl:block">+49 000 00000000</span>
              </Link>
            </div>
            <button aria-label="Benutzerkonto" className="text-[18px] rounded-[10px] text-[#6B65A9] xl:border xl:border-[#6B65A9] xl:px-4 xl:py-2 flex gap-2 items-center justify-center text-center">
              <UserIcon />
              <span className="hidden xl:block">Benutzerkonto</span>
            </button>
          </div>
        </div>
      </div>
      
      <div onMouseEnter={() => {
        if (isMenuOpen) handleMouseEnter();
      }} ref={menuRef} className={`bg-[#6B65A9] relative z-80 header-services py-3 ${visible ? '' : 'header-transition'}`}>
        <div className="container text-white flex justify-between items-center gap-4">
          <nav>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-10 text-[18px]">
              {services.length > 0 && services.map((service: Service) => (
                <li key={service._id}>
                  <Link href={`/${service.slug}`} className="flex gap-2 items-center">
                    <Image src={service.icon} width={22} height={22} alt="icon"/>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:flex gap-4">
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
        {isMenuOpen && (
          <nav 
            className="absolute w-full bg-white top-full py-8 z-20 border"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => handleMouseLeave(10)}
          >
            <div className="container flex justify-between items-center header-dropdown">
              <div className="flex w-3/4 justify-between">
                <ul className="px-6 flex flex-col gap-4 md:gap-5 text-[18px]">
                  <li>
                    <Link href="#">Über uns</Link>
                  </li>
                  <li>
                    <Link href="#">Unsere Dienstleistungen</Link>
                  </li>
                  <li>
                    <Link href="#">Was wir reinigen</Link>
                  </li>
                  <li>
                    <Link href="#">Preise für unsere Dienstleistungen</Link>
                  </li>
                  <li>
                    <Link href="#">Reinigungsabonnement</Link>
                  </li>
                </ul>
                <ul className="px-6 flex flex-col gap-4 md:gap-5 text-[18px] ">
                  <li>
                    <Link href="#">Bewertungen</Link>
                  </li>
                  <li>
                    <Link href="#">Empfehlungsprogramm</Link>
                  </li>
                  <li>
                    <Link href="#">Fragen und Antworten</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#EB7E5A]">% Rabatte und Sonderangebote</Link>
                  </li>
                </ul>
                <ul className="px-6 flex flex-col gap-4 md:gap-5 text-[18px] ">
                  <li>
                    <Link href="#">Unsere Partner</Link>
                  </li>
                  <li>
                    <Link href="#">Vorschläge für Unternehmen</Link>
                  </li>
                  <li>
                    <Link href="#">Was wir reinigen</Link>
                  </li>
                  <li>
                    <Link href="#">Reinigungskraft werden</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                </ul>
              </div>
              <Link href={"#"} className="box">
                  <h3>Ihren ersten Auftrag erteilen</h3>
                  <p>Aktionscode start – <span>15%</span> Rabatt auf Ihren ersten Auftrag</p>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}