import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks = [
  {
    href: 'https://www.linkedin.com',
    icon: <FaLinkedin className="size-5" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com',
    icon: <FaFacebook className="size-5" />,
    label: 'Facebook',
  },
  {
    href: 'https://www.github.com',
    icon: <FaGithub className="size-5" />,
    label: 'GitHub',
  },
];

export const skills = [
  { name: 'HTML', value: 90 },
  { name: 'CSS', value: 85 },

  { name: 'Typescript', value: 85 },
  { name: 'Javascript', value: 60 },

  
];

 



