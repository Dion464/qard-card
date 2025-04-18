import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] sm:min-h-screen relative overflow-visible bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#0A1F3B]/70" />

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-center items-start">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col">
          {/* Main title */}
          <div className="mt-16 sm:mt-48 mb-2 sm:mb-8">
            <div
              className="text-[60px] sm:text-[120px] md:text-[200px] lg:text-[320px] font-[500] leading-[0.85] tracking-[-0.02em] bg-gradient-to-r from-black via-[#50ABFF] to-[#50ABFF]/90 bg-clip-text text-transparent"
              style={{
                fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
              }}
            >
              Qard.
            </div>
            <div
              className="text-[40px] sm:text-[80px] md:text-[120px] lg:text-[200px] font-[500] leading-[0.85] tracking-[-0.02em] text-[#50ABFF]/70 w-full"
              style={{
                fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
              }}
            >
              Your wallet.
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Glow effects */}
      <div 
        className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full opacity-80 sm:opacity-100"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 122, 255, 0.35) 0%, rgba(0, 122, 255, 0.25) 25%, rgba(0, 122, 255, 0.15) 50%, rgba(0, 122, 255, 0) 100%)',
          transform: 'translate(30%, 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Additional mobile-focused glow */}
      <div 
        className="absolute top-0 left-0 w-full h-full sm:hidden"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(80, 171, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* New center glow effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-50 sm:opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(80, 171, 255, 0.25) 0%, rgba(0, 122, 255, 0.15) 30%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(45px)',
        }}
      />

      {/* New top-left glow */}
      <div 
        className="absolute top-0 left-0 w-[500px] h-[500px] opacity-60 sm:opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(80, 171, 255, 0.2) 0%, rgba(0, 122, 255, 0.1) 40%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Right side content - moves below on mobile */}
      <div className="absolute top-[60vh] left-4 sm:top-48 sm:right-[15%] sm:left-auto max-w-[90%] sm:max-w-[380px]">
        <p
          className="text-white text-2xl sm:text-3xl md:text-4xl font-light mb-1 sm:mb-3"
          style={{
            fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
          }}
        >
       
        </p>
        <p
          className="text-[#6B7280] text-base sm:text-lg md:text-xl font-light leading-relaxed"
          style={{
            fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
          }}
        >
          As sleek as your bank card, as secure as a bank vault.
          <br className="hidden sm:block" />
          Store, buy, earn, transfer, and swap thousands of coins
          <br className="hidden sm:block" />
          and tokens in one place.
        </p>

        <button
          className="mt-2 sm:mt-8 bg-transparent border border-[#50ABFF] text-[#50ABFF] px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-base font-light inline-flex items-center hover:bg-[#50ABFF]/10 transition-all"
          style={{
            fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
          }}
        >
          Coming Soon
          <span className="ml-2"></span>
        </button>
      </div>

      {/* Card with enhanced glow effect */}
      <div className="absolute top-[3%] sm:top-[5%] -left-20 w-[85%] sm:w-[40%] h-[50%] sm:h-[60%]">
        <div className="absolute inset-0 bg-[#50ABFF]/100 blur-[300px] transform rotate-12 opacity-80 sm:opacity-100" />
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