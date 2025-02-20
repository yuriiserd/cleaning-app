import Image from "next/image";
import CalcPrice from "../CalcPrice";

export default function HomeBanner() {
  return (
    <div className="container home flex items-center py-10 mt-10">
      <div className="max-w-[780px]">
        <h1 className="font-bold text-6xl leading-tight mb-4">Professionelle Reinigung Berlin</h1>
        <p className="text-2xl leading-[1.7] mb-6 max-w-[600px]">Die Dienstleistung umfasst Küche, Badezimmer, Zimmer und Flur</p>
        <CalcPrice/>
      </div>
      <div className="">
        <Image src="/homepage/banner.png" alt="Banner" width={545} height={545} />
      </div>
    </div>
  )
}