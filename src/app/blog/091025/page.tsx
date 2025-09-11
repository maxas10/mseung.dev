import Image from 'next/image';
import Title from "../../components/title"
export default function Page() {

    return <>
        <Title page="Blog" pagesrc="/blog/" page2="#2: Charlie Kirk 9/10/25"></Title>
        <p className="indent-8">This guy just got killed today. I wasn&apos;t going to write something today until I saw the news.</p>
        <br />
        <p className="indent-8">I remember seeing Kirk arguing with some college students a few weeks ago. Some random account on Instagram made fun of the way his face looks. I am not into politics, but killing someone over this is just crazy. What happened to free speech?</p>
        <br />
        <i>- max</i>
    </>

}