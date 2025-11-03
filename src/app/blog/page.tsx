import Image from "next/image";
import Title from "../components/title";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Title page="Blog"></Title>
      {/* <h1>Personal</h1>
        <ul className="list-disc list-inside flex flex-col">
            <Link href="/blog/090925">090925 #1: Reading a book</Link>
        </ul>
        <br />
        <h1>Public</h1>
        <ul className="list-disc list-inside flex flex-col">
            <Link href="/blog/091025">091025 #2: Charlie Kirk</Link>
        </ul> */}
      <ul className="list-disc list-inside flex flex-col">
        <Link href="/blog/110225">November 2, 2025 #3: My experience with Google's new age requirements</Link>
      </ul>
    </div>
  );
}
