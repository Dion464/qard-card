import Image from 'next/image';

export default function TryQard() {
  return (
    <section className="w-full min-h-[40vh] md:min-h-[80vh] bg-black flex flex-row">
      {/* Left side - Image background */}
      <div className="relative w-[45%] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/truqardframe.svg"
            alt="Qard Card"
            fill
            style={{ objectFit: 'cover' }}
            className="select-none"
            priority
          />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-[55%] flex items-center justify-center py-4 md:py-12">
        <div className="w-full max-w-[600px] px-3 md:px-8">
          <h1 
            style={{
              fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
              fontWeight: 'normal',
              fontSize: 'clamp(28px, 5vw, 80px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              marginBottom: '0',
              verticalAlign: 'middle'
            }}
          >
            Try Qard.
          </h1>
          <h2 
            style={{
              fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
              fontWeight: 'normal',
              fontSize: 'clamp(28px, 5vw, 80px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              marginBottom: '12px',
              verticalAlign: 'middle'
            }}
          >
            Join waitlist.
          </h2>
          <p 
            style={{
              fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
              fontSize: 'clamp(11px, 1.8vw, 16px)',
              lineHeight: '150%',
              color: 'rgba(138, 138, 142, 1)',
              marginBottom: '20px'
            }}
          >
            Join our waitlist and get ready to experience the future of finance.
          </p>

          {/* Email input and button container */}
          <div className="relative flex w-full max-w-[280px] sm:max-w-[320px]">
            <input
              type="email"
              placeholder="Email address"
              style={{
                width: '100%',
                backgroundColor: 'rgba(30, 42, 55, 1)',
                color: 'rgba(138, 138, 142, 1)',
                padding: '6px 10px',
                borderRadius: '50px',
                fontSize: '10px',
                fontWeight: '400',
                lineHeight: '130%',
                letterSpacing: '0%',
                outline: 'none',
                border: '1px solid rgba(53, 148, 236, 0.6)'
              }}
              className="sm:text-[12px] md:text-[14px] sm:p-[8px_12px] md:p-[12px_16px]"
            />
            <button 
              className="
                absolute right-[2px] top-[2px] bottom-[2px]
                bg-[rgba(53,148,236,0.1)] text-white
                px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-full
                text-[9px] sm:text-[10px] md:text-xs font-bold leading-[130%]
                whitespace-nowrap border-none
                shadow-[0_0_0_1px_rgba(53,148,236,0.5)]
                transition-colors duration-300 ease-in-out
                cursor-pointer align-middle
                w-full max-w-[60px] sm:max-w-[80px] md:max-w-[120px]
              "
            >
              Get Qard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
