import Link from "next/link";
import { socialLinks } from "../utils/dataBase";
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Button from "../components/Button";
import Image from "next/image";

function HeroSection() {
    const renderSocialIcons = () =>
      socialLinks.map(({ href, icon, label }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          className="text-black transition hover:text-orange-500 duration-300"
        >
          {icon}
        </Link>
      ));

      const paraText = `I am a front-end developer eager to start my career, with foundational skills in HTML, CSS, and Typescript. Although I have no professional experience yet, I am passionate about web development and commited to learning and improving. I'm excited to contribute to projects, build user-friendly websites, and grow as a developer.`;


    return (
      <section
        id="home"
        className="grid max-w-6xl gap-4 mx-auto my-6 md:my-12 md:grid-cols-2"
      >
        <div className="self-center  justify-self-center">
          <TextGenerateEffect
            className="text-base font-semibold md:text-xl  sm:text-3xl"
            duration={2}
            filter={false}
            words="Hi, I am"
          />
          <TextGenerateEffect
            className="text-orange-400 md:text-xl"
            duration={2}
            filter={false}
            words="Roman Sadia"
          />
          <TextGenerateEffect
            className="text-3xl font-extrabold md:text-5xl"
            duration={2}
            filter={false}
            words="Front-End"
          />
          <TextGenerateEffect
            className="ml-[5.4rem] md:ml-[8.5rem] mb-4 text-3xl font-extrabold md:text-5xl"
            duration={2}
            filter={false}
            words="Developer"
          />
          <TextGenerateEffect
            className="mb-4 text-black/60"
            duration={1}
            filter={false}
            words={paraText}
          />
          <p className="mb-4 text-black/60 text-sm sm:text-base"></p>
          <Button className="text-white bg-orange-400 hover:bg-orange-600">
            Hire Me
          </Button>
  
          <div className="flex items-center gap-4 mt-4 md:hidden">
            {renderSocialIcons()}
          </div>
        </div>
  
        <div className="flex-col items-center self-center gap-2 md:flex justify-self-center">
          <Image
            src="/Portfolio_ Profile.png"
            alt="my-image"
            height={500}
            width={500}
            quality={100}
          />
          <div className="items-center hidden gap-4 md:flex">
            {renderSocialIcons()}
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
