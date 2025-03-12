import React from 'react';
import Image from 'next/image';

export default function QardText() {
  return (
    <section className="w-full min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-black py-12 sm:py-0 relative">
      {/* Small logo in top left corner */}
      <div className="absolute top-12 left-8 sm:top-32 sm:left-32 flex items-center">
        <Image
          src="/log.svg"
          alt="Qard Logo"
          width={30}
          height={30}
          className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"
        />
      </div>
      
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center px-4 sm:px-8">
        <div className="w-full sm:max-w-[50%] flex items-center">
          <div className="pl-30">
            <p
              style={{
                fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
                fontWeight: 'normal',
                fontSize: 'clamp(20px, 5vw, 32px)',
                lineHeight: '130%',
                letterSpacing: '0%',
                color: 'rgba(255, 255, 255, 1)',
                textAlign: 'left',
              }}
            >
              Enjoy complete autonomy and independence while managing your assets with a single tap.
            </p>
            <p
              style={{
                fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
                fontWeight: 'normal',
                fontSize: 'clamp(20px, 5vw, 32px)',
                lineHeight: '130%',
                letterSpacing: '0%',
                background: 'linear-gradient(355.97deg, #50ABFF 30%, #82CFFF 70%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'left',
              }}
            >
              Qard Wallet breaks down barriers for crypto newcomers and enhances the custodial experience for advanced users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}