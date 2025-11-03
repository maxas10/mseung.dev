import Image from 'next/image';
import Title from "../../components/title"
export default function Page() {

    return <>
        <Title page="Blog" pagesrc="/blog/" page2="#3:  11/2/25"></Title>
        <p className="indent-8">A few weeks ago, Google changed their age verification system. I don't have Gemini anymore.</p>

        <br />
        <i>- max</i>
    </>

}