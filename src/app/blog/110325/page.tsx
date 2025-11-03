import Image from 'next/image';
import Title from "../../components/title"
export default function Page() {

    return <>
        <Title page="Blog" pagesrc="/blog/" page2="Pi Hotspot: A Comprehensive Guide"></Title>
        <p className="indent-8">I hate Securly. </p>
        <br />
        <p className="indent-8">A few months ago, they rolled out changes that made their blocking system more strict. They even blocked this website.</p>
        <br />
        <i>- max</i>
    </>

}