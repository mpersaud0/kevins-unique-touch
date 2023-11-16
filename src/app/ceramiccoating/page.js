'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/navbar'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
    const [appState, changeState] = useState({
        activePackage: 1,
        detailPackages: [
            {
                id: 1,
                name: "3 YEAR",
                longname: "ENTRY LEVEL",
                car: "Cars: $1,500",
                suv: "SUV's & Trucks: $1,800",
                lgtruck: "Large SUV's / XL Trucks / SUV's: $2,500",
                info: "‣ Hand Wash & Foam Bath\n ‣ Degrease wheels, wheel wells & tires\n ‣ Paint decontamination (Iron Removal)\n ‣ Clay bar treatment (contaminant removal)\n ‣ One step paint correction\n ‣ 3 Year Ceramic Coating Applied"   
            },
            {
                id: 2,
                name: "5 YEAR",
                longname: "SUPERIOR PROTECTION",
                car: "Cars: $2,500",
                suv: "SUV's & Trucks: $2,800",
                lgtruck: "Large SUV's / XL Trucks / SUV's: $3,000",
                info: "‣ Hand wash & foam bath\n ‣ Degrease wheels, wheel wells & tires\n ‣ Paint decontamination (iron removal)\n ‣ Clay bar treatment (contaminant removal)\n ‣ Two step paint correction\n ‣ 5 Year ceramic coating applied\n ‣ Plastic trim restored on exterior\n ‣ All windows ceramic coated\n ‣ Complimentary vacuum and interior wipe down"
            },
            {
                id: 3,
                name: "MATTE",
                longname: "MATTE CERAMIC COATING",
                car: "Cars: $1,500",
                suv: "SUV's & Trucks: $1,800",
                lgtruck: "Large SUV's / XL Trucks / SUV's: $2,500",
                info: "‣ Hand wash & foam bath\n ‣ Degrease wheels, wheel wells & tires\n ‣ Paint decontamination (iron removal)\n ‣ Clay bar treatment (contaminant removal)\n ‣ Two step paint correction\n ‣ 5 Year ceramic coating applied\n ‣ Plastic trim restored on exterior\n ‣ All windows ceramic coated\n ‣ Complimentary vacuum and interior wipe down"
            },
            {
                id: 4,
                name: "WHEELS",
                longname: "WHEEL CERAMIC COATING",
                car: "$150/Wheel",
                info: "‣ Wheels pulled off vehicle\n ‣ Thoroughly clean face and barrels of wheels\n ‣ Thoroughly clean calipers and fender liners\n ‣ Wheel 2 year ceramic coating (face and barrels)\n ‣ Caliper 2 year ceramic coating"
            },
            {
                id: 5,
                name: "INTERIOR",
                longname: "INTERIOR CERAMIC COATING",
                car: "Starting at $500",
                info: "‣ Protects against jean dye transfer\n ‣ Protects against color fading (UV damage)\n ‣ Protects against leather ripping\n ‣ Helps prevents stains (spills wipe right off)\n ‣ Protects leather from water damage\n ‣ Helps prevent dirt build up and scuffs\n ‣ Prevents leather from cracking and drying out\n ‣ Adds hydrophobic properties to carpet so when spills happen the liquid beads up"
            },
        ]
    })

useEffect(() => {
    // Set the default activeObject to detailPackages[0] when the component mounts
    changeState({ ...appState, activeObject: appState.detailPackages[0]});
    }, []);

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
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.5 }}>
                        <h1>{ packages.name }</h1>
                    </motion.button>
                </div>
            ))}
          </div>
          <div className=''>
            {appState.detailPackages.map((packages, index) => (
                <div key={index} className={`${toggleActiveInfo(index)} text-white font-poppins text-2xl text-center py-3 mx-auto p-24 flex-col`} onClick={() => {toggleActive(index)}}>
                    <h1 className='text-white text-5xl font-fira drop-shadow-glow'> {packages.longname} </h1>
                    <h1 className='text-yellow-400 text-3xl'>{packages.car} </h1>
                    <h1 className='text-yellow-400 text-3xl'>{ packages.suv } </h1>
                    <h1 className='text-yellow-400 text-3xl'>{ packages.lgtruck }</h1>
                    <br></br>
                    <p className='whitespace-pre'>{ packages.info}</p>
                </div>
            ))}
          </div>
      </div>
    </main>
  )
}