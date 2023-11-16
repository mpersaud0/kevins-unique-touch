'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/navbar'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
    const [appState, changeState] = useState({
        activeObject: null,
        detailPackages: [
            {
                id: 1,
                name: "LEVEL 1",
                longname: "GLOSS BOSS",
                car: "$250",
                suv: "$325",
                lgtruck: "$400",
                info: "‣ Wheels and wheel wells deep cleaned\n ‣ Tires degreased and conditioned\n ‣ Bugs and tar removed\n ‣ Paint decontamination and clay bar treatment\n ‣ Exterior foam & hand wash\n ‣ Exterior trim cleaned & conditioned\n ‣ Paint sealed with 6 month sealant"
            },
            {
                id: 2,
                name: "LEVEL 2",
                longname: "ALL IN ONE",
                car: "$500",
                suv: "$655",
                lgtruck: "$800",
                info: "Level 1 Exterior +\n ‣ Engine bay detailed\n ‣ Exhaust tips polished\n ‣ Gloss enhancement with our all in one polish"
            },
            {
                id: 3,
                name: "LEVEL 3",
                longname: "RESTORATION",
                car: "$1,100",
                suv: "$1,400",
                lgtruck: "$1,700",
                info: "Level 2 Exterior +\n ‣ Spot sanding to remove or improve deep imperfections\n ‣ Multi - Step paint correction"
                
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
      <div className="bg-cover bg-center h-screen" style={{backgroundImage: `url('/images/mustang.jpg')`}}>
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
                    <h1 className='text-yellow-400 text-3xl'>Cars: {packages.car} </h1>
                    <h1 className='text-yellow-400 text-3xl'>SUV's & Trucks: { packages.suv } </h1>
                    <h1 className='text-yellow-400 text-3xl'>Large SUV's / XL Trucks / SUV's: { packages.lgtruck }</h1>
                    <br></br>
                    <p className='whitespace-pre'>{ packages.info}</p>
                </div>
            ))}
          </div>
          <div className='mx-auto text-center py-8'>
            <h1 className='text-white text-2xl font-poppins'>Window Polishing -$250 add on </h1>
            <h1 className='text-white text-2xl font-poppins'>Scratch Removal - Starting at $100 </h1>
          </div>
      </div>
    </main>
  )
}