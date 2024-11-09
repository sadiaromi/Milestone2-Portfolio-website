import { skills } from "../utils/dataBase";
import Progress from "../components/Progress";

function AboutSection() {
    return (
      <section
        id="about"
        className="flex flex-col max-w-6xl mx-auto md:flex-row items-center justify-center md:gap-[3rem] md:my-[6rem]"
        >
      
  
        <div className="self-center justify-self-center">
          <h2 className="mb-4 text-3xl font-bold">About</h2>
          <p className="mb-4 text-black/60">
             I am a front-end developer with a strong interest in web development. Although I have no any professional experience yet, I have learned HTML, CSS, and Typescript and continue to improve my skills. I enjoy creating websites that are both visually appealing and easy to use. My goal is to keep improving and build websites that are useful for everyone.
          </p>

          {skills.map((skill, index) => (
            <Progress
            key={index}
            name={skill.name}
            value={skill.value}
            />
          ) )}
  
         </div>
         </section>
    );
  }
  
  export default AboutSection;