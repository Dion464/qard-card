import Image from 'next/image';

export default function Search() {
  return (
    <div className="min-h-[300px] md:min-h-[500px] bg-[#0A1825] relative overflow-hidden px-4 sm:px-6 md:px-8 py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 relative">
        {/* Left side with text and search */}
        <div className="col-span-1 z-10 pt-8 md:pt-24 pb-40 md:pb-0">
          <h1 className="text-white text-[28px] sm:text-[36px] md:text-[48px] font-medium mb-4 leading-[1.1]">
            Access to thousands<br />
            of digital assets.
          </h1>
          
          <div className="flex items-center gap-3 bg-[#1E2A37] rounded-full px-4 py-3 w-full max-w-[380px]">
            <Image 
              src="/Searchicon.svg" 
              alt="Search"
              width={18}
              height={18}
              className="opacity-50"
            />
            <input 
              type="text" 
              placeholder="Search"
              className="bg-transparent text-white placeholder-gray-400 flex-1 outline-none text-[15px]"
            />
            <Image 
              src="/micicon.svg" 
              alt="Voice Search"
              width={18}
              height={18}
              className="opacity-50"
            />
          </div>
        </div>

        {/* Right side with floating crypto icons */}
        <div className="absolute right-0 bottom-0 md:top-0 w-full md:w-[75%] h-48 md:h-full">
          <Image
            src="/cryptoicons.svg"
            alt="Cryptocurrency Icons"
            width={500}
            height={300}
            className="absolute right-[-50px] bottom-[-50px] md:-right-96 md:top-10 w-[400px] sm:w-[600px] md:w-[1100px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
