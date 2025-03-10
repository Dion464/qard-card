import Image from 'next/image';

export default function QardChip() {
  return (
    <div className="min-h-[500px] bg-black relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Title */}
        <h1 className="text-white text-[32px] sm:text-[40px] md:text-[64px] lg:text-[72px] font-medium mb-10">
          Meet<br />
          Qard chip.
        </h1>

        <div className="flex justify-between relative">
          {/* Left Side Features */}
          <div className="w-[30%] space-y-6 md:space-y-8">
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

          {/* Center Chip Image */}
          <div className="w-[40%] relative">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[700px] lg:h-[1000px] max-w-[1500px] mx-auto -translate-y-30 lg:-translate-y-60">
              <Image
                src="/QardChip.svg"
                alt="Qard Chip"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side Features */}
          <div className="w-[30%] space-y-6 md:space-y-8">
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
