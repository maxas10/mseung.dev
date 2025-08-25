import Image from 'next/image';

interface CardProps {
    value: string;
    hidden: boolean;
}

export default function Card(props: CardProps) {

    return <div className={`${props.hidden ? 'hidden' : ''} text-4xl`}>{props.value}</div>

}