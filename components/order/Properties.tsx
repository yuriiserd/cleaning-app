import QuestionIcon from '@/public/icons/question-icon';
import { Service } from '@/types/service';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function OrderProperties({ 
  properties, 
  setProperties, 
  service 
}: { properties: any, setProperties: any, service: Service}) {
  return (
    <div className="order__form__properties">
      <div className='flex gap-2 items-center mb-6 justify-betweenr'>
        <h3>{service?.propertiresTitle}</h3>
        <Link href="#" className='ml-auto flex gap-2 items-center text-[#858585] hover:underline'>
          <QuestionIcon />
          <span>Was gehört zur Reinigung einer Wohnung?</span>
        </Link>
      </div>
      <div>
        <div className="calcPrice mb-10">
          {service?.properties && service?.properties.map((property: any, index: number) => {
            if (property.type === 'Counted') {
              return (
                <div className="justify-center last:border-0" key={index}>
                  <button
                    onClick={() => {
                      if (properties[property.title] === 1) return
                      setProperties((prev: any) => ({
                        ...prev,
                        [property.title]: (parseInt(prev[property.title]) || 0) - 1
                      }))
                    }}
                  >-</button>
                  <input 
                    className="border-0 outline-0 w-8 p-0 text-right" 
                    value={(properties[property.title] || 1)} 
                    type="text" 
                    placeholder={property.title} 
                    onChange={(e) => {
                      setProperties((prev: any) => ({
                        ...prev,
                        [property.title]: parseInt(e.target.value)
                      }))
                    }}
                  />
                  <span>{property.title}</span>
                  <button 
                    onClick={() => {
                      setProperties((prev: any) => ({
                        ...prev,
                        [property.title]: (parseInt(prev[property.title]) || 1) + 1
                      }))
                    }}
                  >+</button>
                </div>
              )
            }
          })}
        </div>
        <div className='flex gap-x-10 gap-y-6 flex-wrap'>
          {service?.properties && service?.properties.map((property, index) => {
            if (property.type === 'Choose') {
              return (
                <div className='radio' key={index}>
                  <div className='flex gap-4 items-center'>
                    <input type="radio" name={`radio-${index}`} id={`radio-${index}-1`} />
                    <label className="radio-label" htmlFor={`radio-${index}-1`}>{property?.choose?.title}</label>
                    {property?.choose?.image && (
                      <Image src={property?.choose?.image} alt={property?.choose?.title} width={40} height={40} />
                    )}
                    {property?.choose?.price && (property?.choose?.price < property?.price) && (
                      <div className='price'>{(parseFloat(property?.choose?.price) - parseFloat(property?.price)).toFixed(2)} EUR</div>
                    )}
                  </div>
                  <div className='flex gap-4 items-center'>
                    <input type="radio" name={`radio-${index}`} id={`radio-${index}-2`} />
                    <label className="radio-label" htmlFor={`radio-${index}-2`}>{property?.title}</label>
                    {property?.image && (
                      <Image src={property?.image} alt={property?.title} width={40} height={40} />
                    )}
                    {property?.choose?.price && (property?.choose?.price > property?.price) && (
                      <div className='price-box'>{(parseFloat(property?.price) - parseFloat(property?.choose?.price)).toFixed(2)} EUR</div>
                    )}
                  </div>
                </div>
              )
            }
          })}
          {service?.properties && service?.properties.map((property, index) => {
            if (property.type === 'Default') {
              return (
                  <div key={index} className='checkbox'>
                    <input type="checkbox" id={`checkbox-${index}`} />
                    <label className="radio-label" htmlFor={`checkbox-${index}`}>
                    {property?.image && (
                      <Image src={property?.image} alt={property?.title} width={40} height={40} />
                    )}
                      {property?.title}</label>
                    
                    <div className='price-box'>{property?.price}</div>
                  </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}