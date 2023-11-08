import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/navbar'

export default function Home() {
  return (
    <main className="flex flex-col pt-2">
      <NavBar />
      <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url('/images/m3.jpg')`
      }}
      >
        <div>        
          <h1 className='text-7xl text-white font-fira pt-32 px-32 text-center drop-shadow-glow'>DETAIL PACKAGES & PRICING</h1>
          <h2 className='text-3xl text-white font-poppins px-80 pb-12 text-center drop-shadow-glow'>Professional Detailing, Paint Corrections and Ceramic Coating 
              Serving Northern Virginia + Southern Virginia
          </h2>
        </div>
        <div className='px-96'>
          <div className='bg-red-700 text-white p-8 font-poppins rounded-3xl mx-auto flex flex-row justify-between text-2xl'>
            <div>BASIC</div>
            <div>DELUXE</div>
            <div>PRESTIGE</div>
            <div>CERAMIC</div>
          </div>
          <div className='py-12'>
            <h1 className='text-yellow-300 font-poppins text-3xl text-center'>THE BASIC PACKAGE</h1>
            <p className='text-white font-poppins text-2xl text-center py-3'>
            Foam Bath <br></br>
            Hand Wash <br></br>
            Bugs & Tar Removed <br></br>
            Wheels Cleaned <br></br>
            Tires Cleaned & Conditioned <br></br>
            Spray Sealant Applied <br></br>
            Windows & Door Jambs Cleaned <br></br>
            Light Interior Vacuum <br></br>
            Light Interior Wipe Down <br></br>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}