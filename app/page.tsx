import AcmeLogo from '@/app/ui/acme-logo';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Top blue bar with logo */}
      <div className="w-full bg-blue-500 p-12 rounded-lg">
      <div className="flex items-center">
  <span className="text-white text-2xl font-bold">🌐 Acme</span>
</div>
      </div>

      {/* Content section */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* Left side: Text content */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>, brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        {/* Right side: Hero image */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Desktop image */}
          <Image
            src="/hero-desktop.png"
            alt="Hero image"
            width={1000}
            height={400}
            className="hidden md:block object-contain"
          />

          {/* Mobile image */}
          <Image
            src="/hero-mobile.png"
            alt="Mobile version screenshot"
            width={250}
            height={400}
            className="block md:hidden object-center object-contain"
          />
          
        </div>
      </div>
    </main>
  );
}
