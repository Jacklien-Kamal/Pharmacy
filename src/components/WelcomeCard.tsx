import React from 'react'

import welcomImg from '../assets/welcomeDoc.jpg'
export default function WelcomeCard() {
  return (
    <div className='flex w-[70rem]  gap-x-3 bg-[#3c12819f] justify-between mx-auto px-5 rounded-xl mt-10  pe-0'>
        <div>
        <h1 className='text-white font-bold text-3xl  pt-4'>Welcome to <span className='text-[#af1a1a]'>El-SHAMI</span>  Pharmacy </h1>
        <p className=' text-white pt-4'>Offering low cost prescriptions, friendly service, & convenient locations.</p>
        </div>
        <img src={welcomImg}  className='rounded w-[400px] border border-[#55338b9f] '/>
    </div>
  )
}
