import Image from 'next/image';
import Gemini from '../components/ai';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  icons: {
    icon: '/classroom.png', // Path in /public
  },
};
export default function Page() {
    return <>
        <Gemini></Gemini>
    </>

}