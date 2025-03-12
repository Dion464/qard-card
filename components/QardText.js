import React from 'react';
import Image from 'next/image';

export default function QardText() {
  return (
    <section className="w-full min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-black py-12 sm:py-0 relative">
      {/* Small logo in top left corner for mobile, original position for desktop */}
      <div className="absolute top-4 left-4 sm:top-12 sm:left-8 sm:top-32 sm:left-32 flex items-center">
        <Image
          src="/log.svg"
          alt="Qard Logo"
          width={30}
          height={30}
          className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"
        />
      </div>
      
      <div className="container mx-auto flex flex-col sm:flex-row justify-end items-center px-4 sm:px-8">
        <div className="w-full sm:max-w-[50%] flex items-center">
          <div className="pr-4 sm:pr-8 ">
            <p
              style={{
                fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
                fontWeight: 'normal',
                fontSize: 'clamp(16px, 4vw, 28px)',
                lineHeight: '130%',
                letterSpacing: '0%',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              Qard is redefining the wallet experience by delivering top-level security, simplicity and accessibility.
            </p>
            <p
              style={{
                fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
                fontWeight: 'normal',
                fontSize: 'clamp(16px, 4vw, 28px)',
                lineHeight: '130%',
                letterSpacing: '0%',
                background: 'linear-gradient(355.97deg, #50ABFF 30%, #82CFFF 70%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Enjoy complete autonomy and independence while managing your assets with a single tap. Qard Wallet breaks down barriers for crypto newcomers and enhances the custodial experience for advanced users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}