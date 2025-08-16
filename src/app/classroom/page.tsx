import Gemini from '../components/ai';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};
export default function Page() {
    return <>
        <Gemini></Gemini>
    </>

}