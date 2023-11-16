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
                name: "BASIC",
                longname: "THE BASIC PACKAGE",
                car: "Cars: $100",
                suv: "SUV's & Trucks: $150",
                lgtruck: "Large SUV's / XL Trucks / SUV's: $200",
                info: "‣ Foam Bath\n ‣ Hand Wash\n ‣ Bugs & Tar Removed\n ‣ Wheels Cleaned\n ‣ Tires Cleaned & Conditioned\n ‣Spray Sealant Applied\n ‣ Windows & Door Jambs Cleaned\n ‣ Light Interior Vacuum\n ‣ Light Interior Wipe Down"
            },
            {
                id: 2,
                name: "DELUXE",
                longname: "THE DELUXE PACKAGE",
                car: "Cars: $250",
                suv: "SUV's & Trucks: $325",
                lgtruck: "Large SUV's / XL Trucks / SUV's: $400",
                info: "Basic Package +\n ‣ Clay Bar Treatment\n ‣ Wheels Deep Cleaned\n ‣ Tires Cleaned and Conditioned\n ‣ Apply 3 month Sealant\n ‣ Windows and Door Jambs Cleaned\n ‣ Interior Vacuum\n ‣ All plastics, dashboard and center console cleaned and conditioned\n ‣ Plastic and Rubber floor mats power washed, cleaned and conditioned\n ‣ Interior windows left streak free\n ‣ Light pet hair removal\n *Air Freshener available upon request*"
            },
            {
                id: 3,
                name: "PRESTIGE",
                longname: "THE PRESTIGE PACKAGE",
                car: "Cars: $425",
                suv: "SUV's & Trucks: $450",
                lgtruck: "Large SUV's / XL Trucks / SUV's: $580",
                info: "Deluxe package +\n ‣ Chemical decontamination and clay bar treatment\n ‣ Wheels and wheel wells deep cleaned\n ‣ Tires cleaned and Conditioned\n ‣ Bugs, tar and tree sap removed\n  ‣ Door jambs cleaned and Conditioned"
            },
            {
                id: 4,
                name: "ADD-ONS",
                longname: "ADD-ONS",
                info: "‣ Emblem removal : $25 each\n ‣ Emblem Replacement: $25 each\n ‣ Engine Bay Detail: $75 \n ‣ Headlight Restoration : $100 (Pair)\n  ‣ Excessive Dog Hair removal : $60\n  ‣ Window Polishing $250 add on\n  ‣ Scratch Removal - Starting at $100"
            }
        ]
    })

    useEffect(() => {
        // Set the default activeObject to detailPackages[0] when the component mounts
        changeState({
            ...appState,
            activeObject: appState.detailPackages[0]
        });
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
      <div className="bg-cover bg-center h-screen" style={{backgroundImage: `url('/images/m3.jpg')`}}>
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
                <motion.div initial={{opacity:0}} animate={{opacity:1}}
                key={index} className={`${toggleActiveInfo(index)} text-white font-poppins text-2xl text-center py-3 mx-auto p-24 flex-col`} onClick={() => {toggleActive(index)}}>
                    <h1 className='text-white text-5xl font-fira drop-shadow-glow'> {packages.longname} </h1>
                    <h1 className='text-yellow-400 text-3xl'>{packages.car} </h1>
                    <h1 className='text-yellow-400 text-3xl'>{ packages.suv } </h1>
                    <h1 className='text-yellow-400 text-3xl'>{ packages.lgtruck }</h1>
                    <br></br>
                    <p className='whitespace-pre text-xl'>{ packages.info}</p>
                </motion.div>
            ))}
          </div>
      </div>
    </main>
  )
}