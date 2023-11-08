import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/navbar'

export default function Home() {
  return (
    <main className="flex flex-col pt-2">
      <NavBar />
      <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/lambo.jpg')`
      }}
      >
        <h1 className='text-7xl text-white font-fira pt-32 px-32 text-center drop-shadow-glow'>PREMIUM MOBILE DETAILING</h1>
        <h2 className='text-3xl text-white font-poppins px-80 pb-24 text-center drop-shadow-glow'>Professional Detailing, Paint Corrections and Ceramic Coating 
            Serving Northern Virginia + Southern Virginia
        </h2>
        <button className='bg-red-700 text-white p-8 font-poppins rounded-3xl mx-auto flex text-2xl'>Book Your Appointment</button>
        <div className='p-8'>
          <p className='bg-red-700 text-white p-8 font-poppins rounded-3xl mx-auto flex max-w-lg'>★★★★★<br></br>
          I’ve had Kevin work on my car for over a year now and I can say that he provides a great service at a tremendous value. 
            He’s very detail oriented and time-sensitive. Very honest about what can and should be done. 
            I would highly recommend him for your detailing needs.<br></br>
            -Leo B.</p>
        </div>
      </div>
    </main>
  )
}
