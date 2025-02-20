import Layout from "@/components/Layout";
import HomeBanner from "@/components/homepage/HomeBanner";
import HomePros from "@/components/homepage/HomePros";
import FrequencyCost from "@/components/FrequencyCost";
import CleaningComponents from "@/components/CleaningComponents";
import HomeInventar from "@/components/homepage/HomeInventar";
import MainServices from "@/components/MainServices";
import AdditionalServices from "@/components/AdditionalServices";
import Faqs from "@/components/Faqs";
import { tempFaqs } from "@/lib/tempFaqs";
import { tempBlog } from "@/lib/tempBlog";
import { tempWhatWeDo } from "@/lib/tempWhatWeDo";
import DiscountsSlider from "@/components/DiscountsSlider";
import HomeStats from "@/components/homepage/HomeStats";
import Reviews from "@/components/Reviews";
import HomeHelp from "@/components/homepage/HomeHelp";
import BlogSlider from "@/components/BlogSlider";
import HomeWhatWeDo from "@/components/homepage/HomeWhatWeDo";
import CalcPriceSection from "@/components/CalcPriceSection";
import Head from "next/head";
import { Service as ServiceType } from "@/types/service";
import { Service } from "@/models/Service";
import { AdditionalService } from "@/models/AdditionalService";
import { AdditionalService as AdditionalServiceType } from "@/types/additionalService";
import { mongooseConnect } from "@/lib/mongoose";

export default function Home({
  services, 
  addServices
} : {
  services: ServiceType[],
  addServices: AdditionalServiceType[],
}) {

  return (
    <Layout classes="home" showProgamme={true}>
      <Head>
        <title>Das Reinigungsteam</title>
        <meta name="description" content="Das Reinigungsteam home page" />
      </Head>
      <HomeBanner />
      <HomePros />
      <FrequencyCost />
      <CleaningComponents />
      <HomeInventar />
      <MainServices services={services}/>
      <AdditionalServices addServices={addServices}/>
      <Faqs faqs={tempFaqs} />
      <DiscountsSlider />
      <HomeStats />
      <Reviews />
      <HomeHelp />
      <BlogSlider blogs={tempBlog}/>
      <HomeWhatWeDo whatWeDo={tempWhatWeDo}/>
      <CalcPriceSection />
    </Layout>
  );
}

export async function getServerSideProps() {

  await mongooseConnect();

  const services = await Service.find({}).sort({createdAt: 1});
  const addServices = await AdditionalService.find({}).sort({createdAt: 1});
  return {
    props: {
      services: JSON.parse(JSON.stringify(services)),
      addServices: JSON.parse(JSON.stringify(addServices)),
    }
  }
}