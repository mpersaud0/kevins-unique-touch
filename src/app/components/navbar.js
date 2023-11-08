import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='flex flex-row m-auto font-poppins items-center pt-12 pb-12 border-b-4 border-b-red-600'>
      <div className='pr-56'>
        <Link className='p-5 font-extrabold' href="/home">Home</Link>
        <Link className='p-5 font-extrabold' href="/services">Services</Link>
        <Link className='p-5 font-extrabold' href="/packages">Packages & Pricing</Link>
      </div>
      <div className='relative max-w-[100%]'>
        <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-12 max-w-xs' src='/images/logo.webp' alt='' />
      </div>
      <div className='pl-56'>
        <Link className='p-5 font-extrabold' href="/Membership">Monthly Membership</Link>
        <Link className='p-5 font-extrabold' href="/Gallery">Gallery</Link>
        <Link className='p-5 font-extrabold' href="/FAQ">FAQ</Link>
      </div>
    </nav>
  );
}