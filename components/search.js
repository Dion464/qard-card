import Image from 'next/image';

export default function Search() {
  return (
    <div className="min-h-[200px] md:min-h-[500px] bg-[#0A1825] relative overflow-hidden px-4 sm:px-6 md:px-8 py-4 md:py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 relative h-full">
        {/* Left side with text */}
        <div className="col-span-1 z-10 flex items-start justify-start py-4 md:py-0">
          <h1 className="text-white text-[24px] sm:text-[32px] md:text-[40px] font-medium leading-[1.2] text-left mt-6 md:mt-12">
            Access to thousands<br />
            of digital assets.
          </h1>
        </div>

        {/* Right side with floating crypto icons */}
        <div className="relative w-full h-36 md:h-full flex items-center justify-center ml-16">
          <Image
            src="/cryptoicons.svg"
            alt="Cryptocurrency Icons"
            width={500}
            height={300}
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[1000px] object-contain transform lg:translate-x-60 lg:translate-y-40"
            priority
          />
        </div>
      </div>
    </div>
  );
}
