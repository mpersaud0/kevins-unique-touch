import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <nav className='flex flex-row m-auto font-poppins items-center pt-12 pb-12 border-b-4 border-b-red-600'>
      <div className='pr-56'>
        <Link className='p-5 font-extrabold' href="/">Home</Link>
        <Link className='p-5 font-extrabold' href="/work">Our Work</Link>
        <Link className='p-5 font-extrabold' href="/membership">Monthly Membership</Link>
      </div>
      <div className='relative max-w-full'>
        <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-12 max-w-xs' src='/images/logo.webp' alt='' />
      </div>
      <div className='pl-56'>
        <Link className='p-5 font-extrabold' href="/ceramiccoating">Ceramic Coating</Link>
        <Link className='p-5 font-extrabold' href="/detailpackages">Detail Packages</Link>
        <Link className='p-5 font-extrabold' href="/polishingpackages">Polishing Packages</Link>
      </div>
    </nav>
  );
}