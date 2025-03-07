import React from 'react';
import Image from 'next/image';

export default function Security() {
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center bg-black">
      <div className="container mx-auto flex items-center justify-between px-8">
        {/* Text content */}
        <div className="max-w-lg">
          <h1
            style={{
              fontFamily: 'Helvetica Now Display',
              fontWeight: 500,
              fontSize: '64px',
              lineHeight: '130%',
              letterSpacing: '0%',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            <span role="img" aria-label="Swiss Flag">🇨🇭</span> Swiss based
          </h1>
          <p
            style={{
              fontFamily: 'Helvetica Now Display',
              fontWeight: 500,
              fontSize: '64px',
              lineHeight: '130%',
              letterSpacing: '0%',
              color: 'rgba(23, 40, 59, 1)',
            }}
          >
            EAL6+ security standard
          </p>
        </div>

        {/* Card image with enhanced glow effect */}
        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#50ABFF]/40 rounded-full blur-[150px]" />
          <Image
            src="/swissbasedcard.svg"
            alt="Qard Security Card"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
