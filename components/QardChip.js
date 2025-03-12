import Image from 'next/image';

export default function QardChip() {
  return (
      <div className="min-h-[80px] bg-black relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-4">
      <div className="max-w-7xl mx-auto relative">
      
       

        {/* Modified layout structure for better mobile responsiveness */}
        <div className="flex flex-col md:flex-row md:justify-between relative">
          
          {/* Left Side Features - Full width on mobile, 30% on larger screens */}
          <div className="w-full md:w-[30%] space-y-6 md:space-y-8 mb-8 md:mb-0">
            <div className="flex gap-2 md:gap-4 items-start">
              <Image 
                src="/protecionicon.svg"
                alt="Security Icon"
                width={46}
                height={46}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-[46px] lg:h-[46px]"
              />
              <div>
                <h3 className="text-white text-[12px] sm:text-sm md:text-xl lg:text-2xl font-medium mb-1">
                The highest chip security standard.
                </h3>
                <p className="text-[#8a8a8e] text-[10px] sm:text-xs md:text-base lg:text-lg leading-relaxed">
                Protection from any invasive and non-invasive attacks.
                </p>
              </div>
            </div>

            <div className="flex gap-2 md:gap-4 items-start">
              <Image 
                src="/protecionicon.svg"
                alt="Security Icon"
                width={46}
                height={46}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-[46px] lg:h-[46px]"
              />
              <div>
                <h3 className="text-white text-[12px] sm:text-sm md:text-xl lg:text-2xl font-medium mb-1">
                Maximum resistance to dust, 
                </h3>
                <p className="text-[#8a8a8e] text-[10px] sm:text-xs md:text-base lg:text-lg leading-relaxed">
                water and temperature extremes (–25° to 50°C).
                </p>
              </div>
            </div>

            <div className="flex gap-2 md:gap-4 items-start">
              <Image 
                src="/protecionicon.svg"
                alt="Security Icon"
                width={46}
                height={46}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-[46px] lg:h-[46px]"
              />
              <div>
                <h3 className="text-white text-[12px] sm:text-sm md:text-xl lg:text-2xl font-medium mb-1">
                Maximum resistance to dust, 
                </h3>
                <p className="text-[#8a8a8e] text-[10px] sm:text-xs md:text-base lg:text-lg leading-relaxed">
                water and temperature extremes (–25° to 50°C).
                </p>
              </div>
            </div>
          </div>

          {/* Center Chip Image - Now positioned below text/icons on mobile */}
          <div className="w-full md:order-none mb-8 md:mb-0">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[700px] lg:h-[900px] max-w-[1400px] mx-auto">
              <Image
                src="/QardChip.svg"
                alt="Qard Chip"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side Features - Full width on mobile, 30% on larger screens */}
          <div className="w-full md:w-[30%] space-y-6 md:space-y-8">
            <div className="flex gap-2 md:gap-4 items-start">
              <Image 
                src="/protecionicon.svg"
                alt="Security Icon"
                width={46}
                height={46}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-[46px] lg:h-[46px]"
              />
              <div>
                <h3 className="text-white text-[12px] sm:text-sm md:text-xl lg:text-2xl font-medium mb-1">
                The highest chip security standard.
                </h3>
                <p className="text-[#8a8a8e] text-[10px] sm:text-xs md:text-base lg:text-lg leading-relaxed">
                Protection from any invasive and non-invasive attacks.
                </p>
              </div>
            </div>

            <div className="flex gap-2 md:gap-4 items-start">
              <Image 
                src="/protecionicon.svg"
                alt="Security Icon"
                width={46}
                height={46}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-[46px] lg:h-[46px]"
              />
              <div>
                <h3 className="text-white text-[12px] sm:text-sm md:text-xl lg:text-2xl font-medium mb-1">
                Maximum resistance to dust, 
                </h3>
                <p className="text-[#8a8a8e] text-[10px] sm:text-xs md:text-base lg:text-lg leading-relaxed">
                water and temperature extremes (–25° to 50°C).
                </p>
              </div>
            </div>

            <div className="flex gap-2 md:gap-4 items-start">
              <Image 
                src="/protecionicon.svg"
                alt="Security Icon"
                width={46}
                height={46}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-[46px] lg:h-[46px]"
              />
              <div>
                <h3 className="text-white text-[12px] sm:text-sm md:text-xl lg:text-2xl font-medium mb-1">
                Maximum resistance to dust, 
                </h3>
                <p className="text-[#8a8a8e] text-[10px] sm:text-xs md:text-base lg:text-lg leading-relaxed">
                water and temperature extremes (–25° to 50°C).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
