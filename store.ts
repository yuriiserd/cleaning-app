import { create } from "zustand";
import { City } from "./types/city";

export type CitiesStore = {
  cities: City[] | [],
  selectedCity: City | null,
  setCities: (cities: string[]) => void,
  setSelectedCity: (selectedCity: City) => void,
}

export const useCitiesStore = create((set): CitiesStore => ({
  cities: [],
  selectedCity: {
    name: 'Berlin',
    price: '0',
  },
  setCities: (cities) => set({cities}),
  setSelectedCity: (selectedCity) => set({selectedCity}),
}));

export type OrderStore = {
  service: string,
  cleaningTime: string,
  options: {name: string, price: number},
  address: string,
  payment: string,
  total: {total: number, discount: number, discountCode?: string, discountType: string, partnerCode?: string} | {},
  setCleaningTime: (cleaningTime: string) => void,
  setOptions: (options: string[]) => void,
  setAddress: (address: string) => void,
  setPayment: (payment: string) => void,
  setService: (service: string) => void,
  setTotal: (total: number) => void,
}

export const useOrderStore = create((set) => ({
  service: null,
  cleaningTime: null,
  options: null,
  address: null,
  payment: null,
  total: {},
  setCleaningTime: (cleaningTime) => set({cleaningTime}),
  setOptions: (options) => set({options}),
  setAddress: (address) => set({address}),
  setPayment: (payment) => set({payment}),
  setService: (service) => set({service}),
  setTotal: (total) => set({total}),
}));