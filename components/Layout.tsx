import { Montserrat } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PremiumProgramm from "./PremiumProgramm";
import Cta from "./Cta";
import { Service } from "@/types/service";
import { useCitiesStore, useOrderStore } from "@/store";
import axios from "axios";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Layout({
  children, 
  classes, 
  showProgamme = false, 
}: {
  children: React.ReactNode, 
  classes?: string, 
  showProgamme?: boolean,
  services?: Service[],
}) {

  const cities = useCitiesStore((state) => state.cities);
  const setCities = useCitiesStore((state) => state.setCities);
  const order = useOrderStore((state) => state.order);

  console.log(order)

  useEffect(() => {
    if (!cities.length) {
      axios.get('/api/cities').then((res) => {
        setCities(res.data);
        console.log('fetching cities', res.data);
      })
    }
  }, [cities])

  const headerRef = useRef<HTMLHeadingElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [menuHeight, setMenuHeight] = useState<number>(0);

  
  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current?.clientHeight);
    }
  }, []);


  return (
    <div className={`flex flex-col justify-between ${classes}`} style={{minHeight: `100vh`}}>
      <div className="fixed w-full top-0 z-[999]" ref={headerRef}>
        <Header setMenuHeight={setMenuHeight}/>  
      </div>
      <main
        className={` ${montserrat.className}` }
        style={{marginTop: `${headerHeight + menuHeight}px`}}
      >
        {children}
      </main>
      <Cta />
      {showProgamme && <PremiumProgramm/>} 
      <Footer />
    </div>
  );
}
