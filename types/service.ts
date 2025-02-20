import { AdditionalService } from "./additionalService";
import { DryService } from "./dryService";

export type Service = {
  _id?: string;
  name: string;
  slug: string;
  image: string;
  showImage: boolean;
  icon: string;
  propertiresTitle: string;
  properties?: ServiceProperty[] | [];
  datesDiscountTitle: string;
  datesDiscount: {
    [key: string]: number;
  } | {};
  additionalServicesTitle?: string;
  additionalServices?: string[] | AdditionalService[];
  dryServicesTitle?: string;
  dryServices?: string[] | DryService[];
  createdAt?: string;
  updatedAt?: string;
}

export type ServiceProperty = {
  propId?: string;
  title: string;
  type: string;
  image: string;
  time: string;
  price: string;
  priceType: string;
  choose?: {
    propId?: string;
    title: string;
    type: string;
    image: string;
    time: string;
    price: string;
    priceType: string;
  } | null;
}