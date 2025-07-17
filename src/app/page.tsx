import Image from "next/image";
import Title from "./components/title";
export default function Home() {
  const iconWidth:number = 30
  return (
    <>
      <Title page=""></Title>

      <p>Hello! My name is Max Seung.</p>
      <p>I am a freelance developer with an interest in AI.</p>

      <br />

      <div className="flex flex-row gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width={iconWidth}/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width={iconWidth}/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width={iconWidth} />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width={iconWidth}/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width={iconWidth}/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" width={iconWidth}/>

      </div>

      <br />

      <p>Check out some of my projects!</p>

      <ul className="list-disc list-inside flex flex-col"> {/* Projects */}
        <a href="/birthdays/">Birthdays</a>
        <a href="https://calstateunderground.vercel.app">Cal State Underground</a>
        <a href="https://github.com/maxas10/cv-tracker">Computer Vision Tracker (NEW)</a>
        <a href="/stock/">Stock Trading Simulator</a>
      </ul>

      <br />

      <p>Contact me!</p>

      <ul className="list-disc list-inside flex flex-col"> {/* Socials */}
        <a href="https://github.com/maxas10">Github</a>
        <a href="https://www.linkedin.com/in/maxseung/">Linkedin</a>
        <a href="/support/">Email</a>
      </ul>

    </>
  );
}
