import React from 'react';
import Image from 'next/image';

export default function QardText() {
  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center bg-black relative">
      {/* Small logo in top left corner */}
      <div className="absolute top-8 left-8">
        <Image
          src="/path/to/logo.svg" // Update with the correct path
          alt="Qard Logo"
          width={40} // Adjust size as needed
          height={40}
        />
      </div>
      
      <div className="container mx-auto flex justify-end items-center px-8">
        <div className="max-w-[50%]">
          <p
            style={{
              fontFamily: 'Helvetica Now Display',
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '130%',
              letterSpacing: '0%',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            Qard is redefining the wallet experience by delivering top-level security, simplicity and accessibility.
          </p>
          <p
            style={{
              fontFamily: 'Helvetica Now Display',
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '130%',
              letterSpacing: '0%',
              background: 'linear-gradient(355.97deg, #182D42 70.2%, #3594EC 91.99%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Enjoy complete autonomy and independence while managing your assets with a single tap. Qard Wallet breaks down barriers for crypto newcomers and enhances the custodial experience for advanced users.
          </p>
        </div>
      </div>
    </section>
  );
}