import { ArrowDownIcon } from "@/public/icons";
import { useCitiesStore } from "@/store";
import { City } from "@/types/city";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import de from 'react-phone-input-2/lang/de.json';

export default function OrderAddress({swiper}: {swiper: any}) {

  const cities = useCitiesStore((state) => state.cities) || [];
  const selectedCity = useCitiesStore((state) => state.selectedCity);
  const [filteredCities, setFilteredCities] = useState<City[]>(cities);
  const [search, setSearch] = useState('');
  const [showCities, setShowCities] = useState(false);
  const [address, setAddress] = useState({
    street: '',
    postalCode: '',
    streetNumber: '',
    apartmentNumber: '',
    building: '',
    entrance: '',
    floor: '',
    intercomCode: ''
  });
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
    additionalInfo: ''
  });

  useEffect(() => {
    swiper?.updateAutoHeight()
  }, [showCities])

  useEffect(() => {
    if (search) {
      setFilteredCities(cities.filter((city: City) => city.name.toLowerCase().includes(search.toLowerCase())))
    } else {
      setFilteredCities(cities)
    }
  }, [search, cities])

  return (
    <div className="order__address">
      <h3>IHRE ADRESSE EINGEBEN</h3>
      <button 
        className="order__address__city"
        onClick={() => setShowCities(!showCities)}
      >
        <div>Stadt auswählen: <span>{selectedCity.name}</span></div>
        <ArrowDownIcon />
      </button>
      {showCities && (
        <div className="order__address__cities">
          <input type="text" placeholder="Name des Ortes eingeben..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="order__address__cities__container">
            {filteredCities.length > 0 && filteredCities.map((city: City) => (
              <button 
                key={city._id}
                className={selectedCity.name === city.name ? 'active' : ''}
                onClick={() => {
                  useCitiesStore.setState({selectedCity: city})
                  setShowCities(false)
                }}  
              >{city.name} {parseFloat(city.price) > 0 && <span>+{city.price} EUR</span>}</button>
            ))}
          </div>
        </div>
      )}
      <div className="order__address__form">
        <input onChange={(e) => {
          setAddress({...address, street: e.target.value})
        }} value={address.street} type="text" placeholder="Straße" /> {/* Street */}
        <input onChange={(e) => {
          setAddress({...address, postalCode: e.target.value})
        }} value={address.postalCode} type="text" placeholder="Postleitzahl" /> {/* PostalCode */}
        <input onChange={(e) => {
          setAddress({...address, streetNumber: e.target.value})
        }} value={address.streetNumber} type="text" placeholder="Hausnummer" /> {/* StreetNumber */}
        <input onChange={(e) => {
          setAddress({...address, apartmentNumber: e.target.value})
        }} value={address.apartmentNumber} type="text" placeholder="Wohnungsnummer" /> {/* ApartmentNumber */}
        <input onChange={(e) => {
          setAddress({...address, building: e.target.value})
        }} value={address.building} type="text" placeholder="Gebäude" /> {/* Building */}
        <input onChange={(e) => {
          setAddress({...address, entrance: e.target.value})
        }} value={address.entrance} type="text" placeholder="Eingang" /> {/* Entrance */}
        <input onChange={(e) => {
          setAddress({...address, floor: e.target.value})
        }} value={address.floor} type="text" placeholder="Stock" /> {/* Floor */}
        <input onChange={(e) => {
          setAddress({...address, intercomCode: e.target.value})
        }} value={address.intercomCode} type="text" placeholder="Code der Gegensprechanlage" /> {/* IntercomCode */}
      </div>
      <h3>KONTAKTANGABEN</h3>
      <div className="order__address__contact">
        <input type="text" placeholder="Ihr Name" 
          onChange={(e) => {
            setContact({...contact, name: e.target.value})
          }}
          value={contact.name}
        /> {/* Name */}
        <PhoneInput
          country={'de'}
          localization={de}
          inputProps={{
            name: 'phone',
            required: true,
            placeholder: '49 000 00000000'
          }}
          value={contact.phone}
          onChange={phone => {
            setContact({...contact, phone})
          }}
        /> {/* Phone */}
        <input type="text" placeholder="E-Mail-Adresse" 
          onChange={(e) => {
            setContact({...contact, email: e.target.value})
          }}
          value={contact.email}
        /> {/* Email */}
        <textarea placeholder="Weitere Informationen " 
          onChange={(e) => {
            setContact({...contact, additionalInfo: e.target.value})
          }}
          value={contact.additionalInfo}
        /> {/* AdditionalInfo */}
      </div>
    </div>
  )
}