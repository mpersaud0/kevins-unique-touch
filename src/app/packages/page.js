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
        backgroundImage: `url('/images/lambo.jpg')`
      }}
      >
        <h1 className='text-7xl text-white font-fira pt-32 px-32 text-center drop-shadow-glow'>DETAIL PACKAGES & PRICING</h1>
        <h2 className='text-3xl text-white font-poppins px-80 pb-24 text-center drop-shadow-glow'>Professional Detailing, Paint Corrections and Ceramic Coating 
            Serving Northern Virginia + Southern Virginia
        </h2>
      </div>
    </main>
  )
}