import React from 'react';

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-2 px-4 md:px-8"
      style={{
        background: 'linear-gradient(180deg, #262C3D -45.92%, rgba(38, 44, 61, 0) 140.85%)',
        borderBottom: '2px solid rgba(23, 40, 59, 1)',
        backdropFilter: 'blur(43px)',
      }}
    >
      <div className="flex items-center">
        <div className="h-6 w-16 sm:h-8 sm:w-20">
          <img src="/headerlogo.svg" alt="Qard Logo" className="h-full" />
        </div>
      </div>
      <div>
        <button className="bg-transparent border border-[#50ABFF] text-[#50ABFF] text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full hover:bg-[#50ABFF]/10 transition-all">
          Try Qard
        </button>
      </div>
    </header>
  );
} 