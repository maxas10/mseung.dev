import Image from "next/image";
import Title from "./components/title";
import Link from "next/link";
export default function Home() {
  const iconWidth: number = 30
  return (
    <>
      <Title page="Max Seung"></Title>
      <div className="flex flex-col">
        <Link href="https://github.com/maxas10">Github</Link>
        <Link href="https://www.linkedin.com/in/maxseung/">Linkedin</Link>
        <Link href="https://bsky.app/profile/mseung.bsky.social">Bluesky</Link>
        <Link href="/support/">Email</Link>


      </div>
      {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width={iconWidth} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width={iconWidth} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width={iconWidth} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width={iconWidth} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width={iconWidth} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" width={iconWidth} /> */}
      {/* <div className="flex flex-row gap-2">
        <Link href="https://calstateunderground.vercel.app">
          <Image src="/logo.jpg" alt="calstateunderground logo" width={160} height={160}></Image>
        </Link>
        <Link href="https://calstateunderground.vercel.app" className="flex justify-center">
          <Image src="/915c3449-a870-4ec1-979a-e0972fa5ad91-23-left.png" alt="calstateunderground logo" width={160} height={160} ></Image>
        </Link>
      </div> */}
      <br />
      <div className="flex flex-col">
        <Link href="/turing">Turing Machine Compiler</Link>
        <p>I made this for my AP Computer Science class because they didn&apos;t have one. Features easy to read steps.</p>
        <Link href="https://calstateunderground.vercel.app">Cal State Underground</Link>
        <p>Rock band portfolio with cloud-hosted database and RESTful API integration to organize and manage user inquiries using NextJS.</p>
        <Link href="/extension"></Link>
      </div><br />
      <div>
        <p>I went to the Berkeley Math Tournament in 2025. Don't worry about what I won.</p>
        </div> {/*About */}
      {/* <h2>Blogs</h2>
      <Link href="/111025">November 10, 2025: Securly</Link> */}
    </>
  );
}
