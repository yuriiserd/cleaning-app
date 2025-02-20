import Layout from "@/components/Layout";
import Preloader from "@/components/Preloader";
import OrderPageSlider from "@/components/order/OrderPageSlider";
import OrderProperties from "@/components/order/Properties";
import OrderSummary from "@/components/order/Summary";
import { LocationIcon } from "@/public/icons";
import { Service } from "@/types/service";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function OrderPage() {

  const [service, setService] = useState<Service>();
  const router = useRouter();
  const { slug } = router.query || null;
  const [order, setOrder] = useState({
    serviceId: service?._id,
  });
  const [properties, setProperties] = useState<any>({});

  useEffect(() => {
    if (slug) {
      axios.get(`/api/services?slug=${slug}`).then(res => {
        setService(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
  }, [slug])

  if (service) {
    return (
      <Layout
        classes="order"
        showProgamme={false}
      >
        <Head>
          <title>{service?.name}</title>
          <meta name="description" content={service?.name} />
        </Head>
        <div className="container my-10 flex gap-10">
          <div className="order__form">
            <h1 className="title">{service?.name}</h1>
            <div className="order__form__location">
              <LocationIcon />
              <p>Berlin</p>
            </div>
            <OrderProperties properties={properties} setProperties={setProperties} service={service} />
            <OrderPageSlider service={service} />
          </div>
          <div className="order__summary">
            <OrderSummary />
          </div>
        </div>
      </Layout>
    )
  } else {
    return <Preloader />
  }
  
}