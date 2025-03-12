import Image from 'next/image';

export default function TryQard() {
  return (
    <section className="w-full min-h-[40vh] md:min-h-[60vh] bg-black flex flex-col md:flex-row">
      {/* Image section */}
      <div className="relative w-full md:w-[45%] h-[200px] md:h-auto overflow-hidden">
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

      {/* Text section */}
      <div className="w-full md:w-[55%] flex items-center justify-center py-4 md:py-12">
        <div className="w-full max-w-[600px] px-3 md:px-8 text-center md:text-left">
          <h1 
            style={{
              fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
              fontWeight: 'normal',
              fontSize: 'clamp(24px, 5vw, 80px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              marginBottom: '0',
            }}
          >
            Try Qard.
          </h1>
          <h2 
            style={{
              fontFamily: 'Helvetica Now Display, Helvetica Neue, Arial, sans-serif',
              fontWeight: 'normal',
              fontSize: 'clamp(24px, 5vw, 80px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              marginBottom: '12px',
            }}
          >
            Join waitlist.
          </h2>
        </div>
      </div>
    </section>
  );
}
