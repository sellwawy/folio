
import Link from 'next/link';
import Image from 'next/image'
import siteLogo from 'images/site-logo.svg'

function Logo() {
  return (
    <Link href="/" className='me-9' aria-label="Homepage">
       <Image className="w-[9rem] md:w-[10.5rem]"
          src={siteLogo}
          alt="TohfaFolio"
          priority={true}
          quality={100}
       />
    </Link>
  );
}

export default Logo
