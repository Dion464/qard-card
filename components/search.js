import Image from 'next/image';

export default function Search() {
  return (
    <div className="min-h-[200px] md:min-h-[500px] bg-[#0A1825] relative overflow-hidden px-4 sm:px-6 md:px-8 py-4 md:py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 relative h-full">
        {/* Left side with text */}
        <div className="col-span-1 z-10 flex items-center justify-center md:justify-start py-8 md:py-0 md:pb-24">
          <h1 className="text-white text-[36px] sm:text-[40px] md:text-[48px] font-medium leading-[1.2] text-center md:text-left mt-6 md:mt-32 mb-16 md:mb-0">
            Access to thousands<br />
            of digital assets.
          </h1>
        </div>

        {/* Right side with floating crypto icons */}
        <div className="absolute right-0 bottom-0 md:top-0 w-full md:w-[75%] h-36 md:h-full">
          <Image
            src="/cryptoicons.svg"
            alt="Cryptocurrency Icons"
            width={500}
            height={300}
            className="absolute right-[-50px] bottom-[-20px] md:-right-96 md:top-32 w-[400px] sm:w-[600px] md:w-[1100px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
