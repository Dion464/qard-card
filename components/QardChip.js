import React from 'react';
import Image from 'next/image';

export default function QardChip() {
  return (
    <section className="w-full min-h-[40vh] sm:min-h-[90vh] relative overflow-hidden bg-black py-8">
      {/* Mobile Layout */}
      <div className="sm:hidden w-full min-h-[60vh] relative flex flex-col">
        {/* Center image */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Image
            src="/QardChip.svg"
            alt="Qard Chip"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>

        {/* Top feature */}
        <div className="relative z-20 pt-4">
          <div className="flex flex-col gap-1 px-6">
            <div className="flex items-center gap-4">
              <Image 
                src="/protecionicon.svg"
                alt="Security Icon"
                width={36}
                height={36}
              />
              <p className="text-white text-base font-medium">
                High security standard
              </p>
            </div>
            <p className="text-[#8a8a8e] text-sm pl-[52px]">
              Protection from any invasive attacks
            </p>
          </div>
        </div>

        {/* Bottom feature */}
        <div className="absolute bottom-4 left-0 right-0 z-20">
          <div className="flex flex-col gap-1 px-6">
            <div className="flex items-center gap-4">
              <Image 
                src="/protecionicon.svg"
                alt="Security Icon"
                width={36}
                height={36}
              />
              <p className="text-white text-base font-medium">
                Temperature proof
              </p>
            </div>
            <p className="text-[#8a8a8e] text-sm pl-[52px]">
              Resistant to temperature extremes
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block">
        {/* Center card */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[75%] md:w-[65%] max-w-[700px] h-[500px]">
          <div className="relative w-full h-full">
            <Image
              src="/QardChip.svg"
              alt="Qard Chip"
              width={700}
              height={700}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop features */}
        <div className="absolute top-[15%] left-[5%] max-w-[350px]">
          <div className="flex items-start gap-5">
            <Image 
              src="/protecionicon.svg"
              alt="Security Icon"
              width={48}
              height={48}
              className="mt-1"
            />
            <div>
              <h3 className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-1">
                The highest chip security standard.
              </h3>
              <p className="text-[#8a8a8e] text-base md:text-lg lg:text-xl leading-relaxed">
                Protection from any invasive and non-invasive attacks.
              </p>
            </div>
          </div>
        </div>

        {/* Top right feature */}
        <div className="absolute top-[15%] right-[5%] max-w-[350px]">
          <div className="flex items-start gap-5">
            <Image 
              src="/protecionicon.svg"
              alt="Security Icon"
              width={48}
              height={48}
              className="mt-1"
            />
            <div>
              <h3 className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-1">
                The highest chip security standard.
              </h3>
              <p className="text-[#8a8a8e] text-base md:text-lg lg:text-xl leading-relaxed">
                Protection from any invasive and non-invasive attacks.
              </p>
            </div>
          </div>
        </div>

        {/* Middle left feature */}
        <div className="absolute top-[45%] left-[5%] max-w-[350px]">
          <div className="flex items-start gap-5">
            <Image 
              src="/protecionicon.svg"
              alt="Security Icon"
              width={48}
              height={48}
              className="mt-1"
            />
            <div>
              <h3 className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-1">
                Maximum resistance
              </h3>
              <p className="text-[#8a8a8e] text-base md:text-lg lg:text-xl leading-relaxed">
                to dust, water and temperature extremes (-25° to 50°C).
              </p>
            </div>
          </div>
        </div>

        {/* Middle right feature */}
        <div className="absolute top-[45%] right-[5%] max-w-[350px]">
          <div className="flex items-start gap-5">
            <Image 
              src="/protecionicon.svg"
              alt="Security Icon"
              width={48}
              height={48}
              className="mt-1"
            />
            <div>
              <h3 className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-1">
                Maximum resistance
              </h3>
              <p className="text-[#8a8a8e] text-base md:text-lg lg:text-xl leading-relaxed">
                to dust, water and temperature extremes (-25° to 50°C).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom left feature */}
        <div className="absolute bottom-[15%] left-[5%] max-w-[350px]">
          <div className="flex items-start gap-5">
            <Image 
              src="/protecionicon.svg"
              alt="Security Icon"
              width={48}
              height={48}
              className="mt-1"
            />
            <div>
              <h3 className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-1">
                Maximum resistance
              </h3>
              <p className="text-[#8a8a8e] text-base md:text-lg lg:text-xl leading-relaxed">
                to dust, water and temperature extremes (-25° to 50°C).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom right feature */}
        <div className="absolute bottom-[15%] right-[5%] max-w-[350px]">
          <div className="flex items-start gap-5">
            <Image 
              src="/protecionicon.svg"
              alt="Security Icon"
              width={48}
              height={48}
              className="mt-1"
            />
            <div>
              <h3 className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-1">
                Maximum resistance
              </h3>
              <p className="text-[#8a8a8e] text-base md:text-lg lg:text-xl leading-relaxed">
                to dust, water and temperature extremes (-25° to 50°C).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}