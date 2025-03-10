import Image from 'next/image';

export default function TryQard() {
  return (
    <section className="w-full min-h-[80vh] md:min-h-screen bg-black flex flex-row">
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
              fontFamily: 'Helvetica Now Display',
              fontWeight: '500',
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
              fontFamily: 'Helvetica Now Display',
              fontWeight: '500',
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
              fontFamily: 'Helvetica Now Display',
              fontSize: 'clamp(11px, 1.8vw, 16px)',
              lineHeight: '150%',
              color: 'rgba(138, 138, 142, 1)',
              marginBottom: '20px'
            }}
          >
            Join our waitlist and get ready to experience the future of finance.
          </p>

          {/* Email input and button container */}
          <div className="relative flex w-full max-w-[320px]">
            <input
              type="email"
              placeholder="Email address"
              style={{
                width: '100%',
                backgroundColor: 'rgba(30, 42, 55, 1)',
                color: '#FFFFFF',
                padding: '10px 110px 10px 14px',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: '500',
                lineHeight: '130%',
                letterSpacing: '0%',
                outline: 'none',
                fontFamily: 'Helvetica Now Display'
              }}
            />
            <button 
              style={{
                position: 'absolute',
                right: '4px',
                top: '4px',
                bottom: '4px',
                backgroundColor: 'rgba(80, 171, 255, 1)',
                color: '#FFFFFF',
                padding: '6px 14px',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: '500',
                fontFamily: 'Helvetica Now Display',
                whiteSpace: 'nowrap',
                border: '2px solid rgba(53, 148, 236, 0.6)'
              }}
            >
              Get Qard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
