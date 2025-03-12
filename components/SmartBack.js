export default function SmartBack() {
  return (
    <div className="bg-gradient-to-b from-black to-[#0A1725] text-white min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <div className="flex flex-col items-center w-full">
        {/* Smart back text */}
        <h1 className="relative w-full overflow-hidden mb-10 md:mb-20 text-left px-4"
            style={{
              fontFamily: 'Helvetica Now Display, Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 'clamp(40px, 20vw, 300px)',
              fontWeight: 500,
              lineHeight: '1.2',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              minHeight: '20vh',
            }}>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r whitespace-nowrap"
                style={{
                  background: 'linear-gradient(105.72deg, rgba(80, 171, 255, 0.4) 0%, #50ABFF 45%, rgba(80, 171, 255, 0.4) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
            Smart back
          </span>
        </h1>

        {/* Three card section */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl mb-8 md:mb-12">
          {[
            {
              num: "01",
              text: "The chip in the card generates a random private key which never gets exposed."
            },
            {
              num: "02",
              text: "The cards establish a secure connection with each other and transfer your encrypted private keys."
            },
            {
              num: "03",
              text: "Keys are stored on three cards with no other copies to be found across space and time."
            }
          ].map((item, index) => (
            <div key={index} className="bg-[#0A1725] rounded-[24px] p-4 md:p-8 flex-1 mb-6 md:mb-0">
              <h3 className="text-[#989FB5] mb-4 md:mb-6"
                  style={{
                    fontFamily: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: 'clamp(20px, 5vw, 30px)',
                    fontWeight: 500,
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle'
                  }}>
                {item.num}
              </h3>
              <p className="text-[#989FB5] text-sm md:text-lg leading-relaxed"
                style={{
                  fontFamily: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: 'clamp(12px, 3vw, 16px)',
                  lineHeight: '140%',
                }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="bg-gradient-to-r from-[#0A1725] to-[#1A2B3C] rounded-[24px] md:rounded-[32px] p-6 md:p-24 w-full max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-4 md:py-8">
            <h2 className="text-[24px] md:text-[48px] max-w-full md:max-w-[500px]"
                style={{
                  fontFamily: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: '110%',
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 20px rgba(80, 171, 255, 0.2)'
                }}>
              Qard chip keeps you<br />safe on two fronts
            </h2>
            
            <div className="flex flex-col gap-8 md:gap-16 w-full md:w-auto">
              <div className="flex items-center gap-4">
                <img 
                  src="/securityicon.svg" 
                  alt="Biometric security"
                  className="w-10 h-10 md:w-16 md:h-16"
                />
                <p style={{
                  fontFamily: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: 'clamp(14px, 3vw, 20px)',
                  fontWeight: 500,
                  color: '#989FB5',
                  lineHeight: '140%',
                  letterSpacing: '-0.02em'
                }}>
                  Biometric security
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src="/protecionicon.svg" 
                  alt="Access code protection"
                  className="w-10 h-10 md:w-16 md:h-16"
                />
                <p style={{
                  fontFamily: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: 'clamp(14px, 3vw, 20px)',
                  fontWeight: 500,
                  color: '#989FB5',
                  lineHeight: '140%',
                  letterSpacing: '-0.02em'
                }}>
                  Access code protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
