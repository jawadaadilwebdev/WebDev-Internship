import React from 'react'
import { AE } from 'country-flag-icons/react/3x2'; // United Arab Emirates
import { AU } from 'country-flag-icons/react/3x2'; // Australia
import { US } from 'country-flag-icons/react/3x2'; // United States
import { RU } from 'country-flag-icons/react/3x2'; // Russia
import { IT } from 'country-flag-icons/react/3x2'; // Italy
import { DK } from 'country-flag-icons/react/3x2'; // Denmark
import { FR } from 'country-flag-icons/react/3x2'; // France
import { CN } from 'country-flag-icons/react/3x2'; // China
import { GB } from 'country-flag-icons/react/3x2'; // Great Britain
import { PK } from 'country-flag-icons/react/3x2'; // Pakistan


const SupplierByRegion = () => {

 const countryList = [
  {
    id: 1,
    name: "Arabic Emirates",
    domain: "shopname.ae",
    Flag: <AE className='h-10 w-15' />,
  },
  {
    id: 2,
    name: "Australia",
    domain: "shopname.ae",
    Flag: <AU  className='h-10 w-15'/>,
  },
  {
    id: 3,
    name: "United States",
    domain: "shopname.ae",
    Flag: <US className='h-10 w-15'/>
  },
  {
    id: 4,
    name: "Russia",
    domain: "shopname.ru",
    Flag: <RU  className='h-10 w-15'/>,
  },
  {
    id: 5,
    name: "Italy",
    domain: "shopname.it",
    Flag: <IT className='h-10 w-15'/>,
  },
  {
    id: 6,
    name: "Denmark",
    domain: "denmark.co.dk",
    Flag: <DK className='h-10 w-15'/>,
  },
  {
    id: 7,
    name: "France",
    domain: "shopname.co.fr",
    Flag: <FR className='h-10 w-15'/>,
  },
  {
    id: 8,
    name: "China",
    domain: "shopname.ae",
    Flag: <CN className='h-10 w-15'/>,
  },
  {
    id: 9,
    name: "Great Britain",
    domain: "shopname.co.uk",
    Flag: <GB className='h-10 w-15'/>,
  },
    {
    id: 10,
    name: "Pakistan",
    domain: "shopname.pk",
    Flag: <PK className='h-10 w-15'/>,
  },
];

  return (
    <div className="w-[86%] mt-6 mb-6">
      <h2 className="text-2xl font-medium text-black">Suppliers by region</h2>
      <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {countryList.map((country) => (
            <div className='flex p-4 rounded-md items-center gap-4' key={country.id}>
                {country.Flag}
                <div>
                    <p className='text-[16px]'>{country.name}</p>
                    <p className='text-[13px] text-gray-500'>{country.domain}</p>
                </div>
            </div>
      ))}
      </div>
      </div>
  )
}

export default SupplierByRegion