import Image from 'next/image';

export default function TryQard() {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col md:flex-row">
      {/* Left side - Image background */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden">
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
      <div className="w-full md:w-1/2 flex items-center justify-center py-12 md:py-0">
        <div className="w-full max-w-[800px] px-6 md:px-16">
          <h1 
            style={{
              fontFamily: 'Helvetica Now Display',
              fontWeight: '500',
              fontSize: 'clamp(60px, 10vw, 140px)',
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
              fontSize: 'clamp(60px, 10vw, 140px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              marginBottom: '32px',
              verticalAlign: 'middle'
            }}
          >
            Join waitlist.
          </h2>
          <p 
            style={{
              fontFamily: 'Helvetica Now Display',
              fontSize: 'clamp(16px, 4vw, 20px)',
              lineHeight: '150%',
              color: 'rgba(138, 138, 142, 1)',
              marginBottom: '32px'
            }}
          >
            Join our waitlist and get ready to experience the future of finance.
          </p>

          {/* Email input and button container */}
          <div className="relative flex w-full max-w-[460px]">
            <input
              type="email"
              placeholder="Email address"
              style={{
                width: '100%',
                backgroundColor: 'rgba(30, 42, 55, 1)',
                color: '#FFFFFF',
                padding: '16px 140px 16px 24px',
                borderRadius: '100px',
                fontSize: '16px',
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
                padding: '12px 24px',
                borderRadius: '100px',
                fontSize: '16px',
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
