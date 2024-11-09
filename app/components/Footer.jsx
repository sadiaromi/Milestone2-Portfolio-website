'use client';
import { Link } from 'lucide-react';
import { socialLinks } from '../utils/dataBase';
import Image from 'next/image';

function Footer() {
  const renderSocialIcons = () =>
    socialLinks.map(({ href, icon, label }) => (
      <Link
        key={label}
        href={href}
        target="_blank"
        aria-label={label}
        className="text-black transition hover:text-black/60"
      >
        {icon}
      </Link>
    ));

  
  return (
    <footer className="mt-[3rem] flex flex-col justify-center items-center gap-6 md:gap-12 py-12 bg-[#f8f8f8]">
      <Image
        src="/logo.png"
        alt="logo"
        className="transition-transform duration-300 cursor-pointer hover:-rotate-6"
        width={150}
        height={50}
      />


      <div className="flex items-center gap-4 ">
        {renderSocialIcons()}
      </div>

      <p className="text-sm text-black/60">
               &copy;Sadia{' '}
        <span className="text-orange-400">Code geeks</span> | All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;