import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] sm:min-h-screen relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#0A1F3B]/70" />

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-center items-start">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col">
          {/* Main title */}
          <div className="mt-24 sm:mt-48 mb-4 sm:mb-8">
            <div className="text-[80px] sm:text-[120px] md:text-[200px] lg:text-[320px] font-[500] leading-[0.85] tracking-[-0.02em] bg-gradient-to-r from-black via-[#50ABFF] to-[#50ABFF]/90 bg-clip-text text-transparent">
              Qard.
            </div>
            <div className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[200px] font-[500] leading-[0.85] tracking-[-0.02em] text-[#50ABFF]/70 w-full">
              Your wallet.
            </div>
          </div>
        </div>
      </div>

      {/* Right side content - moves below on mobile */}
      <div className="absolute top-[50vh] left-4 sm:top-48 sm:right-8 sm:left-auto max-w-[90%] sm:max-w-[380px]">
        <p className="text-white text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3">From $45</p>
        <p className="text-[#6B7280] text-sm sm:text-base md:text-lg font-light leading-relaxed">
          As sleek as your bank card, as secure as a bank vault.
          <br className="hidden sm:block" />
          Store, buy, earn, transfer, and swap thousands of coins
          <br className="hidden sm:block" />
          and tokens in one place.
        </p>
        
        <button className="mt-4 sm:mt-8 bg-transparent border border-[#50ABFF] text-[#50ABFF] px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base font-light inline-flex items-center hover:bg-[#50ABFF]/10 transition-all">
          Try Qard 
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* Card with enhanced glow effect */}
      <div className="absolute top-[3%] sm:top-[5%] -left-20 w-[85%] sm:w-[40%] h-[50%] sm:h-[60%]">
        <div className="absolute inset-0 bg-[#50ABFF]/30 blur-[150px] transform rotate-12" />
        <Image
          src="/herocard.svg"
          alt="Qard Card"
          fill
          className="object-contain object-left-center"
          priority
        />
      </div>
    </section>
  );
} 