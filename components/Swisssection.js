import React from 'react';
import Image from 'next/image';

export default function Security() {
  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center bg-black py-12">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 gap-8 sm:gap-0">
        {/* Text content */}
        <div className="max-w-full sm:max-w-lg text-center">
          <h1
            style={{
              fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(20px, 4vw, 36px)',
              lineHeight: '130%',
              letterSpacing: '0%',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            <span role="img" aria-label="Swiss Flag"></span> Qard is redefining the wallet experience by delivering top-level security, simplicity and accessibility.
          </h1>
          <p
            style={{
              fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(16px, 3vw, 28px)',
              lineHeight: '130%',
              letterSpacing: '0%',
              color: 'rgba(23, 40, 59, 1)',
            }}
          >
            Simplicity and accessibility.
          </p>
        </div>

        {/* Card image with enhanced glow effect */}
        <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#50ABFF]/40 rounded-full blur-[150px]" />
          <Image
            src="/swissbasedcard.svg"
            alt="Qard Security Card"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
