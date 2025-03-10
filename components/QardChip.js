import Image from 'next/image';

export default function QardChip() {
  return (
    <div className="min-h-[900px] bg-black relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto relative">
        {/* Title */}
        <h1 className="text-white text-[40px] sm:text-[50px] md:text-[64px] font-medium mb-16">
          Meet<br />
          Qard chip.
        </h1>

        {/* Security Features Grid - becomes single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-16 lg:gap-x-80 md:gap-y-16 relative z-10">
          {/* Left Side Features */}
          <div className="space-y-8 pr-0 md:pr-16">
            <div className="flex gap-4 md:gap-8 items-start">
              <Image 
                src="/securityicon.svg"
                alt="Security Icon"
                width={46}
                height={46}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              />
              <div>
                <h3 className="text-white text-xl md:text-2xl font-medium mb-2">
                  The highest chip security standard.
                </h3>
                <p className="text-[#8a8a8e] text-base md:text-lg leading-relaxed">
                  Protection from any invasive and non-invasive attacks.
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-8 items-start">
              <Image 
                src="/securityicon.svg"
                alt="Security Icon"
                width={46}
                height={46}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              />
              <div>
                <h3 className="text-white text-xl md:text-2xl font-medium mb-2">
                  Maximum resistance
                </h3>
                <p className="text-[#8a8a8e] text-base md:text-lg leading-relaxed">
                  to dust, water and temperature extremes (-25° to 50°C).
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-8 items-start">
              <Image 
                src="/securityicon.svg"
                alt="Security Icon"
                width={46}
                height={46}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              />
              <div>
                <h3 className="text-white text-xl md:text-2xl font-medium mb-2">
                  Maximum resistance
                </h3>
                <p className="text-[#8a8a8e] text-base md:text-lg leading-relaxed">
                  to dust, water and temperature extremes (-25° to 50°C).
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Features */}
          <div className="space-y-8 pl-0 md:pl-8 lg:pl-32">
            <div className="flex gap-4 md:gap-8 items-start">
              <Image 
                src="/securityicon.svg"
                alt="Security Icon"
                width={46}
                height={46}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              />
              <div>
                <h3 className="text-white text-xl md:text-2xl font-medium mb-2">
                  The highest chip security standard.
                </h3>
                <p className="text-[#8a8a8e] text-base md:text-lg leading-relaxed">
                  Protection from any invasive and non-invasive attacks.
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-8 items-start">
              <Image 
                src="/securityicon.svg"
                alt="Security Icon"
                width={46}
                height={46}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              />
              <div>
                <h3 className="text-white text-xl md:text-2xl font-medium mb-2">
                  Maximum resistance
                </h3>
                <p className="text-[#8a8a8e] text-base md:text-lg leading-relaxed">
                  to dust, water and temperature extremes (-25° to 50°C).
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-8 items-start">
              <Image 
                src="/securityicon.svg"
                alt="Security Icon"
                width={46}
                height={46}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              />
              <div>
                <h3 className="text-white text-xl md:text-2xl font-medium mb-2">
                  Maximum resistance
                </h3>
                <p className="text-[#8a8a8e] text-base md:text-lg leading-relaxed">
                  to dust, water and temperature extremes (-25° to 50°C).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Chip Image */}
        <div className="absolute left-1/2 top-[80%] md:top-[70%] -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[900px] max-w-[900px] mx-auto">
            <Image
              src="/QardChip.svg"
              alt="Qard Chip"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
