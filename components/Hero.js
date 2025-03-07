import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#0A1F3B]/70" />

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-center items-start">
        <div className="container mx-auto px-8 flex flex-col">
          {/* Main title */}
          <div className="mt-48 mb-8">
            <div className="text-[280px] md:text-[320px] font-[500] leading-[0.85] tracking-[-0.02em] bg-gradient-to-r from-black via-[#50ABFF] to-[#50ABFF]/90 bg-clip-text text-transparent">
              Qard.
            </div>
            <div className="text-[160px] md:text-[200px] font-[500] leading-[0.85] tracking-[-0.02em] text-[#50ABFF]/70 w-full text-center">
              Your wallet.
            </div>
          </div>
        </div>
      </div>

      {/* Right side content */}
      <div className="absolute top-48 right-8 max-w-[380px]">
        <p className="text-white text-3xl font-light mb-3">From $45</p>
        <p className="text-[#6B7280] text-lg font-light leading-relaxed">
          As sleek as your bank card, as secure as a bank vault.
          <br />
          Store, buy, earn, transfer, and swap thousands of coins
          <br />
          and tokens in one place.
        </p>
        
        <button className="mt-8 bg-transparent border border-[#50ABFF] text-[#50ABFF] px-6 py-2 rounded-full text-base font-light inline-flex items-center hover:bg-[#50ABFF]/10 transition-all">
          Try Qard 
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* Card with enhanced glow effect */}
      <div className="absolute -left-43 top-12 w-[50%] h-[50%]">
        <div className="absolute inset-0 bg-[#50ABFF]/30 blur-[150px] transform rotate-12" />
        <Image
          src="/herocard.svg"
          alt="Qard Card"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
} 