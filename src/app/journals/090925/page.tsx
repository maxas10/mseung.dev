import Title from "@/app/components/title"
import Image from "next/image"
import Link from "next/link"
export default function Page() {
    return <div className="w-full"><Title page="Journal #1: Reading a book"></Title>
        <p className="indent-8">
        Today, my English teacher made us get a book. I don't think I have ever read a book in the past 2 years, not because I am stupid, it's because each turning of the page reveals a shred of dread in my brain like a shred of parmesan on my pasta. But instead of a tasty meal, its just more blocks of text.</p>
        <p className="indent-8">Half of all the content in the stories I have read were just filler and descriptive words that I couldn't give a care about even if it's all I studied. I can easily understand articles about "advanced math topics" and "philosophy", but I would rather throw that fettucine in the trash than read a single noodle of literature.</p>
        <br />
        <i>- max</i>
        {/* <br />
        <br />
        <Image src={"/blogimages/090925.png"} alt={"yale english bill of rights snippet"} className="object-contain w-full h-auto" width={2520} height={340}></Image>
        <sub>Snippet from <Link href="https://avalon.law.yale.edu/17th_century/england.asp">Yale Law School English Bill of Rights.</Link></sub> */}
    </div>

}