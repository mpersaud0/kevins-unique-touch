'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/navbar'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
    const [appState, changeState] = useState({
        activePackage: 1,
        detailPackages: [
            {
                id: 1,
                name: "3 YEAR CERAMIC COATING",
                longname: "ENTRY LEVEL",
                car: "$1,500",
                suv: "$1,800",
                lgtruck: "$2,500",
                info: "‣ Hand Wash & Foam Bath\n ‣ Degrease wheels, wheel wells & tires\n ‣ Paint decontamination (Iron Removal)\n ‣ Clay bar treatment (contaminant removal)\n ‣ One step paint correction\n ‣ 3 Year Ceramic Coating Applied"   
            },
            {
                id: 2,
                name: "5 YEAR CERAMIC COATING",
                longname: "SUPERIOR PROTECTION",
                car: "$2,500",
                suv: "$2,800",
                lgtruck: "$3,000",
                info: "‣ Hand wash & foam bath\n ‣ Degrease wheels, wheel wells & tires\n ‣ Paint decontamination (iron removal)\n ‣ Clay bar treatment (contaminant removal)\n ‣ Two step paint correction\n ‣ 5 Year ceramic coating applied\n ‣ Plastic trim restored on exterior\n ‣ All windows ceramic coated\n ‣ Complimentary vacuum and interior wipe down"
            }
        ]
    })

function toggleActive(index) {
    changeState({...appState, activeObject: appState.detailPackages[index]})
}

function toggleActiveStyles(index) {
    if(appState.detailPackages[index] === appState.activeObject){
        return "text-yellow-400"
    }
    else {
        return "text-white"
    }
}

function toggleActiveInfo(index) {
    if(appState.detailPackages[index] === appState.activeObject){
        return "flex"
    }
    else {
        return "hidden"
    }
}

  return (
    <main className="flex flex-col pt-2 max-h-screen">
      <NavBar />
      <div className="bg-cover bg-center h-screen" style={{backgroundImage: `url('/images/lexus.jpg')`}}>
        <div className='p-12'><br></br></div>
      <div className='bg-red-700  p-8 font-poppins rounded-3xl mx-auto flex flex-row justify-between text-2xl max-w-3xl'>
            {appState.detailPackages.map((packages, index) => (
                <div key={index} className={toggleActiveStyles(index)} onClick={() => {toggleActive(index)}}>
                    <button>
                        <h1>{ packages.name }</h1>
                    </button>
                </div>
            ))}
          </div>
          <div className=''>
            {appState.detailPackages.map((packages, index) => (
                <div key={index} className={`${toggleActiveInfo(index)} text-white font-poppins text-2xl text-center py-3 mx-auto p-24 flex-col`} onClick={() => {toggleActive(index)}}>
                    <h1 className='text-white text-5xl font-fira drop-shadow-glow'> {packages.longname} </h1>
                    <h1 className='text-yellow-400 text-3xl'>Cars: {packages.car} </h1>
                    <h1 className='text-yellow-400 text-3xl'>SUV's & Trucks: { packages.suv } </h1>
                    <h1 className='text-yellow-400 text-3xl'>Large SUV's / XL Trucks / SUV's: { packages.lgtruck }</h1>
                    <br></br>
                    <p className='whitespace-pre'>{ packages.info}</p>
                </div>
            ))}
          </div>
      </div>
    </main>
  )
}