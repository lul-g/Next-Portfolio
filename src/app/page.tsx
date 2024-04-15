import Container from '@/components/Container';
import Logo from '@/components/Logo';
import AvailPulse from '@/components/Pulse';
import Image from 'next/image';
import Link from 'next/link';
import { Audiowide } from 'next/font/google';
import { Abyssinica_SIL } from 'next/font/google';

const audiowide = Audiowide({ weight: ['400'], subsets: ['latin'] });
const abyssinica_SIL = Abyssinica_SIL({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <Container className="p-4">
      <Link className="m-2 inline-block w-fit justify-start" href="/">
        <Logo />
      </Link>
      <div className="relative mt-5 h-screen w-full text-center">
        <div className={`${audiowide.className} text-gray-600`}>
          <p>
            a <span className="font-bold text-black">full-stack</span> developer
          </p>
          <p>with a zeal for front-end development</p>
        </div>

        <div className="h-3/5">
          <Image
            className="absolute left-1/2 top-1/3 z-10 mt-5 -translate-x-1/2 -translate-y-1/2 "
            src={'/Me.png'}
            width={300}
            height={0}
            alt="My Avatar"
          />
          <span
            className={`${audiowide.className} absolute left-0 top-1/3 z-0 w-full text-nowrap text-center text-7xl`}
          >
            LULSEGED ADMASU | ልዑል አድማሡ
          </span>
        </div>

        <div
          className={`${audiowide.className} mt-6 flex w-full justify-center gap-4 capitalize`}
        >
          <Link href="/projects">
            20+ <span>Projects</span>
          </Link>
          <Link href="/projects">
            5+ <span>Companies</span>
          </Link>
          <span>100+ Visitors</span>
        </div>
        <div
          className={`${audiowide.className} mt-2 flex items-center justify-center gap-3`}
        >
          <AvailPulse available={true} />
          <Link className="animate-pulse" href={'/'}>
            Available For Work
          </Link>
        </div>
      </div>
    </Container>
  );
}
