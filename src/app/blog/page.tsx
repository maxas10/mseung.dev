import Image from 'next/image';
import Title from '../components/title';
import Link from 'next/link';

export default function Page() {

    return <div>
        <Title page="Blog"></Title>
        <h1>Journals</h1>
        <ul className="list-disc list-inside flex flex-col">
            <Link href="/journals/090925">090925 #1: Reading a book</Link>
            
        </ul>
    </div>

}